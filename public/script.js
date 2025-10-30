console.log("Byte$ 4273 iniciado com sucesso.");
// Rate limiting and abuse detection
class AbuseDetection {
    constructor() {
        this.requestCounts = new Map();
        this.blockedIPs = new Set();
        this.rateLimit = 100; // requests per window
        this.windowMs = 15 * 60 * 1000; // 15 minutes
        this.blockDuration = 60 * 60 * 1000; // 1 hour
        this.init();
    }

    init() {
        // Clean up old request counts periodically
        setInterval(() => {
            this.cleanupOldRequests();
        }, this.windowMs);
    }

    getClientIP() {
        // In a real implementation, this would come from server headers
        // For client-side simulation, we'll use a placeholder
        return 'client-ip-address';
    }

    isBlocked(ip) {
        return this.blockedIPs.has(ip);
    }

    logRequest(ip) {
        if (this.isBlocked(ip)) {
            throw new Error('IP blocked due to abuse');
        }

        const now = Date.now();
        const requests = this.requestCounts.get(ip) || [];
        
        // Remove old requests outside the window
        const recentRequests = requests.filter(time => now - time < this.windowMs);
        
        // Add current request
        recentRequests.push(now);
        this.requestCounts.set(ip, recentRequests);

        // Check if rate limit exceeded
        if (recentRequests.length > this.rateLimit) {
            this.blockIP(ip);
            throw new Error('Rate limit exceeded');
        }
    }

    blockIP(ip) {
        this.blockedIPs.add(ip);
        console.warn(`IP ${ip} blocked due to abuse`);
        
        // Automatically unblock after blockDuration
        setTimeout(() => {
            this.unblockIP(ip);
        }, this.blockDuration);
    }

    unblockIP(ip) {
        this.blockedIPs.delete(ip);
        this.requestCounts.delete(ip);
        console.info(`IP ${ip} unblocked`);
    }

    cleanupOldRequests() {
        const now = Date.now();
        for (const [ip, requests] of this.requestCounts.entries()) {
            const recentRequests = requests.filter(time => now - time < this.windowMs);
            if (recentRequests.length === 0) {
                this.requestCounts.delete(ip);
            } else {
                this.requestCounts.set(ip, recentRequests);
            }
        }
    }
}

// Initialize abuse detection
const abuseDetection = new AbuseDetection();

// CORS configuration
const corsOptions = {
    origin: 'https://www.bytes4273.com', // Only allow official domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Apply CORS headers to all requests
function applyCORSHeaders() {
    const currentOrigin = window.location.origin;
    if (currentOrigin !== corsOptions.origin) {
        console.warn('CORS restriction: Unauthorized origin', currentOrigin);
        // In a real implementation, the browser would block this automatically
    }
}

// Apply abuse detection to all fetch requests
const originalFetch = window.fetch;
window.fetch = function(...args) {
    const ip = abuseDetection.getClientIP();
    
    try {
        abuseDetection.logRequest(ip);
        applyCORSHeaders();
        return originalFetch.apply(this, args);
    } catch (error) {
        return Promise.reject(new Error('Request blocked: ' + error.message));
    }
};