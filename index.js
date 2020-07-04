var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
         // Set AdMobAds options:
      admob.setOptions({
        publisherId:           "ca-app-pub-2368364509282508~7661702402",  // Required
        interstitialAdId:      "ca-app-pub-2368364509282508/4097861914",  // Optional
        autoShowBanner:        true,                                      // Optional
        autoShowRInterstitial: true,                                     // Optional
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();
      
      // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();
    },
};

app.initialize();
