function onLoad() {
    alert("loaded");
    // Set AdMobAds options:
    admob.setOptions({
        publisherId:          "ca-app-pub-3940256099942544/6300978111",  // Required
        interstitialAdId:     "	ca-app-pub-3940256099942544/1033173712",  // Optional
    });
}


admob.createBannerView({
    autoShowBanner: true
});

admob.requestInterstitialAd({
    autoShowInterstitial: true
});
