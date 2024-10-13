function FindProxyForURL(url, host) {
    // Eğer belirli bir URL'ye erişiyorsan
    if (host === "www.restrictedsite.com") {
        return "PROXY 198.24.187.93:8001"; // US Proxy'den alınan proxy sunucusu
    }
    
    // Diğer siteler için doğrudan bağlantı
    return "DIRECT"; 
}
