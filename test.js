/******/ !(function (e) {
  function t(a) {
    if (o[a]) return o[a].exports;
    var s = (o[a] = { exports: {}, id: a, loaded: !1 });
    return e[a].call(s.exports, s, s.exports, t), (s.loaded = !0), s.exports;
  } // webpackBootstrap
  /******/
  var o = {};
  return (t.m = e), (t.c = o), (t.p = ''), t(0);
})([
  function (e, t, o) {
    'use strict';
    var a = o(1),
      s = o(2),
      n = o(3),
      i = o(4),
      l = o(8),
      r = o(9),
      c = o(10),
      d = o(11),
      p = o(12),
      u = o(13),
      m = o(14),
      g = o(15),
      h = o(16),
      v = o(17),
      f = o(18),
      w = o(19),
      y = o(20),
      b = o(21),
      k = o(22),
      _ = o(23),
      C = o(24),
      P = o(25),
      S = o(26),
      x = o(27),
      A = o(28),
      T = o(29),
      L = o(30),
      M = o(31),
      I = o(32),
      E = o(33),
      R = o(34),
      $ = o(35),
      F = o(36),
      z = o(37),
      V = o(38);
    o(39), o(49), o(50), o(51);
    angular
      .module('plugshare', [
        'ngAnimate',
        'ngCookies',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'restangular',
        'ui.router',
        'ngMaterial',
        'toastr',
        'angular-md5',
        'RestangularFactory',
        'CognitoFactory',
        'PreloaderFactory',
        'Filters',
        'ngMeta',
        'ui.sortable',
        'pascalprecht.translate',
      ])
      .constant('moment', moment)
      .config(a.config)
      .config(s.routerConfig)
      .run(n.runBlock)
      .directive('plugshareMap', E.PlugshareMapDirective)
      .directive('simpleMap', R.SimpleMapDirective)
      .directive('fileRead', $.FileReadDirective)
      .directive('fileDetails', F.FileDetailsDirective)
      .directive('imageError', z.ImageErrorDirective)
      .directive('imageFit', V.ImageFitDirective)
      .controller('MapsController', i.MapsController)
      .controller('ActivityController', l.ActivityController)
      .controller('TripController', r.TripController)
      .controller('SearchController', c.SearchController)
      .controller('SessionsController', d.SessionsController)
      .controller('PWPSController', p.PWPSController)
      .controller('LocationController', u.LocationController)
      .controller('VehicleController', m.VehicleController)
      .controller('CheckinController', g.CheckinController)
      .controller('TutorialController', h.TutorialController)
      .controller('FeedbackController', v.FeedbackController)
      .controller('UploadController', f.UploadController)
      .controller('MessageController', w.MessageController)
      .controller('AuthController', y.AuthController)
      .controller('ForgotController', b.ForgotController)
      .controller('ProfileController', k.ProfileController)
      .controller('ReportController', _.ReportController)
      .controller('CookiesController', C.CookiesController)
      .controller('BookmarkController', P.BookmarkController)
      .controller('SettingsController', S.SettingsController)
      .controller('ChangelogController', x.ChangelogController)
      .controller('ReviewsController', A.ReviewsController)
      .controller('StationsController', T.StationsController)
      .controller('PhotosController', L.PhotosController)
      .controller('AdController', M.AdController)
      .controller('PricingController', I.PricingController)
      .config([
        'RestangularProvider',
        function (e) {
          e.setDefaultHeaders({
            Authorization: 'Basic d2ViX3YyOkVOanNuUE54NHhXeHVkODU=',
          }),
            -1 != window.location.href.indexOf('localhost')
              ? e.setBaseUrl('https://api-staging.plugshare.com/v3')
              : -1 != window.location.href.indexOf('testing.plugshare.com')
              ? e.setBaseUrl('https://api-testing.plugshare.com/v3')
              : e.setBaseUrl(
                  'undefined' != typeof environment
                    ? environment.apiUrl
                    : 'https://api.plugshare.com/v3'
                );
        },
      ])
      .config([
        '$cookiesProvider',
        function (e) {
          void 0;
          var t = new Date();
          (e.defaults.expires = new Date(
            t.getFullYear() + 1,
            t.getMonth(),
            t.getDate()
          )),
            -1 != window.location.href.indexOf('plugshare.com') &&
              ((e.defaults.path = '/'),
              (e.defaults.secure = !0),
              (e.defaults.domain = '.plugshare.com'));
        },
      ])
      .config([
        '$mdInkRippleProvider',
        function (e) {
          (navigator.userAgent.match(/QtCarBrowser/i) ||
            navigator.userAgent.indexOf('Tesla') > -1) &&
            e.disableInkRipple();
        },
      ])
      .config([
        '$translateProvider',
        function (e) {
          e.translations('en', {
            'Restricted or Coming Soon locations may be hidden by your filter settings':
              'Restricted or Coming Soon locations may be hidden by your filter settings',
            'Please double check nearby locations below to avoid adding duplicates':
              'Please double check nearby locations below to avoid adding duplicates',
            'Station Fault': 'Station Fault',
            'Timed Out': 'Timed Out',
            'A station fault has interrupted charging':
              'A station fault has interrupted charging',
            'Credit card pre-auth will be removed':
              'Credit card pre-auth will be removed',
            'Station activation has failed': 'Station activation has failed',
            'Apple App Store': 'Apple App Store',
            'Google Play Store': 'Google Play Store',
            Stats: 'Stats',
            Advertise: 'Advertise',
            'Pull through parking': 'Pull through parking',
            'You left a comment here on ': 'You left a comment here on ',
            'You could not charge here on ': 'You could not charge here on ',
            'This station is not available for activation on Plugshare':
              'This station is not available for activation on Plugshare',
            'Tesla Only': 'Tesla Only',
            Actions: 'Actions',
            Illuminated: 'Illuminated',
            'Tesla Drivers Only': 'Tesla Drivers Only',
            Hiking: 'Hiking',
            Camping: 'Camping',
            'Pull in parking': 'Pull in parking',
            'Trailer parking': 'Trailer parking',
            'Trailer friendly': 'Trailer friendly',
            'Handicapped parking': 'Handicapped parking',
            'Wheelchair accessible': 'Wheelchair accessible',
            'Locations shown are not being filtered by PlugScore':
              'Locations shown are not being filtered by PlugScore',
            'Locations shown are being filtered by PlugScore':
              'Locations shown are being filtered by PlugScore',
            'Locations shown are not being filtered by kilowatts':
              'Locations shown are not being filtered by kilowatts',
            'Locations shown are being filtered by kilowatts':
              'Locations shown are being filtered by kilowatts',
            'Show Locations That Require Payment':
              'Show Locations That Require Payment',
            'Show In-Use Locations': 'Show In-Use Locations',
            'Show Restricted Locations': 'Show Restricted Locations',
            'Show Residential Locations': 'Show Residential Locations',
            'Show Coming Soon Locations': 'Show Coming Soon Locations',
            'Temporary Filters': 'Temporary Filters',
            'These restrictive filters hide any locations not matching requirements, so they are not saved on refresh':
              'These restrictive filters hide any locations not matching requirements, so they are not saved on refresh',
            'Password successfully updated': 'Password successfully updated',
            'I understand deleting my PlugShare account cannot be undone':
              'I understand deleting my PlugShare account cannot be undone',
            'There are no checkins at this location':
              'There are no checkins at this location',
            'These plug filters are saved to your vehicle':
              'These plug filters are saved to your vehicle',
            'Location Filters': 'Location Filters',
            'Showing Filters for': 'Showing Filters for',
            'Vehicle Not Selected': 'Vehicle Not Selected',
            'Show only relevant plugs by adding a vehicle':
              'Show only relevant plugs by adding a vehicle',
            'Incompatible plugs': 'Incompatible plugs',
            'Account successfully deleted': 'Account successfully deleted',
            'Incorrect password': 'Incorrect password',
            'Change Password': 'Change Password',
            'Current Password': 'Current Password',
            'New Password': 'New Password',
            'If you are using a legacy password':
              'If you are using a legacy password that does not meet our current requirements, please use the Forgot Password button to reset your password.',
            'Delete Account': 'Delete Account',
            'Please enter your password to delete your account':
              'Please enter your password to delete your account',
            'Are you sure you want to delete your PlugShare account':
              'Are you sure you want to delete your PlugShare account',
            'This action cannot be undone': 'This action cannot be undone',
            'You have never checked in here': 'You have never checked in here',
            'Last Checkin': 'Last Checkin',
            'You successfully charged here on':
              'You successfully charged here on',
            'View My Checkins': 'View My Checkins',
            "You haven't viewed any locations recently":
              "You haven't viewed any locations recently.",
            'You can easily access your recently viewed locations here':
              'You can easily access your recently viewed locations here.',
            "You don't have any recent activity":
              "You don't have any recent activity.",
            'You can easily access your recent checkins, added photos and locations here':
              'You can easily access your recent checkins, added photos and locations here.',
            'Fetching Data': 'Fetching Data...',
            'Login with your old email to confirm email change':
              'Login with your old email to confirm email change',
            'Please login to your account to change your email':
              'Please login to your account to change your email',
            'Recently Viewed': 'Recently Viewed',
            'My Activity': 'My Activity',
            'My Details': 'My Details',
            'New Email': 'New Email',
            'Current Email': 'Current Email',
            'Change Email': 'Change Email',
            'Email Successfully Updated': 'Email Successfully Updated',
            'Your new email is unverified': 'Your new email is unverified',
            'Please verify your new email to complete your email change':
              'Please verify your new email to complete your email change',
            'Pending Email': 'Pending Email',
            'Until you confirm this new email, you must continue to log in with your existing email and password':
              'Until you confirm this new email, you must continue to log in with your existing email and password',
            'Overhead Clearance': 'Overhead Clearance',
            Feet: 'Feet',
            Meters: 'Meters',
            'Pull Through': 'Pull Through',
            'Pull In': 'Pull In',
            'Trailer Parking': 'Trailer Parking',
            'Trailer Friendly': 'Trailer Friendly',
            Garage: 'Garage',
            'Access Restrictions': 'Access Restrictions',
            'Customers Only': 'Customers Only',
            'Guests Only': 'Guests Only',
            'Employees Only': 'Employees Only',
            'Students Only': 'Students Only',
            'Residents Only': 'Residents Only',
            'Parking Level': 'Parking Level',
            'Overhead Clearance Meters': 'Overhead Clearance Meters',
            'Parking Attributes': 'Parking Attributes',
            'A charging session is already active':
              'A charging session is already active. Would you like to stop tracking the session and proceed?',
            'Are you sure you want to delete':
              'Are you sure you want to delete {{card_type}} ending in {{last_four}}?',
            'Custom View': 'Custom View',
            'This is a temporary filtered view':
              'This is a temporary filtered view. When you exit this view, you will return to your normal filter settings.',
            'XX out of 10': '{{number}} out of 10',
            'Payment Details': 'Payment Details',
            Station: 'Station',
            Outlet: 'Outlet',
            'Loading Station Information': 'Loading Station Information...',
            'Unable to stop the session': 'Unable to stop the session',
            'Are you sure you want to stop charging':
              'Are you sure you want to stop charging?',
            'Please select a payment method': 'Please select a payment method',
            'This card has expired': 'This card has expired',
            'Payment method added': 'Payment method added',
            'Payment method deleted': 'Payment method deleted',
            Error: 'Error',
            'Could not activate station': 'Could not activate station',
            'Charge now with Pay with PlugShare':
              'Charge now with Pay with PlugShare',
            'Leave a Checkin': 'Leave a Checkin',
            Sponsored: 'Sponsored',
            'An account with the given email already exists':
              'An account with the given email already exists',
            'Select Your': 'Select Your',
            Vehicle: 'Vehicle',
            '8 characters': '8 characters',
            'one uppercase': 'one uppercase',
            'one lowercase': 'one lowercase',
            'one number': 'one number',
            'Simple yet flexible': 'Simple yet flexible',
            'Filter to be nearby hotels, restaurants, etc': {
              '': 'Filter to be nearby hotels, restaurants, etc.',
            },
            'Elevation Profiles': 'Elevation Profiles',
            'Helps you plan accordingly': 'Helps you plan accordingly',
            'Save and load trips': 'Save and load trips',
            'Works across devices': 'Works across devices',
            "it's mobile friendly": "it's mobile friendly",
            'Login or Register Now for Instant Access':
              'Login or Register Now for Instant Access',
            'Exclusive access to Trip Planner':
              'Exclusive access to Trip Planner',
            'smart routing for long journeys':
              'smart routing for long journeys',
            'Alerts when chargers open near you':
              'Alerts when chargers open near you',
            'Driver to driver messaging': 'Driver to driver messaging',
            'app only': 'app only',
            'Have you tried the PlugShare Trip Planner':
              'Have you tried the PlugShare Trip Planner',
            'Plan your next trip with our easy to use tool':
              'Plan your next trip with our easy to use tool',
            'Focus your search': 'Focus your search',
            'Only show locations along your route':
              'Only show locations along your route',
            'Incorrect username or password': 'Incorrect username or password',
            'Join the largest EV community': 'Join the largest EV community',
            'Fast and Free': 'Fast and Free',
            'Exclusive Member Benefits': 'Exclusive Member Benefits',
            'Add your voice': 'Add your voice',
            'Leave reviews, tips, photos, and more':
              'Leave reviews, tips, photos, and more',
            'Add your vehicle': 'Add your vehicle',
            'Automatically see only compatible chargers':
              'Automatically see only compatible chargers',
            'Email sent': 'Email sent',
            'Please enter the confirmation code to verify your account':
              'Please enter the confirmation code to verify your account',
            'Verification Code': 'Verification Code',
            'Joining PlugShare is Fast and Free':
              'Joining PlugShare is Fast and Free',
            Days: '{{days}} Days',
            'All Time': 'All Time',
            Locations: 'Locations',
            Added: 'Added',
            'account linked':
              'Your {{social}} account has been linked to your existing account under {{email}}',
            'Please authenticate below again via Social Sign In to continue':
              'Please authenticate below again via Social Sign In to continue',
            'this is a one time process': 'this is a one time process',
            'Login to confirm Email to your account':
              'Login to confirm Email to your account',
            'Recently updated security policies':
              'We\'ve recently updated our security policies and require you to sign back in to re-authenticate your account. If you forgot your password, you can click "Forgot Password" below to reset your password. Thank you.',
            'Social sign in success': 'Social sign in success',
            'Please complete the form to complete registration':
              'Please complete the form to complete registration',
            'Please complete registration to perform this action':
              'Please complete registration to perform this action',
            'Display Name': 'Display Name',
            'visible to other users': 'visible to other users',
            'Please fill out all required fields':
              'Please fill out all required fields',
            'Your email is unverified': 'Your email is unverified',
            'Please verify your Email to validate your account':
              'Please verify your Email to validate your account',
            'Your registration is incomplete':
              'Your registration is incomplete',
            'Please complete your profile to fully activate your account':
              'Please complete your profile to fully activate your account',
            'Invalid verification code provided, please try again': {
              '': 'Invalid verification code provided, please try again.',
            },
            "Didn't get the email": "Didn't get the email?",
            'Resend Verification Code': 'Resend Verification Code',
            'By continuing you agree to our:':
              'By continuing you agree to our:',
            'You are authenticated with':
              'You are authenticated with {{social}}',
            'Complete your profile': 'Complete your profile',
            Complete: 'Complete',
            'Email successfully verified': 'Email successfully verified',
            'Please finish your profile details to complete registration':
              'Please finish your profile details to complete registration',
            'Continue with': 'Continue with {{social}}',
            'or continue with email': 'or continue with email',
            'New to PlugShare': 'New to PlugShare?',
            'Password Rules': 'Password Rules: Must contain {{rules}}',
            'Confirm your Email': 'Confirm your Email',
            'Account created': 'Account created',
            'Please enter the confirmation code sent to your email to verify your account':
              'Please enter the confirmation code sent to your email to verify your account',
            Code: 'Code',
            Verify: 'Verify',
            'Pay with PlugShare History': 'Pay with PlugShare History',
            Expired: 'Expired',
            Delete: 'Delete',
            Done: 'Done',
            Phone: 'Phone',
            'Saving Card': 'Saving Card',
            'Add Card': 'Add Card',
            'Save Card': 'Save Card',
            'Confirm Payment': 'Confirm Payment',
            'Please set a payment method to continue':
              'Please set a payment method to continue',
            'View Terms & Conditions': 'View Terms & Conditions',
            'Pay Now': 'Pay Now',
            'Select Payment': 'Select Payment',
            'Select Payment Method': 'Select Payment Method',
            'View Active Charging Session': 'View Active Charging Session',
            'Unknown Status': 'Unknown Status',
            Refresh: 'Refresh',
            'Select a Connector': 'Select a Connector',
            'No stations found': 'No stations found',
            Unavailable: 'Unavailable',
            'Activate at your own discretion':
              'We may not be receiving the latest status updates for stations marked UNAVAILABLE. Activate at your own discretion.',
            'Processing Payment': 'Processing Payment',
            Processing: 'Processing',
            Connected: 'Connected',
            Charging: 'Charging',
            Stopping: 'Stopping',
            Fault: 'Fault',
            Timeout: 'Timeout',
            'Session Complete': 'Session Complete',
            'Network Session ID': 'Network Session ID',
            'Contact Support': 'Contact Support',
            Authorizing: 'Authorizing',
            'Energy Added': 'Energy Added',
            'Estimated Cost': 'Estimated Cost',
            Cost: 'Cost',
            'Stop Charge': 'Stop Charge',
            View: 'View',
            'Last Updated': 'Last Updated',
            'Charge History': 'Charge History',
            'Get started with Pay with PlugShare':
              'Get started with Pay with PlugShare',
            Free: 'Free',
            'Load More': 'Load More',
            'Session Details': 'Session Details',
            'Communicating with Charger': 'Communicating with Charger',
            'If you have not already plugged in your vehicle please plug it in now':
              'If you have not already plugged in your vehicle please plug it in now. It may take a few moments for this screen to update once charging begins.',
            'State of Charge': 'State of Charge',
            'Rate of Charge': 'Rate of Charge',
            'Cookie Explanation':
              "Most of the cookies are for the user's convenience to save your settings such as your filters, map location, map settings, etc. We use very few 3rd party cookies, but we do use analytics to help us gauge our user base and interactions to help us improve and troubleshoot issues.",
            'Cookie Links':
              '|Click here| for an in-depth explanation of our cookie usage, and |Click here| for a full list of our cookies.',
            'Click here': 'Click here',
            'You can update your cookie settings anytime in this menu':
              'You can update your cookie settings anytime in this menu',
            'Manage Cookies': 'Manage Cookies',
            'Cookie Settings': 'Cookie Settings',
            'Accept All': 'Accept All',
            Essential: 'Essential',
            Functional: 'Functional',
            Analytical: 'Analytical',
            Marketing: 'Marketing',
            'This website uses cookies': 'This website uses cookies.',
            'contact us': 'contact us',
            'My Vehicles': 'My Vehicles',
            'Update Photo': 'Update Photo',
            'No Information Provided': 'No Information Provided',
            'Plugshare services failed to load':
              'Plugshare services failed to load.',
            'Please refresh your browser':
              'Please refresh your browser. If problems persist, please make sure connection to api.plugshare.com is working or |contact us| for further assistance.',
            'Join PlugShare': 'Join PlugShare',
            'Welcome Back': 'Welcome Back',
            Power: 'Power',
            'View Change Log': 'View Change Log',
            "What's New": "What's New",
            'Determines filters and vehicle list':
              'determines filters & vehicle list',
            'Currently for CCS, CHAdeMO, Supercharger only':
              'Currently for CCS, CHAdeMO, Supercharger only.',
            'Plug filters match my vehicle defaults':
              'Plug filters match my vehicle defaults',
            'Compatible Plugs': 'Compatible Plugs',
            'Other Plugs': 'Other Plugs',
            'Show All': 'Show All',
            Hide: 'Hide',
            'Minimum Power': 'Minimum Power',
            'Show locations with a minimum power':
              'Show locations with a minimum power. Locations with no power data will be filtered out',
            'Plan a New Trip': 'Plan a New Trip',
            'Left a comment at': 'Left a comment at',
            'Leave A Comment': 'Leave A Comment',
            'PlugShare Title':
              'PlugShare - EV Charging Station Map - Find a place to charge',
            'PlugShare Description':
              'Find EV charging stations with PlugShare’s map of over 440,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.',
            'Set Up': 'Set Up',
            'Set Up Account': 'Set Up Account',
            Settings: 'Settings',
            'PlugShare Settings': 'PlugShare.com Settings',
            Language: 'Language',
            Units: 'Units',
            'for plug network filters and available vehicles':
              'for plug/network filters & available vehicles',
            Kilowatts: '{{kilowatts}} Kilowatts',
            List: 'List',
            Exit: 'Exit',
            'Trip Planner Mode': 'Trip Planner Mode',
            'Manage Vehicles': 'Manage Vehicles',
            'New Vehicle': 'New Vehicle',
            'Vehicle XX': 'Vehicle {{number}}',
            'Add New': 'Add New',
            'Add Vehicle': 'Add Vehicle',
            'Add New Vehicle': 'Add New Vehicle',
            'Delete Vehicle': 'Delete Vehicle',
            'Plugs for my XX': 'Plugs for my {{vehicle}}',
            'Reset plugs to match vehicle defaults':
              'Reset plugs to match vehicle defaults',
            'Custom Filters': 'Custom Filters',
            'Filter charging locations to match your vehicle and preferences':
              'Filter charging locations to match your vehicle and preferences',
            'Plan and save trips for your longer drives':
              'Plan and save trips for your longer drives',
            'Save your favorite locations and charging stations':
              'Save your favorite locations and charging stations',
            'Join Community': 'Join Community',
            'Share locations, photos, and reviews with fellow EV Drivers':
              'Share locations, photos, and reviews with fellow EV Drivers',
            'Sign Up': 'Sign Up',
            "No thanks, I'll pass": "No thanks, I'll pass",
            "No thanks, I'll pass for now": "No thanks, I'll pass for now",
            'Thank you for using the new PlugShare Web App':
              'Thank you for using the new PlugShare Web App. We appreciate any feedback (general thoughts, bug reports, suggestions, location inaccuracies) and will take your thoughts into consideration as we continue to build and improve this platform.',
            'Thank you for choosing PlugShare':
              'Thank you for choosing PlugShare!',
            'The PlugShare Team': 'The PlugShare Team',
            'Facebook Discussion Group': 'Facebook Discussion Group',
            'Welcome to PlugShare': 'Welcome to PlugShare!',
            'PlugShare is your guide to electric vehicle charging wherever you go':
              'PlugShare is your guide to electric vehicle charging wherever you go.',
            'We use your location permissions to display your location on the map':
              'We use your location permissions to display your location on the map.',
            "We hope you've been enjoying your use of PlugShare":
              "We hope you've been enjoying your use of PlugShare",
            'Create a free account to access many great features':
              'Create a free account to access many great features',
            'All non-participating locations will be excluded':
              'All non-participating locations will be excluded',
            'Accepts Pay with PlugShare': 'Accepts Pay with PlugShare',
            'READ ONLY': 'READ ONLY',
            'Toggle All': 'Toggle All',
            "Valuable User's Feedback": "Valuable User's Feedback",
            'General Feedback': 'General Feedback',
            'Bug Report': 'Bug Report',
            'Feature Suggestion': 'Feature Suggestion',
            'Location Inaccuracy': 'Location Inaccuracy',
            'Please share some details': 'Please share some details',
            'Have a screenshot to show us': 'Have a screenshot to show us?',
            Total: 'Total',
            'Do you have a home charger': 'Do you have a home charger',
            'optional, not shared with other users':
              'optional, not shared with other users',
            'Select one': 'Select one',
            'I own a dedicated vehicle charging station at home':
              'I own a dedicated vehicle charging station at home',
            'I intend to buy my own dedicated home charging station':
              'I intend to buy my own dedicated home charging station',
            'I live in a multi-unit dwelling and charge from its provided charging station(s)':
              'I live in a multi-unit dwelling and charge from its provided charging station(s)',
            'I charge from employer-provided charging stations or outlets':
              'I charge from employer-provided charging stations or outlets',
            'I charge from a wall outlet at home':
              'I charge from a wall outlet at home',
            'I charge from public chargers not associated with where I live or work':
              'I charge from public chargers not associated with where I live or work',
            'Trip Planner for your longer drives':
              'Trip Planner for your longer drives',
            'Max Kilowatts': 'Max Kilowatts',
            'Switch to Kilowatts': 'Switch to Kilowatts',
            'Switch to Amps & Volts': 'Switch to Amps & Volts',
            'Clear Search History': 'Clear Search History',
            'Coming Soon Locations': 'Coming Soon Locations',
            'Only show locations matching ALL amenities selected':
              'Only show locations matching ALL amenities selected',
            'recommended use: only one at a time':
              'recommended use: only one at a time',
            'Only show locations participating in these programs':
              'Only show locations participating in these programs',
            mi: 'mi',
            km: 'km',
            Cookies: 'Cookies',
            'Privacy Policy': 'Privacy Policy',
            'Terms & Conditions': 'Terms & Conditions',
            Warning: 'Warning',
            'Update Profile Picture': 'Update Profile Picture',
            'Max size': 'Max size',
            'Select File': 'Select File',
            Caption: 'Caption',
            Upload: 'Upload',
            'Please enter a message': 'Please enter a message',
            'A brief description about you': 'A brief description about you',
            'Loading Stats': 'Loading Stats...',
            'All rights reserved': 'All rights reserved.',
            Privacy: 'Privacy',
            'Terms of Use': 'Terms of Use',
            Developers: 'Developers',
            FAQ: 'FAQ',
            'Minimum value is XX': 'Minimum value is {{number}}',
            'Maximum value is XX': 'Maximum value is {{number}}',
            'Valet Parking': 'Valet Parking',
            Restrooms: 'Restrooms',
            'New location added at': 'New location added at',
            'Added a photo of': 'Added a photo of',
            'Checked in at': 'Checked in at',
            "User's Profile": "{{firstname}}'s Profile",
            'My Profile': 'My Profile',
            'Edit Profile': 'Edit Profile',
            Logout: 'Logout',
            'My Vehicle': 'My Vehicle',
            'No Image Available': 'No Image Available',
            'Update Vehicle': 'Update Vehicle',
            Bookmarks: 'Bookmarks',
            'No Bookmarks': 'No Bookmarks',
            Login: 'Login',
            Register: 'Register',
            'Register with PlugShare for Great Benefits':
              'Register with PlugShare for Great Benefits!',
            'Tailor PlugShare to your vehicle':
              'Tailor PlugShare to your vehicle',
            'Bookmark your favorite locations':
              'Bookmark your favorite locations',
            'Share reviews and help other drivers':
              'Share reviews and help other drivers',
            'Get exclusive deals and special offers':
              'Get exclusive deals and special offers',
            'Search for a Charging Location': 'Search for a Charging Location',
            'No locations matching searchText were found':
              'No locations matching {{search}} were found.',
            Legend: 'Legend',
            Public: 'Public',
            'High Power': 'High Power',
            Restricted: 'Restricted',
            'In Use': 'In Use',
            'Under Repair': 'Under Repair',
            Residential: 'Residential',
            Place: 'Place',
            Filters: 'Filters',
            Region: 'Region',
            Plugs: 'Plugs',
            'X of XX': '{{quantity}} of {{max}}',
            'Reset plugs to my vehicle': 'Reset plugs to my {{vehicle}}',
            'Plug filters match my vehicle':
              'Plug filters match my {{vehicle}}',
            Networks: 'Networks',
            Other: 'Other',
            'Other includes other networks and non-networked locations (recommended on)':
              "Other includes 'other networks' and 'non-networked' locations (recommended on)",
            Include: 'Include',
            'Payment Required Locations': 'Payment Required Locations',
            'Restricted Locations': 'Restricted Locations',
            'Residential Locations': 'Residential Locations',
            'Currently In-Use Locations': 'Currently In-Use Locations',
            Amenities: 'Amenities',
            Lodging: 'Lodging',
            Dining: 'Dining',
            Restroom: 'Restroom',
            'EV Parking': 'EV Parking',
            Valet: 'Valet',
            Park: 'Park',
            WiFi: 'WiFi',
            Shopping: 'Shopping',
            Grocery: 'Grocery',
            'Minimum PlugScore': 'Minimum PlugScore',
            Extras: 'Extras',
            'Extra settings that may overwrite other filters':
              'Extra settings that may overwrite other filters',
            'My Account': 'My Account',
            'Add Station': 'Add Station',
            'Add Public Location': 'Add Public Location',
            'Share Home Charger': 'Share Home Charger',
            'View Home Charger': 'View Home Charger',
            'Trip Planner': 'Trip Planner',
            'Desktop Only': 'Desktop Only',
            NEW: 'NEW',
            'Create New': 'Create New',
            'Leg stops': '{{count}} stops',
            'Recent Activity': 'Recent Activity',
            Help: 'Help',
            'Submit Feedback': 'Submit Feedback',
            'PlugShare Store': 'PlugShare Store',
            'Get the App': 'Get the App',
            Traffic: 'Traffic',
            'Charging Locations': 'Charging Locations',
            Map: 'Map',
            Terrain: 'Terrain',
            Satellite: 'Satellite',
            'Clear Amenity Filters': 'Clear Amenity Filters',
            'Login to view residential charger details':
              'Login to view residential charger details',
            'Check In': 'Check In',
            'Add to Trip': 'Add to Trip',
            Remove: 'Remove',
            Bookmark: 'Bookmark',
            Unbookmark: 'Unbookmark',
            'Add Photo': 'Add Photo',
            Message: 'Message',
            Directions: 'Directions',
            Edit: 'Edit',
            Report: 'Report',
            Parking: 'Parking',
            'Add Amenities': 'Add Amenities',
            'Open 24/7': 'Open 24/7',
            'Plugs (1 Kind)': 'Plugs (1 Kind)',
            'Plugs (Quantity Kinds)': 'Plugs ({{quantity}} Kinds)',
            'More Details': 'More Details',
            'Non-networked': 'Non-networked',
            Checkins: 'Checkins',
            'My Checkins': 'My Checkins',
            'All Checkins': 'All Checkins',
            'View More': 'View More',
            Photos: 'Photos',
            'Share Link': 'Share Link',
            "You can also copy the link from your browser's address bar":
              "You can also copy the link from your browser's address bar.",
            'Nearby Locations': 'Nearby Locations',
            'Report a Problem': 'Report a Problem',
            'Select Plug': 'Select Plug',
            'Is this charging location open/active':
              'Is this charging location open/active?',
            Yes: 'Yes',
            "No, it's Under Construction or Coming Soon":
              "No, it's Under Construction or Coming Soon",
            Email: 'Email',
            'Please provide us with an email to respond to':
              'Please provide us with an email to respond to.',
            'Total Distance': 'Total Distance',
            miles: 'miles',
            kilometers: 'kilometers',
            Loading: 'Loading...',
            'Trip Name': 'Trip Name',
            Start: 'Start',
            'Insert Stop Here': 'Insert Stop Here',
            Destination: 'Destination',
            'Starting Location': 'Starting Location',
            'Search address or click on the map':
              'Search address or click on the map',
            Wait: 'Wait',
            hours: 'hours',
            mins: 'mins',
            'Add Stop': 'Add Stop',
            'Total Time Including Waiting': 'Total Time Including Waiting',
            'About Duration': 'About',
            'Segments of your trip':
              "{{number}} segments of your trip have 'total distance between two charging locations' greater than your 'max range estimate' (shown above in red). We recommend adding additional charging location(s) in between.",
            Center: 'Center',
            Overview: 'Overview',
            Elevation: 'Elevation',
            Save: 'Save',
            Search: 'Search',
            'View Directions': 'View Directions',
            Options: 'Options',
            'Show Along Route Only': 'Show Along Route Only',
            'Search Radius': 'Search Radius',
            Metric: 'Metric',
            Imperial: 'Imperial',
            'Show Range Estimate': 'Show Range Estimate',
            'Estimated Max Range': 'Estimated Max Range',
            'The circle does not account for pathing, elevation, road or weather conditions':
              'The circle does not account for pathing, elevation, road or weather conditions. Please plan accordingly.',
            'Add Wait Times': 'Add Wait Times',
            'Define your own wait / charge times at each stop':
              'Define your own wait / charge times at each stop.',
            'Customizable up top, between each added stop':
              'Customizable up top, between each added stop.',
            'Total Wait Time': 'Total Wait Time',
            'Avoid Tolls': 'Avoid Tolls',
            'Avoid Highways': 'Avoid Highways',
            'Avoid Ferries': 'Avoid Ferries',
            'Hotel/Lodging': 'Hotel/Lodging',
            'Plugs, Networks, Amenities, PlugScore, etc':
              'Plugs, Networks, Amenities, PlugScore, etc.',
            'Cookies and Privacy Policy':
              "PlugShare.com uses |cookies| to help us personalize your experience and provide analytics to help us understand how our features are used. We've recently updated our |privacy|",
            Accept: 'Accept',
            'New Locations': 'New Locations',
            'New Checkins': 'New Checkins',
            'Nearby Address': 'Nearby {{address}}',
            'New Photos': 'New Photos',
            All: 'All',
            'My Bookmarks': 'My Bookmarks',
            'Successfully Charged': 'Successfully Charged',
            'Could Not Charge': 'Could Not Charge',
            'Please enter a value for this field':
              'Please enter a value for this field.',
            Comment: 'Comment',
            'xx hr': '{{hours}} hr',
            Duration: 'Duration',
            'xx mins': '{{minutes}} mins',
            'Select A Problem': 'Select A Problem',
            'Blocked By Vehicle': 'Blocked By Vehicle',
            'All Stations Broken': 'All Stations Broken',
            'Could Not Activate': 'Could Not Activate',
            'Closed Permanently': 'Closed Permanently',
            'Max Volts': 'Max Volts',
            Plug: 'Plug',
            'Max Amps': 'Max Amps',
            Cancel: 'Cancel',
            Submit: 'Submit',
            'Elevation Data': 'Elevation Data',
            'Forgot Password': 'Forgot Password',
            'This field must be a valid email address':
              'This field must be a valid email address.',
            'Add Location': 'Add Location',
            'Edit Location': 'Edit Location',
            'Location Name': 'Location Name',
            'Full Street Address': 'Full Street Address',
            'Position Pin on Map': 'Position Pin on Map',
            'Move Pin to Address': 'Move Pin to Address',
            'Set Address to Pin': 'Set Address to Pin',
            'Check to see if the location you are adding already exists':
              'Below are some nearby locations you might not have seen due to filter settings. Check to see if the location you are adding already exists.',
            Description: 'Description',
            Stations: 'Stations',
            'Current Stations': 'Current Stations',
            'Marked for Removal': 'Marked for Removal',
            'Add Stations': 'Add Stations',
            'Restricted Access': 'Restricted Access',
            'Add Another Station': 'Add Another Station',
            'Payment Required': 'Payment Required',
            Hours: 'Hours',
            'Phone Number': 'Phone Number',
            Price: 'Price',
            'Report Inaccuracy': 'Report Inaccuracy',
            'Remove Location': 'Remove Location',
            Password: 'Password',
            Update: 'Update',
            'New User': 'New User',
            'Message Owner': 'Message Owner',
            'Register for Free': 'Register for Free!',
            'Profile Picture': 'Profile Picture',
            Change: 'Change',
            'Reset Password': 'Reset Password',
            'Member Since Date': 'Member Since {{date}}',
            'Checkins (Last 30 Days)': 'Checkins (Last 30 Days)',
            'Checkins (Total)': 'Checkins (Total)',
            'Photos Added': 'Photos Added',
            'Locations Added': 'Locations Added',
            optional: 'optional',
            'Emails must match': 'Emails must match.',
            'Confirm Email': 'Confirm Email',
            'Username (visible to other users)':
              'Username (visible to other users)',
            Country: 'Country',
            'Please select your country to localize settings':
              'Please select your country to localize settings.',
            'Postal Code': 'Postal Code',
            'About Me': 'About Me',
            "I have viewed and agree to the site's Privacy Policy and Terms of Use":
              "I have viewed and agree to the site's |privacy| and |terms|",
            'Please check this box to continue':
              'Please check this box to continue.',
            'Receive special offers directly from PlugShare':
              'Receive special offers directly from PlugShare. Your information will not be shared with third parties.',
            'Already have an account': 'Already have an account?',
            'Update Profile': 'Update Profile',
            'Report Location': 'Report Location',
            'Create Account': 'Create Account',
            'Submit a report about any location data inaccuracies or other location requests for the PlugShare team to review':
              'Submit a report about any location data inaccuracies or other location requests for the PlugShare team to review.',
            'Please login or include your email if you would like a response':
              'Please login or include your email if you would like a response.',
            Volts: '{{volts}} Volts',
            Amps: '{{amps}} Amps',
            'Station Details': 'Station Details',
            'Unnamed Station': 'Unnamed Station',
            'Less Details': 'Less Details',
            'Network Support Number': 'Network Support Number',
            Unknown: 'Unknown',
            Make: 'Make',
            Model: 'Model',
            Trim: 'Trim',
            Color: 'Color',
            'Set plug filters to match my vehicle':
              'Set plug filters to match my vehicle.',
            'North America': 'North America',
            Europe: 'Europe',
            'United Kingdom': 'United Kingdom',
            Japan: 'Japan',
            Oceania: 'Oceania',
            World: 'World',
            'Broken Hardware': 'Broken Hardware',
            'Permanently Closed': 'Permanently Closed',
            'Availability Unknown': 'Availability Unknown',
            Available: 'Available',
            Offline: 'Offline',
            'Remove from Trip': 'Remove from Trip',
            "User's Home Charger": "{{name}}'s Home Charger",
            'Unknown Location': 'Unknown Location',
          }),
            e.useStaticFilesLoader({
              prefix: 'app/languages/',
              suffix: '.json',
            }),
            e.useSanitizeValueStrategy('sanitizeParameters'),
            e.fallbackLanguage('en'),
            e.preferredLanguage('en'),
            e.useCookieStorage(),
            e.useLoaderCache(!0);
        },
      ]);
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      'ngInject';
      e.debugEnabled(!0),
        (t.allowHtml = !0),
        (t.timeOut = 3e3),
        (t.positionClass = 'toast-top-right'),
        (t.preventDuplicates = !0),
        (t.progressBar = !0);
    }
    (o.$inject = ['$logProvider', 'toastrConfig']),
      Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.config = o);
  },
  function (e, t) {
    'use strict';
    function o(e, t, o, a) {
      'ngInject';
      e
        .state('home', {
          url: '/',
          views: {
            '': {
              templateUrl: 'app/main/maps.html',
              controller: 'MapsController',
              controllerAs: 'maps',
            },
            'pane@home': { templateUrl: 'app/main/pane.html' },
          },
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              url: 'https://www.plugshare.com/',
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.location', {
          url: 'location/:locationId',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: {
            locationName: null,
            locationDescription: null,
            locationPhoto: null,
            locationTitle: null,
          },
          resolve: {
            data: [
              'ngMeta',
              '$stateParams',
              function (e, t) {
                t.locationName &&
                  (e.setTitle(t.locationTitle),
                  e.setTag('og:title', t.locationTitle)),
                  e.setTag('description', t.locationDescription),
                  e.setTag(
                    'url',
                    'https://www.plugshare.com/location/' + t.locationId
                  ),
                  e.setTag('og:description', t.locationDescription),
                  e.setTag(
                    'og:url',
                    'https://www.plugshare.com/location/' + t.locationId
                  ),
                  e.setTag('og:image', t.locationPhoto);
              },
            ],
          },
          meta: { disableUpdate: !0 },
        })
        .state('home.map', {
          url: 'map/:viewId',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { mapId: null, mapTitle: null, mapDescription: null },
          resolve: {
            data: [
              'ngMeta',
              '$stateParams',
              function (e, t) {
                void 0,
                  void 0,
                  e.setTitle(t.mapTitle),
                  e.setTag('og:title', t.mapTitle),
                  e.setTag('description', t.mapDescription),
                  e.setTag('url', 'https://www.plugshare.com/map/' + t.mapId),
                  e.setTag('og:description', t.mapDescription),
                  e.setTag(
                    'og:url',
                    'https://www.plugshare.com/map/' + t.mapId
                  ),
                  e.setTag(
                    'og:image',
                    'https://assets.plugshare.com/assets/plugshare-og.png'
                  );
              },
            ],
          },
          meta: { disableUpdate: !0 },
        })
        .state('home.trip', {
          url: 'trip',
          controller: 'MapsController',
          controllerAs: 'maps',
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.verify_email', {
          url: 'verify_email',
          controller: 'MapsController',
          controllerAs: 'maps',
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.verify_change_email', {
          url: 'verify_change_email',
          controller: 'MapsController',
          controllerAs: 'maps',
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.change_email', {
          url: 'change_email',
          controller: 'MapsController',
          controllerAs: 'maps',
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.forgot_password', {
          url: 'forgot_password',
          controller: 'MapsController',
          controllerAs: 'maps',
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.oauth', {
          url: 'oauth',
          controller: 'MapsController',
          controllerAs: 'maps',
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.embed', {
          url: 'embed',
          controller: 'MapsController',
          controllerAs: 'maps',
        })
        .state('home.register', {
          url: 'register',
          controller: 'MapsController',
          controllerAs: 'maps',
        })
        .state('home.maps_action', {
          url: 'maps_action',
          controller: 'MapsController',
          controllerAs: 'maps',
        })
        .state('home.en', {
          url: 'en',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'en' },
          data: {
            meta: {
              title:
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              titleSuffix: '',
              description:
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
              'og:title':
                'PlugShare - EV Charging Station Map - Find a place to charge your car!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Find EV charging stations with PlugShare's map of over 500,000 electric vehicle charging stations! Charging tips, reviews and photos from the EV community.",
            },
          },
        })
        .state('home.cs', {
          url: 'cs',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'cs' },
          data: {
            meta: {
              title:
                'PlugShare - Mapa dobíjecích stanic EV - Najděte si místo pro dobití svého auta!',
              titleSuffix: '',
              description:
                'Najděte dobíjecí stanice EV s mapou PlugShare s více než 500 000 dobíjecích stanic pro elektro-vozidla! Tipy pro nabíjení, recenze a fotky z komunity EV.',
              'og:title':
                'PlugShare - Mapa dobíjecích stanic EV - Najděte si místo pro dobití svého auta!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Najděte dobíjecí stanice EV s mapou PlugShare s více než 500 000 dobíjecích stanic pro elektro-vozidla! Tipy pro nabíjení, recenze a fotky z komunity EV.',
            },
          },
        })
        .state('home.da', {
          url: 'da',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'da' },
          data: {
            meta: {
              title:
                'PlugShare - Kort over EV-opladningsstationer - Find et sted at lade din bil op!',
              titleSuffix: '',
              description:
                'Find EV-opladningsstationer med PlugShares kort, der indeholder over 500.000 opladningsstationer til elbiler! Opladningstip, anmeldelser og fotos fra EV-samfundet.',
              'og:title':
                'PlugShare - Kort over EV-opladningsstationer - Find et sted at lade din bil op!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Find EV-opladningsstationer med PlugShares kort, der indeholder over 500.000 opladningsstationer til elbiler! Opladningstip, anmeldelser og fotos fra EV-samfundet.',
            },
          },
        })
        .state('home.de', {
          url: 'de',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'de' },
          data: {
            meta: {
              title:
                'PlugShare - EF-Ladestation-Karte - Finden Sie einen Standort zum Aufladen Ihres Autos!',
              titleSuffix: '',
              description:
                'Finden Sie EF-Ladestationen mit der Karte von PlugShare mit über 500.000 Ladestationen für Elektrofahrzeuge! Ladetipps, Bewertungen und Fotos aus der EV-Community.',
              'og:title':
                'PlugShare - EF-Ladestation-Karte - Finden Sie einen Standort zum Aufladen Ihres Autos!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Finden Sie EF-Ladestationen mit der Karte von PlugShare mit über 500.000 Ladestationen für Elektrofahrzeuge! Ladetipps, Bewertungen und Fotos aus der EV-Community.',
            },
          },
        })
        .state('home.es', {
          url: 'es',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'es' },
          data: {
            meta: {
              title:
                'PlugShare - Mapa de estación de carga de VE - ¡Encuentre dónde cargar su coche!',
              titleSuffix: '',
              description:
                '¡Busque estaciones de carga VE con el mapa de PlugShare de más de 500.000 estaciones de carga de vehículos eléctricos! Consejos de carga, valoraciones y fotos de la comunidad de VE.',
              'og:title':
                'PlugShare - Mapa de estación de carga de VE - ¡Encuentre dónde cargar su coche!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                '¡Busque estaciones de carga VE con el mapa de PlugShare de más de 500.000 estaciones de carga de vehículos eléctricos! Consejos de carga, valoraciones y fotos de la comunidad de VE.',
            },
          },
        })
        .state('home.fr', {
          url: 'fr',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'fr' },
          data: {
            meta: {
              title:
                'PlugShare - Carte de stations de recharge pour véhicule électrique - Trouvez un endroit pour recharger votre voiture !',
              titleSuffix: '',
              description:
                'Trouvez des bornes de recharge pour véhicules électriques avec la carte de PlugShare comportant plus de 500 000 bornes de recharge pour véhicules électriques ! Conseils de recharge, avis et photos de la communauté de véhicules électriques.',
              'og:title':
                'PlugShare - Carte de stations de recharge pour véhicule électrique - Trouvez un endroit pour recharger votre voiture !',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Trouvez des bornes de recharge pour véhicules électriques avec la carte de PlugShare comportant plus de 500 000 bornes de recharge pour véhicules électriques ! Conseils de recharge, avis et photos de la communauté de véhicules électriques.',
            },
          },
        })
        .state('home.hr', {
          url: 'hr',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'hr' },
          data: {
            meta: {
              title:
                'PlugShare - karta punionica električnih vozila - pronađite mjesto za punjenje svojeg automobila!',
              titleSuffix: '',
              description:
                'Pronađite punionice za svoje električno vozilo (EV) na karti aplikacije PlugShare s više od 500 000 punionica! Također uživajte u savjetima za punjenje, osvrtima i fotografijama članova zajednice vlasnika EV-a.',
              'og:title':
                'PlugShare - karta punionica električnih vozila - pronađite mjesto za punjenje svojeg automobila!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Pronađite punionice za svoje električno vozilo (EV) na karti aplikacije PlugShare s više od 500 000 punionica! Također uživajte u savjetima za punjenje, osvrtima i fotografijama članova zajednice vlasnika EV-a.',
            },
          },
        })
        .state('home.it', {
          url: 'it',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'it' },
          data: {
            meta: {
              title:
                'PlugShare - Mappa delle stazioni di ricarica dei veicoli elettrici. Trova un luogo dove caricare la tua auto!',
              titleSuffix: '',
              description:
                'Trova le stazioni caricare la tua auto elettrica (EV) grazie alla mappa di PlugShare di oltre 500.000 stazioni di ricarica! Consigli di ricarica, recensioni e foto dalla comunità delle auto elettriche.',
              'og:title':
                'PlugShare - Mappa delle stazioni di ricarica dei veicoli elettrici. Trova un luogo dove caricare la tua auto!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Trova le stazioni caricare la tua auto elettrica (EV) grazie alla mappa di PlugShare di oltre 500.000 stazioni di ricarica! Consigli di ricarica, recensioni e foto dalla comunità delle auto elettriche.',
            },
          },
        })
        .state('home.hu', {
          url: 'hu',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'hu' },
          data: {
            meta: {
              title:
                'PlugShare - EV töltőállomás térkép - Keresd meg, hol töltheted fel a kocsidat!',
              titleSuffix: '',
              description:
                'Találjon EV töltőállomást a PlugShare több mint 500 000 elektromos jármű-töltő állomást kínáló térképével! Töltési tippek, értékelések és fotók az EV közösségtől.',
              'og:title':
                'PlugShare - EV töltőállomás térkép - Keresd meg, hol töltheted fel a kocsidat!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Találjon EV töltőállomást a PlugShare több mint 500 000 elektromos jármű-töltő állomást kínáló térképével! Töltési tippek, értékelések és fotók az EV közösségtől.',
            },
          },
        })
        .state('home.nl', {
          url: 'nl',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'nl' },
          data: {
            meta: {
              title:
                'PlugShare - Kaart met EV-laadpunten - Vind een plek om je auto op te laden!',
              titleSuffix: '',
              description:
                "Vind oplaadpunten voor elektrische auto's met de kaart van PlugShare die meer dan 500,000 oplaadlocaties bevat! Oplaadtips, recencies en foto's van de EV-gemeenschap.",
              'og:title':
                'PlugShare - Kaart met EV-laadpunten - Vind een plek om je auto op te laden!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "Vind oplaadpunten voor elektrische auto's met de kaart van PlugShare die meer dan 500,000 oplaadlocaties bevat! Oplaadtips, recencies en foto's van de EV-gemeenschap.",
            },
          },
        })
        .state('home.no', {
          url: 'no',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'no' },
          data: {
            meta: {
              title:
                'PlugShare – Ladekart for elbiler – Finn et sted å lade bilen din!',
              titleSuffix: '',
              description:
                'Finn ladestasjoner med  PlugShares kart over 500 000 elektriske ladestasjoner! Ladetips, omtaler og bilder fra EV-samfunnet.',
              'og:title':
                'PlugShare – Ladekart for elbiler – Finn et sted å lade bilen din!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Finn ladestasjoner med  PlugShares kart over 500 000 elektriske ladestasjoner! Ladetips, omtaler og bilder fra EV-samfunnet.',
            },
          },
        })
        .state('home.pl', {
          url: 'pl',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'pl' },
          data: {
            meta: {
              title:
                'PlugShare - Mapa stacji ładowania PE  - Znajdź miejsce, w którym naładujesz swój samochód!',
              titleSuffix: '',
              description:
                'Znajdź stacje ładowania na mapie PlugShare pokazującej ponad 500 stacji ładowania pojazdów elektrycznych (PE) wraz ze wskazówkami nt. ładowania, recenzjami i zdjęciami opublikowanymi przez społeczność użytkowników PE.',
              'og:title':
                'PlugShare - Mapa stacji ładowania PE  - Znajdź miejsce, w którym naładujesz swój samochód!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Znajdź stacje ładowania na mapie PlugShare pokazującej ponad 500 stacji ładowania pojazdów elektrycznych (PE) wraz ze wskazówkami nt. ładowania, recenzjami i zdjęciami opublikowanymi przez społeczność użytkowników PE.',
            },
          },
        })
        .state('home.br', {
          url: 'br',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'br' },
          data: {
            meta: {
              title:
                'PlugShare - Mapa de carregadores de VE - Encontre um lugar para carregar seu carro!',
              titleSuffix: '',
              description:
                'Encontre carregadores de VE com o mapa do PlugShare, com mais de 500.000 carregadores de veículos elétricos! Dicas de carregamento, análises e fotos da comunidade VE.',
              'og:title':
                'PlugShare - Mapa de carregadores de VE - Encontre um lugar para carregar seu carro!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Encontre carregadores de VE com o mapa do PlugShare, com mais de 500.000 carregadores de veículos elétricos! Dicas de carregamento, análises e fotos da comunidade VE.',
            },
          },
        })
        .state('home.pt', {
          url: 'pt',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'pt' },
          data: {
            meta: {
              title:
                'PlugShare - Mapa de estações de carregamento de VE - Encontre um sítio para carregar o seu carro!',
              titleSuffix: '',
              description:
                'Encontre estações de carregamento de VE com o mapa de mais de 500000 estações de carregamento de veículos elétricos da PlugShare! Dicas de carregamento, opiniões e fotografias da comunidade de VE.',
              'og:title':
                'PlugShare - Mapa de estações de carregamento de VE - Encontre um sítio para carregar o seu carro!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Encontre estações de carregamento de VE com o mapa de mais de 500000 estações de carregamento de veículos elétricos da PlugShare! Dicas de carregamento, opiniões e fotografias da comunidade de VE.',
            },
          },
        })
        .state('home.ro', {
          url: 'ro',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'ro' },
          data: {
            meta: {
              title:
                'PlugShare - hartă stații de încărcare VE - Descoperiți unde vă puteți încărca mașina!',
              titleSuffix: '',
              description:
                'Găsiți stații de încărcare VE cu harta PlugShare, care include peste 500.000 de stații de încărcare a vehiculelor electrice! Sfaturi pentru încărcare, recenzii și fotografii de la comunitatea deținătorilor de vehicule electrice.',
              'og:title':
                'PlugShare - hartă stații de încărcare VE - Descoperiți unde vă puteți încărca mașina!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Găsiți stații de încărcare VE cu harta PlugShare, care include peste 500.000 de stații de încărcare a vehiculelor electrice! Sfaturi pentru încărcare, recenzii și fotografii de la comunitatea deținătorilor de vehicule electrice.',
            },
          },
        })
        .state('home.sk', {
          url: 'sk',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'sk' },
          data: {
            meta: {
              title:
                'PlugShare – mapa nabíjacích staníc pre EV – nájdite si miesto na nabitie auta!',
              titleSuffix: '',
              description:
                'Nájdite nabíjacie stanice pre EV pomocou mapy PlugShare s vyše 500 000 nabíjacím stanicami pre elektromobily! Tipy k nabíjaniu, recenzie a fotky z komunity EV.',
              'og:title':
                'PlugShare – mapa nabíjacích staníc pre EV – nájdite si miesto na nabitie auta!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Nájdite nabíjacie stanice pre EV pomocou mapy PlugShare s vyše 500 000 nabíjacím stanicami pre elektromobily! Tipy k nabíjaniu, recenzie a fotky z komunity EV.',
            },
          },
        })
        .state('home.sl', {
          url: 'sl',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'sl' },
          data: {
            meta: {
              title:
                'PlugShare – Zemljevid polnilnic za električna vozila – poiščite, kje boste napolnili svoje vozilo!',
              titleSuffix: '',
              description:
                'Poiščite mesta za polnjenje z zemljevidom Plugshare, ki vključuje več kot 500.000 polnilnih postaj za električna vozila. Nasveti za polnjenje, ocene in fotografije skupnosti EV.',
              'og:title':
                'PlugShare – Zemljevid polnilnic za električna vozila – poiščite, kje boste napolnili svoje vozilo!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Poiščite mesta za polnjenje z zemljevidom Plugshare, ki vključuje več kot 500.000 polnilnih postaj za električna vozila. Nasveti za polnjenje, ocene in fotografije skupnosti EV.',
            },
          },
        })
        .state('home.fi', {
          url: 'fi',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'fi' },
          data: {
            meta: {
              title:
                'PlugShare - EV-latauspisteiden kartta - löydä latauspaikka autollesi!',
              titleSuffix: '',
              description:
                'Löydä sähköajoneuvojen latauspisteet PlugShare kartalla, joka sisältää yli 500 000 sähköajoneuvojen latauspistettä! Sisältää sähköautoyhteisön jäsenten jakamia latausvinkkejä, arvioita ja valokuvia.',
              'og:title':
                'PlugShare - EV-latauspisteiden kartta - löydä latauspaikka autollesi!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Löydä sähköajoneuvojen latauspisteet PlugShare kartalla, joka sisältää yli 500 000 sähköajoneuvojen latauspistettä! Sisältää sähköautoyhteisön jäsenten jakamia latausvinkkejä, arvioita ja valokuvia.',
            },
          },
        })
        .state('home.sv', {
          url: 'sv',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'sv' },
          data: {
            meta: {
              title:
                'PlugShare – karta över laddningsstationer för elfordon – hitta en plats att ladda bilen på!',
              titleSuffix: '',
              description:
                'Hitta laddningsstationer för elbilar med PlugShares map över mer än 500 000 laddningsstationer för eldrivna fordon! Laddningstips, kundomdömen och foton från andra elbilsförare.',
              'og:title':
                'PlugShare – karta över laddningsstationer för elfordon – hitta en plats att ladda bilen på!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Hitta laddningsstationer för elbilar med PlugShares map över mer än 500 000 laddningsstationer för eldrivna fordon! Laddningstips, kundomdömen och foton från andra elbilsförare.',
            },
          },
        })
        .state('home.ru', {
          url: 'ru',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'ru' },
          data: {
            meta: {
              title:
                'PlugShare — карта станций зарядки ЭМ — найдите место, чтобы зарядить ваш электромобиль!',
              titleSuffix: '',
              description:
                'Найдите место для зарядки электромобиля на карте PlugShare — более 500 000 зарядных станций! Советы, отзывы и фото от пользователей.',
              'og:title':
                'PlugShare — карта станций зарядки ЭМ — найдите место, чтобы зарядить ваш электромобиль!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Найдите место для зарядки электромобиля на карте PlugShare — более 500 000 зарядных станций! Советы, отзывы и фото от пользователей.',
            },
          },
        })
        .state('home.uk', {
          url: 'uk',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'uk' },
          data: {
            meta: {
              title:
                'PlugShare — мапа станцій заряджання електромобілів. Завжди знаходьте місце для заряджання вашого авто!',
              titleSuffix: '',
              description:
                'авжди знаходьте місце для заряджання вашого авто у базі даних PlugShare, що налічує понад 500 000 місць заряджання! Переглядайте поради, відгуки, фотографії спільноти.',
              'og:title':
                'PlugShare — мапа станцій заряджання електромобілів. Завжди знаходьте місце для заряджання вашого авто!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'авжди знаходьте місце для заряджання вашого авто у базі даних PlugShare, що налічує понад 500 000 місць заряджання! Переглядайте поради, відгуки, фотографії спільноти.',
            },
          },
        })
        .state('home.cn', {
          url: 'cn',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'cn' },
          data: {
            meta: {
              title:
                'PlugShare - 电动汽车充电桩地图 - 找一个给汽车充电的地方！',
              titleSuffix: '',
              description:
                'PlugShare的地图上有超过500,000个电动汽车充电桩，快来寻找属于您的电动汽车充电桩吧！查看来自电动汽车社区的充电小贴士、评论和照片。',
              'og:title':
                'PlugShare - 电动汽车充电桩地图 - 找一个给汽车充电的地方！',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'PlugShare的地图上有超过500,000个电动汽车充电桩，快来寻找属于您的电动汽车充电桩吧！查看来自电动汽车社区的充电小贴士、评论和照片。',
            },
          },
        })
        .state('home.tw', {
          url: 'tw',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'tw' },
          data: {
            meta: {
              title: 'PlugShare - 電動車充電站地圖 - 找到為車子充電的地方！',
              titleSuffix: '',
              description:
                '使用 PlugShare 地圖找到電動車充電站，提供超過 500,000 座電動車充電站的資訊！充電建議、評論和照片皆來自電動車社群。',
              'og:title':
                'PlugShare - 電動車充電站地圖 - 找到為車子充電的地方！',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                '使用 PlugShare 地圖找到電動車充電站，提供超過 500,000 座電動車充電站的資訊！充電建議、評論和照片皆來自電動車社群。',
            },
          },
        })
        .state('home.ja', {
          url: 'ja',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'ja' },
          data: {
            meta: {
              title:
                'PlugShare - 電気自動車用充電ステーションマップ - 車を充電する場所を見つけましょう！',
              titleSuffix: '',
              description:
                'PlugShareの500,000ヶ所を超える電気自動車充電ステーションの地図でEV充電ステーションを見つけましょう！EVコミュニティからの充電のヒント、レビュー、写真もあります。',
              'og:title':
                'PlugShare - 電気自動車用充電ステーションマップ - 車を充電する場所を見つけましょう！',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'PlugShareの500,000ヶ所を超える電気自動車充電ステーションの地図でEV充電ステーションを見つけましょう！EVコミュニティからの充電のヒント、レビュー、写真もあります。',
            },
          },
        })
        .state('home.ko', {
          url: 'ko',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'ko' },
          data: {
            meta: {
              title:
                'PlugShare - EV 충전소 지도 - 전기차를 충전할 곳을 찾아드립니다!',
              titleSuffix: '',
              description:
                '500,000개 이상의 전기차 충전소가 등록된 PlugShare 지도에서 EV 충전소를 찾에 보세요! EV 커뮤티에서 충전 팁, 리뷰, 사진 등을 보실 수 있습니다.',
              'og:title':
                'PlugShare - EV 충전소 지도 - 전기차를 충전할 곳을 찾아드립니다!',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                '500,000개 이상의 전기차 충전소가 등록된 PlugShare 지도에서 EV 충전소를 찾에 보세요! EV 커뮤티에서 충전 팁, 리뷰, 사진 등을 보실 수 있습니다.',
            },
          },
        })
        .state('home.id', {
          url: 'id',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'id' },
          data: {
            meta: {
              title:
                'PlugShare - Peta Stasiun Pengisian Daya Kendaraan Elektrik (EV) - Temukan tempat untuk mengisi daya',
              titleSuffix: '',
              description:
                'Temukan stasiun pengisian daya kendaraan elektrik (EV) dengan peta PlugShare yang berisi lebih dari 500.000 stasiun pengisian kendaraan listrik! Tips pengisian daya, ulasan, dan foto dari komunitas kendaraan elektrik (EV).',
              'og:title':
                'PlugShare - Peta Stasiun Pengisian Daya Kendaraan Elektrik (EV) - Temukan tempat untuk mengisi daya',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'Temukan stasiun pengisian daya kendaraan elektrik (EV) dengan peta PlugShare yang berisi lebih dari 500.000 stasiun pengisian kendaraan listrik! Tips pengisian daya, ulasan, dan foto dari komunitas kendaraan elektrik (EV).',
            },
          },
        })
        .state('home.th', {
          url: 'th',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'th' },
          data: {
            meta: {
              title: 'PlugShare - แผนที่สถานีชาร์จรถ EV - ค้นหาสถานที่ชาร์จ',
              titleSuffix: '',
              description:
                'ค้นหาสถานีชาร์จรถ EV ด้วยแผนที่สถานีชาร์ถรถยนต์ไฟฟ้ากว่า 500,000 สถานีของ PlugShare! เคล็ดลับการชาร์จ รีวิว และรูปภาพจากชุมชนรถ EV',
              'og:title':
                'PlugShare - แผนที่สถานีชาร์จรถ EV - ค้นหาสถานที่ชาร์จ',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                'ค้นหาสถานีชาร์จรถ EV ด้วยแผนที่สถานีชาร์ถรถยนต์ไฟฟ้ากว่า 500,000 สถานีของ PlugShare! เคล็ดลับการชาร์จ รีวิว และรูปภาพจากชุมชนรถ EV',
            },
          },
        })
        .state('home.tr', {
          url: 'tr',
          controller: 'MapsController',
          controllerAs: 'maps',
          params: { language: 'tr' },
          data: {
            meta: {
              title:
                'PlugShare - Elektrikli Araç Şarj İstasyonu Haritası - Şarj etmek için bir yer bulun',
              titleSuffix: '',
              description:
                "PlugShare'in 500.000'den fazla elektrikli araç şarj istasyonu haritasıyla Elektrikli Araç şarj istasyonlarını bulun! Elektrikli Araç topluluğundan şarj ipuçları, incelemeler ve fotoğraflar.",
              'og:title':
                'PlugShare - Elektrikli Araç Şarj İstasyonu Haritası - Şarj etmek için bir yer bulun',
              'og:url': 'https://www.plugshare.com/',
              'og:image':
                'https://assets.plugshare.com/assets/plugshare-og.png',
              'og:description':
                "PlugShare'in 500.000'den fazla elektrikli araç şarj istasyonu haritasıyla Elektrikli Araç şarj istasyonlarını bulun! Elektrikli Araç topluluğundan şarj ipuçları, incelemeler ve fotoğraflar.",
            },
          },
        }),
        t.otherwise('/'),
        a.html5Mode(!0);
    }
    (o.$inject = [
      '$stateProvider',
      '$urlRouterProvider',
      'ngMetaProvider',
      '$locationProvider',
    ]),
      Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.routerConfig = o);
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      'ngInject';
      e.debug('runBlock end'), t.init();
    }
    (o.$inject = ['$log', 'ngMeta']),
      Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.runBlock = o);
  },
  function (e, t, o) {
    'use strict';
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.MapsController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function s(e, t, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b, k) {
        'ngInject';
        function C() {
          var e =
              '(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)',
            t = new RegExp(e, 'i');
          return t.test(S.userAgent) ? !0 : !1;
        }
        function P() {
          try {
            return 'localStorage' in window && null !== window.localStorage;
          } catch (e) {
            return !1;
          }
        }
        a(this, s);
        var S = this;
        (t._ = _),
          void 0,
          void 0,
          (S.testing =
            -1 != window.location.href.indexOf('localhost') ||
            -1 != window.location.href.indexOf('staging.plugshare.com')),
          void 0,
          (e.rank = !1),
          (e.initializeEvents = {}),
          (S.year = 2022);
        var x = new Date(),
          A = x.getFullYear();
        A > S.year && (S.year = A);
        var T = [
          'AT',
          'BE',
          'BG',
          'HR',
          'CY',
          'CZ',
          'DK',
          'EE',
          'FI',
          'FR',
          'DE',
          'GR',
          'HU',
          'IE',
          'IT',
          'LV',
          'LT',
          'LU',
          'MT',
          'NL',
          'PL',
          'PT',
          'RO',
          'SK',
          'SI',
          'ES',
          'SE',
          'GB',
        ];
        void 0,
          (S.cf_country_code = country_code),
          (S.eu = !1),
          -1 !== T.indexOf(country_code) && (S.eu = !0),
          (S.loadAnalyticsScripts = function () {
            dataLayer.push({ event: 'gtm.loadAnalytics' }), void 0;
          }),
          (S.loadMarketingScripts = function () {
            dataLayer.push({ event: 'gtm.loadMarketing' }), void 0;
          }),
          t.$watch(
            function () {
              return window.ga;
            },
            function (e) {
              'undefined' != typeof window.ga &&
                S.ga('set', 'userId', S.user && S.user.id ? S.user.id : null);
            }
          ),
          (S.cookiePolicy = { essential: !0, analytical: !1, marketing: !1 });
        var L = u.get('v2_cookiePolicy');
        S.eu
          ? ((window['ga-disable-UA-21850385-1'] = !0),
            void 0 != L &&
              (-1 != L.indexOf('a') &&
                ((S.cookiePolicy.analytical = !0),
                (window['ga-disable-UA-21850385-1'] = !1),
                S.loadAnalyticsScripts()),
              -1 != L.indexOf('m') &&
                ((S.cookiePolicy.marketing = !0), S.loadMarketingScripts())))
          : (S.loadAnalyticsScripts(), S.loadMarketingScripts()),
          void 0,
          void 0,
          (S.deferredCookielist = []),
          (S.setCookie = function (e, t, o, a) {
            S.eu
              ? 'essential' == o
                ? S.putCookie(e, t, a)
                : 'analytical' == o && S.cookiePolicy.analytical
                ? S.putCookie(e, t, a)
                : 'marketing' == o && S.cookiePolicy.marketing
                ? S.putCookie(e, t, a)
                : (void 0,
                  void 0,
                  S.deferredCookielist.push({
                    key: e,
                    value: t,
                    type: o,
                    expires: a,
                  }))
              : S.putCookie(e, t, a);
          }),
          (S.putCookie = function (e, t, o) {
            o ? u.put(e, t, { expires: o }) : u.put(e, t);
          }),
          (S.mapSetCookie = function (e) {
            S.setCookie(e[0], e[1], e[2]);
          }),
          (S.ga = function (e, t, o, a, s, n) {
            void 0,
              void 0,
              window.ga
                ? -1 === window.location.href.indexOf('localhost') &&
                  -1 === window.location.href.indexOf('staging.plugshare.com')
                  ? window.ga(e, t, o, a, s, n)
                  : void 0
                : void 0;
          }),
          (S.mapTrackGA = function (e) {
            S.ga(e[0], e[1], e[2], e[3], e[4], e[5]);
          }),
          (S.languages = [
            {
              name: 'English',
              native: 'English',
              code: 'en',
              display_code: 'en',
            },
            {
              name: 'Czech',
              native: 'Čeština',
              code: 'cs',
              display_code: 'cs',
            },
            { name: 'Danish', native: 'Dansk', code: 'da', display_code: 'da' },
            {
              name: 'German',
              native: 'Deutsch',
              code: 'de',
              display_code: 'de',
            },
            {
              name: 'Spanish',
              native: 'Español (Spain)',
              code: 'es',
              display_code: 'es',
            },
            {
              name: 'Spanish',
              native: 'Español (Latin America)',
              code: 'es-419',
              display_code: 'es',
            },
            {
              name: 'French',
              native: 'Français',
              code: 'fr',
              display_code: 'fr',
            },
            {
              name: 'Croatian',
              native: 'Hrvatski',
              code: 'hr',
              display_code: 'hr',
            },
            {
              name: 'Indonesian',
              native: 'Bahasa Indonesia',
              code: 'id',
              display_code: 'id',
            },
            {
              name: 'Italian',
              native: 'Italiano',
              code: 'it',
              display_code: 'it',
            },
            {
              name: 'Hungarian',
              native: 'Magyar',
              code: 'hu',
              display_code: 'hu',
            },
            {
              name: 'Dutch',
              native: 'Nederlands',
              code: 'nl',
              display_code: 'nl',
            },
            {
              name: 'Norwegian',
              native: 'Norsk',
              code: 'no',
              display_code: 'no',
            },
            {
              name: 'Polish',
              native: 'Polski',
              code: 'pl',
              display_code: 'pl',
            },
            {
              name: 'Portuguese',
              native: 'Português (Brasil)',
              code: 'pt-BR',
              display_code: 'br',
            },
            {
              name: 'Portuguese',
              native: 'Português (Portugal)',
              code: 'pt-PT',
              display_code: 'pt',
            },
            {
              name: 'Romanian',
              native: 'Română',
              code: 'ro',
              display_code: 'ro',
            },
            {
              name: 'Slovak',
              native: 'Slovenský',
              code: 'sk',
              display_code: 'sk',
            },
            {
              name: 'Slovenian',
              native: 'Slovenščina',
              code: 'sl',
              display_code: 'sl',
            },
            {
              name: 'Finnish',
              native: 'Suomi',
              code: 'fi',
              display_code: 'fi',
            },
            {
              name: 'Swedish',
              native: 'Svenska',
              code: 'sv',
              display_code: 'sv',
            },
            { name: 'Thai', native: 'ไทย', code: 'th', display_code: 'th' },
            {
              name: 'Turkish',
              native: 'Türkçe',
              code: 'tr',
              display_code: 'tr',
            },
            {
              name: 'Russian',
              native: 'Русский',
              code: 'ru',
              display_code: 'ru',
            },
            {
              name: 'Ukrainian',
              native: 'Українська',
              code: 'uk',
              display_code: 'uk',
            },
            {
              name: 'Chinese (Simplified)',
              native: '中文 (简体)',
              code: 'zh-CN',
              display_code: 'cn',
            },
            {
              name: 'Chinese (Traditional)',
              native: '中文 (繁體)',
              code: 'zh-TW',
              display_code: 'tw',
            },
            {
              name: 'Japanese',
              native: '日本語',
              code: 'ja',
              display_code: 'ja',
            },
            {
              name: 'Korean',
              native: '한국어',
              code: 'ko',
              display_code: 'ko',
            },
          ]),
          (S.language = 0);
        var M = u.get('NG_TRANSLATE_LANG_KEY');
        if (void 0 != M) {
          var I = _.findKey(S.languages, { code: M });
          void 0 != I &&
            ((S.language = I),
            angular.element('html').attr('lang', S.languages[S.language].code),
            void 0,
            (w.language_code = S.languages[S.language].code));
        }
        void 0,
          (S.changeLanguage = function (t, o, a) {
            (e.busy = !0),
              (S.userInitiatedLanguageChange = o),
              (S.language = t),
              (w.language_code = S.languages[S.language].code),
              k.use(S.languages[S.language].code),
              angular
                .element('html')
                .attr('lang', S.languages[S.language].code),
              void 0,
              g.params.locationId ||
                f.search().gclid ||
                a ||
                g.go('home.' + S.languages[S.language].display_code),
              o || (e.busy = !1);
          }),
          e.$on('$translateChangeSuccess', function () {
            S.userInitiatedLanguageChange &&
              void 0 != S.language &&
              S.languages[S.language]['native'] &&
              (S.ga(
                'send',
                'event',
                'language',
                'change_language',
                S.languages[S.language].name
              ),
              (e.busy = !1),
              S.toast('Language set to ' + S.languages[S.language]['native']));
          });
        var E = o(5),
          R = E.detect,
          F = R();
        F &&
          ((S.browser = F.name),
          (S.version = F.version),
          void 0,
          void 0,
          angular.element('body').addClass(S.browser)),
          (S.userAgent = navigator.userAgent),
          void 0,
          navigator.platform.indexOf('Mac') > -1 && (S.os = 'mac'),
          navigator.platform.indexOf('Win') > -1 && (S.os = 'windows'),
          S.os && (void 0, angular.element('body').addClass(S.os)),
          navigator.userAgent.match(/QtCarBrowser/i) &&
            (S.ga(
              'send',
              'event',
              'browser',
              'tesla',
              'Tesla QtCarBrowser detected',
              1
            ),
            (S.tesla = !0)),
          (S.bot = C()),
          (S.ie = !1),
          ('Microsoft Internet Explorer' == navigator.appName ||
            navigator.userAgent.match(/Trident/) ||
            navigator.userAgent.match(/rv:11/) ||
            ('undefined' != typeof $.browser && 1 == $.browser.msie)) &&
            (S.ie = !0),
          void 0,
          (S.iosMobile = !1),
          navigator.userAgent.match(/ipad|ipod|iphone/i) && (S.iosMobile = !0),
          void 0;
        var z = /iPad|iPhone|iPod/.test(navigator.userAgent) && !h.MSStream;
        S.android = /(android)/i.test(navigator.userAgent);
        var V = h.devicePixelRatio || 1,
          O = { width: h.screen.width * V, height: h.screen.height * V };
        void 0,
          z &&
            1125 == O.width &&
            2436 === O.height &&
            (angular.element('body').addClass('iphoneX'), void 0),
          (S.system = null),
          S.os
            ? (S.system = S.os)
            : S.iosMobile
            ? (S.system = 'ios')
            : S.android
            ? (S.system = 'android')
            : (S.system = 'other'),
          void 0,
          (S.getIp = function () {
            void 0,
              $.get('https://ipapi.co/json/', function (e) {
                void 0, (S.ip = e);
              });
          }),
          (S.isModalOpen = function () {
            return (
              S.initialized &&
              angular.element(document.body).hasClass('md-dialog-is-showing')
            );
          }),
          (S.supportsLocalStorage = P()),
          void 0,
          lightbox.option({
            alwaysShowNavOnTouchDevices: !0,
            fadeDuration: 0,
            imageFadeDuration: 0,
            resizeDuration: 0,
          }),
          (S.imageLocations = [
            'https://assets.plugshare.com/assets/markers2.png?10252021',
            'https://assets.plugshare.com/assets/icons.png?09082021',
            'https://assets.plugshare.com/assets/outlets.png?11172020',
            'https://assets.plugshare.com/assets/networks.png?01312022',
            'https://assets.plugshare.com/assets/anonymous.jpg',
          ]),
          b.preloadImages(S.imageLocations),
          (S.mapControl = {}),
          (e.mapStyle = [
            {
              elementType: 'labels.text.fill',
              stylers: [{ color: '#75721a' }],
            },
            {
              featureType: 'landscape',
              stylers: [
                { hue: '#FFBB00' },
                { saturation: 43.400000000000006 },
                { lightness: 37.599999999999994 },
                { gamma: 1 },
              ],
            },
            {
              featureType: 'poi',
              stylers: [
                { hue: '#dabf77' },
                { saturation: -1.0989010989011234 },
                { gamma: 1 },
              ],
            },
            {
              featureType: 'road.arterial',
              stylers: [{ saturation: -100 }, { lightness: 50 }],
            },
            { featureType: 'road.highway', stylers: [{ lightness: 20 }] },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ saturation: -60 }],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{ lightness: -5 }],
            },
            {
              featureType: 'road.local',
              stylers: [
                { hue: '#ff0300' },
                { saturation: -100 },
                { lightness: 50 },
              ],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.stroke',
              stylers: [{ lightness: -5 }],
            },
            {
              featureType: 'water',
              stylers: [
                { hue: '#0078FF' },
                { saturation: -13.200000000000003 },
                { lightness: 2.4000000000000057 },
                { gamma: 1 },
              ],
            },
          ]),
          (S.cookies = u.getAll()),
          void 0,
          void 0,
          (S.menu = {
            menu: !0,
            legend: !1,
            filters: !1,
            networks: !0,
            account: !1,
            bookmarks: !1,
            new: !1,
            settings: !1,
            trip: !1,
            app: !1,
          });
        for (var N in S.cookies)
          if (-1 != N.indexOf('v2_menu_')) {
            var q = N.replace('v2_menu_', '');
            S.menu[q] = m('isTrue')(S.cookies[N]);
          }
        (S.amenities = [
          { id: 1, name: 'Lodging' },
          { id: 2, name: 'Dining' },
          { id: 3, name: 'Restroom' },
          { id: 4, name: 'Parking' },
          { id: 5, name: 'Valet' },
          { id: 6, name: 'Park' },
          { id: 7, name: 'WiFi' },
          { id: 8, name: 'Shopping' },
          { id: 9, name: 'Grocery' },
        ]),
          (S.getAmenityName = function (e) {
            var t = '',
              o = _.findKey(S.amenities, { id: e });
            return void 0 != o && (t = S.amenities[o].name), t;
          }),
          h.innerWidth < 600 && (S.menu.menu = !1);
        var U = !1,
          D = null,
          j = null;
        if (
          ((S.mapsLoaded = function () {
            void 0,
              (U = !0),
              (j = S.mapControl.getPlacesService()),
              D && S.stateLocation(D, !0);
            var e = angular.element('#search-autocomplete input');
            e.attr('autocomplete', 'off'),
              e.attr('autocorrect', 'off'),
              e.attr('autocapitalize', 'off'),
              e.attr('spellcheck', 'false');
          }),
          'home.embed' == g.current.name)
        ) {
          var H = function (e) {
            if ((void 0, void 0, 'https://www.plugshare.com' === e.origin)) {
              var t = JSON.parse(e.data);
              'hoverOnLocation' == t.action &&
                t.locationId &&
                S.mapControl.hoverMarkerOn(t.locationId, 'marker'),
                'hoverOffLocation' == t.action && S.mapControl.hoverMarkerOff(),
                'showLocation' == t.action &&
                  t.locationId &&
                  (S.mapControl.checkMarkerExists()
                    ? S.mapControl.goToMarker(t.locationId)
                    : S.stateLocation(t.locationId, 1));
            }
          };
          void 0,
            (e.embed = !0),
            h.innerWidth < 420 ||
              (h.innerHeight > 600 ? (S.menu.menu = !0) : (S.menu.menu = !1));
          var B =
            window.location != window.parent.location
              ? document.referrer
              : document.location.href;
          void 0,
            window != window.top &&
              -1 != B.indexOf('plugshare.com') &&
              ($('#nav').hide(),
              $('footer').hide(),
              $('#plugshare').addClass('borderless'),
              $('#map').addClass('borderless'),
              (S.borderless = !0)),
            window.addEventListener('message', H, !1);
        }
        (S.exitCustomViewMode = function () {
          (e.customMode = {}),
            (S.customModeReturning = !1),
            S.loadLocale(
              S.filters.country_code && 'XX' != S.filters.country_code
                ? S.filters.country_code
                : S.cf_country_code
            ),
            S.toast("Reverted to User's Normal Filters", 5e3),
            S.mobile || ((S.menu.menu = !0), (S.menu.filters = !0)),
            g.go('home');
        }),
          (S.statePriorLocationId = null),
          t.$on('$stateChangeSuccess', function () {
            if (
              (void 0,
              void 0,
              (S.sameLocationId = !1),
              g.params.locationId &&
                (S.statePriorLocationId == g.params.locationId &&
                  (void 0, (S.sameLocationId = !0)),
                (S.statePriorLocationId = g.params.locationId)),
              S.getUrlParams(),
              'home.embed' == g.current.name)
            );
            else if ('home.maps_action' == g.current.name) {
              void 0, void 0;
              var o =
                'id: ' +
                S.urlParams.id +
                ', component: ' +
                S.urlParams.component +
                ', action: ' +
                S.urlParams.action;
              if (
                (S.urlParams.cid && ((o = o + ', cid: ' + S.urlParams.cid), 1),
                S.ga('send', 'event', 'apple', 'maps_action', o),
                (S.displayAd = !1),
                S.urlParams.id)
              ) {
                var a = S.urlParams.id.indexOf('_');
                -1 !== a && (S.urlParams.id = S.urlParams.id.substring(0, a)),
                  S.goToLocationId(S.urlParams.id),
                  (e.initializeEvents.locationPageview = !0),
                  (e.initializeEvents.locationShownEvent = !0),
                  (e.initializeEvents.locationSkipCancel = !0),
                  (e.initializeEvents.locationSkipLoad = !0),
                  (S.maps_action = {
                    component: S.urlParams.component,
                    action: S.urlParams.action,
                    cid: S.urlParams.cid,
                  });
              } else void 0, g.go('home');
            } else if ('home.register' == g.current.name)
              void 0,
                (S.intent = 'Direct Register URL'),
                (e.initializeEvents.directRegisterSkipCancel = !0),
                S.initialized
                  ? S.directRegister()
                  : (S.directAction = 'directRegister');
            else if (g.params.language) {
              if (!S.userInitiatedLanguageChange) {
                void 0;
                var s = _.findKey(S.languages, {
                  display_code: g.params.language,
                });
                void 0 != s && S.changeLanguage(s, !1, !0);
              }
            } else if (
              'home.verify_email' == g.current.name ||
              'home.verify_change_email' == g.current.name
            ) {
              if (S.urlParams.code) {
                void 0,
                  (y.verifyEmailCode = S.urlParams.code),
                  (S.verifyMode = !0),
                  (S.verifyType = S.urlParams.type),
                  'home.verify_change_email' == g.current.name &&
                    (S.changeEmailTip = !0);
                var n = t.$watch(
                  function () {
                    return y.verifyEmailStatus;
                  },
                  function (e) {
                    null !== e &&
                      (void 0,
                      'SUCCESS' == e
                        ? 'email_change' == S.verifyType
                          ? (void 0,
                            S.initialized
                              ? S.showEmailChangeComplete()
                              : (S.deferEmailChangeComplete = !0))
                          : 'verify' == S.verifyType &&
                            (S.ga(
                              'send',
                              'event',
                              'user',
                              'verify',
                              'User verified email',
                              1
                            ),
                            S.toast(
                              m('translate')('Email successfully verified'),
                              1e4
                            ),
                            (S.unverified = !1),
                            S.initialized
                              ? S.showVerifyCompleteProfile()
                              : (S.deferVerifyCompleteProfile = !0))
                        : S.toast(e, 1e4),
                      n());
                  }
                );
              }
              g.go('home');
            } else
              'home.change_email' == g.current.name
                ? (void 0,
                  (S.emailChangeTip = !0),
                  S.urlParams.email &&
                    (S.changeEmailPrefill = S.urlParams.email),
                  S.initialized
                    ? S['try'](null, 'showChangeEmail', !0, null, 'verify')
                    : (S.deferShowChangeEmail = !0))
                : 'home.forgot_password' == g.current.name
                ? (S.urlParams.code &&
                    S.urlParams.email &&
                    (void 0,
                    void 0,
                    (S.forgotPasswordVerificationCode = S.urlParams.code),
                    (y.forgotEmail = S.urlParams.email)),
                  g.go('home'))
                : 'home.oauth' == g.current.name
                ? (S.urlParams.code
                    ? (void 0,
                      (S.oauthRedirect = !0),
                      S.ga('set', 'referrer', window.location.hostname),
                      y.getToken().then(function (e) {
                        void 0,
                          e.success
                            ? (void 0,
                              y.getSession().then(function (e) {
                                void 0,
                                  void 0,
                                  e
                                    ? (void 0, S.setCognitoUser(e, 'social'))
                                    : S.logout(!0);
                              }))
                            : (void 0, S.logout(!0));
                      }))
                    : S.urlParams.error_description &&
                      -1 !==
                        S.urlParams.error_description.indexOf('account_linked')
                    ? ((S.socialEmail = S.urlParams.error_description.substring(
                        S.urlParams.error_description.indexOf('email=') + 6
                      )),
                      (S.socialEmail = S.socialEmail.replace(' . ', '').trim()),
                      S.initialized
                        ? S.showRegister(null, null, 'linkRegister')
                        : ((S.directAction = 'linkRegister'), void 0))
                    : S.urlParams.error &&
                      ((S.errorRegister = S.urlParams.error),
                      S.initialized
                        ? S.showRegister(null, null, 'errorRegister')
                        : ((S.directAction = 'errorRegister'), void 0)),
                  g.go('home'))
                : 'home.trip' == g.current.name
                ? (void 0,
                  f.search().gclid || g.go('home'),
                  S.initialized
                    ? S.showPlanner()
                    : ((S.directAction = 'showPlanner'),
                      void 0,
                      (e.initializeEvents.tripPlanner = !0)))
                : g.params.viewId
                ? (void 0,
                  S.customModeReturning ||
                    w.getCustomView(g.params.viewId).then(function (t) {
                      if (t) {
                        void 0, void 0, (e.customMode = t);
                        var o = {
                          mapId: g.params.viewId,
                          mapTitle: t.meta_title,
                          mapDescription: t.meta_description,
                        };
                        if (
                          (g.go('home.map', o, { notify: !1 }),
                          t.latitude &&
                            t.longitude &&
                            (S.mapControl.skipGeolocation(2),
                            t.zoom
                              ? (S.ga(
                                  'send',
                                  'event',
                                  'map',
                                  'custom map coords zoom',
                                  t.latitude +
                                    ', ' +
                                    t.longitude +
                                    ' - ' +
                                    t.zoom,
                                  1
                                ),
                                S.mapControl.goTo(
                                  parseFloat(t.latitude),
                                  parseFloat(t.longitude),
                                  parseInt(t.zoom)
                                ))
                              : (S.ga(
                                  'send',
                                  'event',
                                  'map',
                                  'custom map coords only',
                                  t.latitude + ', ' + t.longitude,
                                  1
                                ),
                                S.mapControl.goTo(
                                  parseFloat(t.latitude),
                                  parseFloat(t.longitude)
                                ))),
                          t.filters &&
                            t.filters.area_id &&
                            (S.mapControl.skipGeolocation(2),
                            S.goToArea(t.filters.area_id)),
                          t.language)
                        ) {
                          var a = _.findKey(S.languages, { code: t.language });
                          void 0 != a && S.changeLanguage(a, !1, !0);
                        }
                        S.searchBlur(),
                          S.mobile ? (S.menu.menu = !1) : (S.menu.menu = !0),
                          S.refetch(),
                          p.show({
                            template:
                              '<md-toast ng-click="toast.showMenu()"><span class="md-toast-text ng-binding">' +
                              e.customMode.name +
                              ' Custom View</span><md-button class="md-action md-highlight" ng-click="toast.exit()">EXIT</md-button></md-toast>',
                            controller: function () {
                              return (
                                (S.showMenu = function () {
                                  S.menu.menu = !0;
                                }),
                                (S.exit = function () {
                                  S.exitCustomViewMode();
                                }),
                                S
                              );
                            },
                            controllerAs: 'toast',
                            hideDelay: 0,
                            position: 'top right',
                            parent: v[0].getElementById('toast-container'),
                          });
                      } else g.go('home');
                    }))
                : g.params.locationId && !S.bot
                ? (S.location && g.params.locationId == S.location.id) ||
                  (void 0,
                  (e.initializeEvents.locationPageview = !0),
                  (e.initializeEvents.locationShownEvent = !0),
                  (e.initializeEvents.locationSkipCancel = !0),
                  (e.initializeEvents.locationSkipLoad = !0),
                  (S.refreshing = !0),
                  U
                    ? S.stateLocation(g.params.locationId, !0)
                    : (D = g.params.locationId))
                : g.params.locationId ||
                  (void 0,
                  (S.searchText = null),
                  S.initialized && !f.search().gclid && g.go('home'),
                  S.mapControl.closeInfoWindows(!0));
            U &&
            e.initializeEvents.welcomeSkipCancel &&
            e.initializeEvents.locationSkipCancel
              ? (void 0,
                (e.initializeEvents.welcomeSkipCancel = !1),
                (e.initializeEvents.locationSkipCancel = !1))
              : e.initializeEvents.directRegisterSkipCancel
              ? (e.initializeEvents.directRegisterSkipCancel = !1)
              : g.params.language
              ? void 0
              : e.initializeEvents.changelogSkipCancel
              ? (void 0, (e.initializeEvents.changelogSkipCancel = !1))
              : S.sameLocationId
              ? void 0
              : (void 0, S.cancel('state change dismiss modals'));
          }),
          (S.stateLocation = function (e, t) {
            w.getLocation(e).then(function (e) {
              e
                ? (S.mapControl.goToNewMarker(e),
                  S.mapControl.zoom(16),
                  S.mapControl.skipGeolocation(2),
                  t && S.showPane(e))
                : (S.toast('Location not found'),
                  void 0,
                  g.go('home'),
                  S.mapControl.closeInfoWindows(),
                  (S.maps_action = null)),
                (S.refreshing = !1);
            });
          }),
          (S.resizePaymentHeight = function () {
            if (S.mobile) {
              var e = h.innerHeight;
              void 0,
                angular
                  .element(v[0].querySelector('#payment'))
                  .css('height', e + 'px');
            }
          }),
          angular.element(h).bind('resize', function () {
            void 0,
              S.pwps &&
                S.pwps.state &&
                ('new' == S.pwps.state || 'change' == S.pwps.state) &&
                S.resizePaymentHeight(),
              S.resizeMap(),
              e.tripPlanner &&
                (S.cancel('window resize tripPlanner'),
                (e.mobilePlanner = h.innerWidth < 1200),
                S.mobilePlannerMargin()),
              angular
                .element('.dropscroll')
                .css(
                  'max-height',
                  angular.element(h).innerHeight() - 45 - 25 - 10 + 'px'
                );
          }),
          angular
            .element('.dropscroll')
            .css(
              'max-height',
              angular.element(h).innerHeight() - 45 - 25 - 10 + 'px'
            ),
          (S.resizeMapRetries = 0),
          (S.resizeMap = function () {
            if ((void 0, !e.tripPlanner)) {
              var t = 100;
              S.initialized || (t = 5e3),
                n(function () {
                  var e = 0,
                    t = 0;
                  S.showPolicy &&
                    (void 0,
                    (e = angular.element('#cookie').innerHeight()),
                    0 == e && S.resizeMapRetries <= 25
                      ? n(function () {
                          S.resizeMapRetries++, void 0, S.resizeMap();
                        }, 100)
                      : (S.resizeMapRetries = 0)),
                    (S.unverified ||
                      S.pendingEmail ||
                      (S.user && !S.user.setup_complete)) &&
                      (void 0,
                      (t = angular.element('#banner-warning').innerHeight()),
                      0 == t && S.resizeMapRetries <= 25
                        ? n(function () {
                            S.resizeMapRetries++, void 0, S.resizeMap();
                          }, 100)
                        : (S.resizeMapRetries = 0));
                  var o = S.streetViewMode ? 0 : 40;
                  if (S.mobile) {
                    var a = h.innerHeight,
                      s = a - (e + t + o + 45 + 25);
                    angular.element('#maps #map').css('height', s + 'px');
                  } else h.innerWidth > 420 ? angular.element('#maps #map').css('height', 'calc(100vh - ' + (e + t + 45 + 25) + 'px)') : angular.element('#maps #map').css('height', 'calc(100vh - ' + (e + t + o + 45 + 25) + 'px)');
                }, t);
            }
          }),
          t.$watch(
            function () {
              return S.showPolicy;
            },
            function (e) {
              S.resizeMap();
            }
          ),
          t.$watch(
            function () {
              return S.unverified;
            },
            function (e) {
              S.resizeMap();
            }
          ),
          t.$watch(
            function () {
              return S.pendingEmail;
            },
            function (e) {
              S.resizeMap();
            }
          ),
          t.$watch(
            function () {
              return S.user && S.user.setup_complete;
            },
            function (e) {
              S.resizeMap();
            }
          ),
          angular.element('#main').bind('scroll', function () {
            if (S.mobile && S.location) {
              var e = angular.element('#main').scrollTop() > 300;
              S.paneView != e && ((S.paneView = e), S.update());
            }
          }),
          (S.mobile = !1),
          (function (e) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              e
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4)
              )) &&
              (S.mobile = !0);
          })(navigator.userAgent || navigator.vendor || h.opera),
          void 0,
          angular.element('body').addClass(S.mobile ? 'mobile' : 'not_mobile'),
          (S.mobileMargin = function () {
            if (S.mobile) {
              var e = h.innerWidth,
                t = h.innerHeight;
              void 0,
                void 0,
                angular
                  .element(v[0].querySelector('#plugshare'))
                  .css('height', t - 25 + 'px'),
                420 > e
                  ? (angular
                      .element(v[0].querySelector('#maps #menu'))
                      .css('max-height', t - 85 + 'px'),
                    n(function () {
                      angular
                        .element(v[0].querySelector('body.mobile md-dialog'))
                        .css('height', t + 'px'),
                        S.resizeModalContentFrame &&
                          angular
                            .element(
                              v[0].querySelector(
                                'body.mobile md-dialog .md-dialog-content'
                              )
                            )
                            .css('height', t - 45 + 'px'),
                        S.resizeModalContentFrameFullHeader &&
                          (angular
                            .element(
                              v[0].querySelector(
                                'body.mobile md-dialog .md-dialog-content'
                              )
                            )
                            .css('height', t - 56 + 'px'),
                          angular
                            .element(
                              v[0].querySelector(
                                'body.mobile md-dialog .md-dialog-content iframe'
                              )
                            )
                            .css('height', t - 56 + 'px'));
                    }, 10))
                  : n(function () {
                      angular
                        .element(v[0].querySelector('body.mobile md-dialog'))
                        .css('height', '');
                    }, 10),
                angular.element(v[0].querySelector('#pane')).css('height', '');
            }
            S.resizeMap();
          }),
          S.mobileMargin(),
          (S.mobilePlannerMargin = function () {
            e.mobilePlanner && h.innerWidth < 420
              ? (angular
                  .element(v[0].querySelector('#map'))
                  .css('height', '260px'),
                angular
                  .element(v[0].querySelector('#planner'))
                  .css('height', h.innerHeight - 371 + 'px'),
                angular
                  .element(v[0].querySelector('#pane'))
                  .css('height', h.innerHeight - 371 + 27 + 'px'))
              : (angular.element(v[0].querySelector('#map')).css('height', ''),
                angular
                  .element(v[0].querySelector('#planner'))
                  .css('height', ''),
                angular.element(v[0].querySelector('#pane')).css('height', ''),
                S.mobileMargin());
          }),
          (S.body = angular.element(v[0].querySelector('body'))),
          S.body.on('keypress', 'input', function (e) {
            return S.mobile && 13 == e.keyCode ? (void 0, !1) : void 0;
          }),
          (S.mapCall = function (e, t) {
            S[e](t);
          }),
          (S.toggleMenu = function (e) {
            void 0,
              (S.menu[e] = !S.menu[e]),
              S.setCookie('v2_menu_' + e, S.menu[e], 'essential'),
              (S.searchText = null);
          }),
          (S.getApp = function () {
            S.iosMobile
              ? S.openLink(
                  'https://itunes.apple.com/us/app/plugshare/id421788217?mt=8',
                  'app'
                )
              : S.android
              ? S.openLink(
                  'https://play.google.com/store/apps/details?id=com.xatori.Plugshare&hl=en',
                  'app'
                )
              : S.toggleMenu('app');
          }),
          (S.showPane = function (t) {
            if ((void 0, void 0, (S.assistant = {}), S.searchBlur(), t)) {
              if (((S.location = t), S.location.stations.length > 0))
                for (var o = 0; o < S.location.stations.length; o++)
                  for (
                    var a = 0;
                    a < S.location.stations[o].outlets.length;
                    a++
                  ) {
                    var s = S.location.stations[o].outlets[a].connector;
                    10 > s && (s = '0' + s),
                      (S.location.stations[o].outlets[a].image =
                        'https://assets.plugshare.com/assets/outlets/image' +
                        s +
                        '.png');
                  }
              if (
                ((S.menu.menu = !1),
                S.checkAccess(),
                (S.searchText = S.location.display_name),
                (S.selectedItem = {
                  value: S.location.display_name.toLowerCase(),
                  display: S.location.display_name,
                }),
                void 0,
                S.getLocationUserCheckins(),
                e.embed
                  ? S.update()
                  : S.bot ||
                    S.preventNearbyFlag ||
                    ((S.nearby = []),
                    void 0,
                    w
                      .getNearby(
                        S.location.latitude,
                        S.location.longitude,
                        16100,
                        !0
                      )
                      .then(function (e) {
                        if (e.success && e.data && S.location) {
                          var t = e.data;
                          void 0;
                          for (var o = 0; o < t.length; o++)
                            if (t[o].id != S.location.id) {
                              for (
                                var a = [], s = 0;
                                s < t[o].stations.length;
                                s++
                              )
                                for (
                                  var n = 0;
                                  n < t[o].stations[s].outlets.length;
                                  n++
                                ) {
                                  var i = _.findKey(a, {
                                    connector:
                                      t[o].stations[s].outlets[n].connector,
                                    power: t[o].stations[s].outlets[n].power,
                                  });
                                  void 0 == i &&
                                    (i =
                                      a.push({
                                        connector:
                                          t[o].stations[s].outlets[n].connector,
                                        power:
                                          t[o].stations[s].outlets[n].power,
                                      }) - 1);
                                }
                              if (
                                ((t[o].connectors = a),
                                S.nearby.push(t[o]),
                                5 == S.nearby.length)
                              )
                                break;
                            }
                          S.update();
                        } else void 0;
                      })),
                (S.preventNearbyFlag = !1),
                S.maps_action)
              )
                S.initialized
                  ? S.mapsActionCallback()
                  : (void 0, (S.mapsActionWaitForInitialized = !0));
              else {
                var i = null;
                S.location &&
                  S.location.majority_network_id &&
                  (i = S.location.majority_network_id),
                  S.loadLDVad(i);
              }
              S.locationAction &&
                'checkin' == S.locationAction &&
                S.locationActionParams &&
                n(function () {
                  S.showCheckin(null, S.locationActionParams),
                    (S.locationAction = null),
                    (S.locationActionParams = null);
                }, 1e3);
            } else (S.location = null), S.update();
          }),
          (S.mapsActionCallback = function () {
            S.initialized
              ? (void 0,
                n(function () {
                  ('location' == S.maps_action.component &&
                    'view' == S.maps_action.action) ||
                    ('photo' == S.maps_action.component
                      ? 'create' == S.maps_action.action
                        ? S['try'](null, 'showUpload')
                        : 'view' == S.maps_action.action && S.maps_action.cid
                        ? S.showPhotos(null, parseInt(S.maps_action.cid))
                        : S.showPhotos()
                      : 'review' == S.maps_action.component &&
                        ('create' == S.maps_action.action
                          ? S['try'](null, 'showCheckin')
                          : 'view' == S.maps_action.action && S.maps_action.cid
                          ? S.showReviews(null, parseInt(S.maps_action.cid))
                          : S.showReviews())),
                    n(function () {
                      S.maps_action = null;
                    }, 1e3);
                }, 100))
              : void 0;
          }),
          (S.getLocationUserCheckins = function () {
            S.user &&
              S.location &&
              S.location.id &&
              w.getUserLocationCheckins(S.location.id).then(function (e) {
                e.success &&
                  ((S.location.get_my_reviews = !0),
                  (S.location.total_user_reviews_count =
                    e.data.total_user_reviews_count),
                  (S.location.my_reviews = e.data.reviews),
                  S.update());
              });
          }),
          (S.copy = function (e, t) {
            var o = document.createElement('textarea');
            if (
              ((o.value = e),
              o.setAttribute('readonly', ''),
              (o.style.position = 'absolute'),
              (o.style.left = '-9999px'),
              document.body.appendChild(o),
              S.iosMobile)
            ) {
              void 0;
              var a = o.contentEditable,
                s = o.readOnly;
              (o.contentEditable = !0), (o.readOnly = !1);
              var n = document.createRange();
              n.selectNodeContents(o);
              var i = window.getSelection();
              i.removeAllRanges(),
                i.addRange(n),
                o.setSelectionRange(0, 999999),
                (o.contentEditable = a),
                (o.readOnly = s);
            } else o.select();
            try {
              var l = document.execCommand('copy'),
                r = l ? 'Copied ' + t + ' to clipboard' : 'Unable to copy ' + t;
              S.toast(r);
            } catch (c) {
              S.toast('Unable to copy ' + t);
            }
            document.body.removeChild(o);
          }),
          (S.copyLink = function () {
            if (S.location && S.location.id) {
              var e = document.getElementById('copy-link');
              if (S.iosMobile) {
                void 0;
                var t = e.contentEditable,
                  o = e.readOnly;
                (e.contentEditable = !0), (e.readOnly = !1);
                var a = document.createRange();
                a.selectNodeContents(e);
                var s = window.getSelection();
                s.removeAllRanges(),
                  s.addRange(a),
                  e.setSelectionRange(0, 999999),
                  (e.contentEditable = t),
                  (e.readOnly = o);
              } else e.select();
              try {
                var n = document.execCommand('copy'),
                  i = n
                    ? 'URL copied to clipboard'
                    : 'Unable to copy, use browser URL';
                S.ga(
                  'send',
                  'event',
                  'location',
                  'share_link',
                  'Share location',
                  S.location.id
                ),
                  S.toast(i);
              } catch (l) {
                S.toast('Unable to copy, use browser URL');
              }
            }
          }),
          (S.update = function () {
            t.$$phase || t.$apply();
          }),
          (S.checkAccess = function () {
            S.location &&
              ((S.ownerAccess =
                3 == S.location.access &&
                S.user &&
                S.user.id &&
                S.user.id == S.location.owner.id),
              (S.canEdit =
                !S.location.locked &&
                (3 != S.location.access || S.ownerAccess)),
              (S.canUpload = 3 != S.location.access || S.ownerAccess),
              (S['private'] = 3 == S.location.access && !S.user));
          }),
          (S.refreshLocation = function () {
            S.location &&
              S.location.id &&
              w.getLocation(S.location.id).then(function (e) {
                void 0,
                  (S.location = e),
                  S.location.id && S.showPane(S.location);
              });
          }),
          (S.getMapStatus = function () {
            return w.busy || e.busy;
          }),
          (S.user = null),
          (S.traffic = !1),
          (S.toggleTraffic = function () {
            (S.traffic = !S.traffic),
              S.ga(
                'send',
                'event',
                'map',
                'setting',
                'Toggle traffic',
                S.traffic ? 1 : 0
              ),
              S.mapControl.toggleTraffic();
          }),
          (S.setMap = function (e) {
            S.ga('send', 'event', 'map', 'setting', 'Set map ' + e, 1),
              (S.mapType = e),
              S.mapControl.setMap(e);
          }),
          (S.zoomIn = function () {
            S.mapControl.zoomIn();
          }),
          (S.zoomOut = function () {
            S.mapControl.zoomOut();
          }),
          (S.regions = ['US', 'EU', 'UK', 'JP', 'AU', 'WW']),
          (S.filters = w.filters),
          (S.powerLevels = [0, 50, 70, 120, 200]),
          (S.resetFilters = function () {
            if (
              confirm(
                'This will reset all filters to website defaults, except plugs if a vehicle is selected. Would you like to proceed?'
              )
            ) {
              void 0;
              var e = null !== S.getVehicle().id;
              (S.powerLevel = 0),
                (S.filters.power = 0),
                w.resetFilters(e),
                e ||
                  (S.removeCookiesBy('v2_outlet_'),
                  (S.filtersMatch = !1),
                  S.getActiveOutletsCount()),
                S.removeCookiesBy('v2_network_'),
                S.setCookie('v2_other_networks', !0, 'essential'),
                S.removeCookiesBy('v2_filter_'),
                S.update(),
                S.toast('Filters have been reset to website defaults'),
                S.refetch(),
                S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Reset filters to website defaults',
                  1
                );
            }
          }),
          (S.getCookies = function () {
            return u.getAll();
          }),
          (S.setMapUnits = function () {
            if (!S.metric) {
              var e = i(function () {
                var t = document
                    .getElementById('map')
                    .getElementsByTagName('span'),
                  o = /\d+\s+(m|km)/i;
                for (var a in t)
                  o.test(t[a].innerHTML) && (t[a].click(), i.cancel(e));
              }, 500);
              n(function () {
                i.cancel(e);
              }, 2e4);
            }
          }),
          (S.visibleMarkers = 0),
          (S.showPolicy = !1),
          (S.sessionAcceptedPolicy = !1),
          ((!S.eu &&
            !u.get(
              'v2_plugshare_accepted_privacy_policy_v' + policy_version
            )) ||
            (S.eu && !u.get('v2_cookiePolicy'))) &&
            (S.policyDelay = n(function () {
              S.showPolicy = !0;
            }, 3e3)),
          (S.acceptPolicy = function () {
            S.setCookie(
              'v2_plugshare_accepted_privacy_policy_v' + policy_version,
              1,
              'essential'
            ),
              (S.showPolicy = !1),
              S.user ? w.acceptPrivacyPolicy() : (S.sessionAcceptedPolicy = !0);
          }),
          (S.noCTAprompt = function (e) {
            var t = [
              'home.maps_action',
              'home.verify_email',
              'home.change_email',
              'home.forgot_password',
              'home.oauth',
            ].includes(g.current.name);
            return void 0, t;
          }),
          (S.tryShowWelcome = function (t) {
            void 0,
              S.bot ||
              e.embed ||
              S.urlParams.skip ||
              S.noCTAprompt() ||
              S.maps_action
                ? void 0
                : n(function () {
                    S.user ||
                      S.directAction ||
                      y.verifyEmailCode ||
                      (S.showRegister(),
                      (S.intent = 'First Time Welcome'),
                      t && (S.intent = t),
                      S.resetLoginReminder());
                  }, 3e3);
          }),
          (S.resetLoginReminder = function () {
            S.setCookie(
              'v2_plugshare_visits_last_reminder_date',
              Date.now(),
              'essential'
            ),
              S.setCookie(
                'v2_plugshare_visits_since_last_reminder',
                0,
                'essential'
              );
          }),
          (S.getUrlParams = function () {
            (S.urlParams = f.search()), void 0, void 0;
          }),
          S.getUrlParams(),
          (S.authenticated = function () {
            return S.user && S.user.setup_complete && !S.unverified;
          }),
          (e.busy = !0),
          (e.geolocationDelay = 0),
          (S.directAction = null),
          (S.initialized = !1),
          (S.waitLoadError = n(function () {
            S.initialized || (S.showLoadError = !0);
          }, 1e4)),
          (S.init = function () {
            if ((void 0, e.embed))
              void 0,
                (S.initialized = !0),
                (S.localizationStatus = 'loading'),
                w.getConfig('WW', 'region').then(function (e) {
                  if (e.success && e.data) {
                    if (
                      (void 0, (S.localization = e.data), void 0, S.embedPlugs)
                    ) {
                      S.filters.outlets = [];
                      for (var t = 0; t < S.embedPlugs.length; t++) {
                        var o = _.findKey(S.localization.outlets_all, {
                          outlet_type_id: S.embedPlugs[t],
                        });
                        void 0 != o
                          ? S.filters.outlets.push({
                              connector:
                                S.localization.outlets_all[o].connector,
                              power: S.localization.outlets_all[o].power,
                            })
                          : void 0;
                      }
                      S.embedPlugs.length != S.filters.outlets.length && void 0;
                    }
                    w.getNetworks(!0).then(function (e) {
                      if (e.success && e.data) {
                        if ((void 0, S.embedIncludeNetworks))
                          (S.filters.networks = S.embedIncludeNetworks),
                            (S.filters.other_networks = !1);
                        else if (S.embedExcludeNetworks) {
                          S.filters.networks = [];
                          for (
                            var t = e.data.map(function (e) {
                                return e.id;
                              }),
                              o = 0;
                            o < t.length;
                            o++
                          )
                            (S.embedExcludeNetworks &&
                              -1 != S.embedExcludeNetworks.indexOf(t[o])) ||
                              S.filters.networks.push(t[o]);
                          void 0, void 0, (S.filters.other_networks = !0);
                        } else
                          (S.filters.networks = e.data.map(function (e) {
                            return e.id;
                          })),
                            (S.filters.other_networks = !0);
                        S.refetch();
                      } else void 0;
                    }),
                      (S.localizationStatus = 'success');
                  } else void 0, (S.localizationStatus = 'fail'), S.toast('Connection to Database Failed. Please Refresh Page', 3e4);
                });
            else {
              (S.reminderVisits = 0), (S.visits = u.get('v2_plugshare_visits'));
              var t = u.get('v2_plugshare_last_visit');
              S.visits
                ? S.oauthRedirect ||
                  (S.visits++,
                  (S.reminderVisits = u.get(
                    'v2_plugshare_visits_since_last_reminder'
                  )),
                  S.reminderVisits
                    ? S.reminderVisits++
                    : (S.reminderVisits = 0),
                  S.setCookie(
                    'v2_plugshare_visits_since_last_reminder',
                    S.reminderVisits,
                    'essential'
                  ))
                : (t ||
                    ((S.visits = 1),
                    S.tryShowWelcome(),
                    (e.initializeEvents.welcomeSkipCancel = !0)),
                  (e.geolocationDelay = 5e3),
                  (e.initializeEvents.loadLocale = !0)),
                void 0,
                S.setCookie('v2_plugshare_visits', S.visits, 'analytical');
              var o = '20210405';
              (S.last_visit = u.get('v2_plugshare_last_visit')),
                void 0 != S.last_visit &&
                  S.last_visit < o &&
                  'home.maps_action' != g.current.name &&
                  n(function () {
                    (e.initializeEvents.changelogSkipCancel = !0),
                      S.showChangeLog();
                  }, 3e3),
                S.setCookie('v2_plugshare_last_visit', o, 'essential');
              var a = parseInt(u.get('v2_active_vehicle_id'));
              void 0 != a
                ? (S.activeVehicleId = a)
                : (S.activeVehicleIndex = 0);
              var s = parseInt(u.get('v2_active_charge_session_id'));
              void 0 != s && (S.activeChargeSessionId = s), void 0;
              var i = u.get('v2_plugshare_country');
              void 0 != i
                ? (S.filters.country_code = i)
                : (S.filters.country_code = 'XX');
              var l = u.get('v2_social_auth_intent');
              void 0 != l && (S.intent = l), u.remove('v2_social_auth_intent');
              var r = u.get('v2_trip_metric');
              void 0 != r ? (S.metric = m('isTrue')(r)) : (S.autoSetUnits = !0),
                S.setMapUnits();
              var c = u.get('v2_traffic_layer');
              void 0 != c && (S.traffic = m('isTrue')(c));
              var d = u.get('v2_map_type');
              d ? (S.mapType = d) : (S.mapType = 'roadmap');
              var p = S.urlParams.link;
              p
                ? S.setCookie('v2_outlink', p, 'essential')
                : (p = u.get('v2_outlink')),
                (S.outlink = p ? p : '');
              var h = S.urlParams.role;
              h
                ? S.setCookie('v2_user_role', h.toLowerCase(), 'essential')
                : (h = u.get('v2_user_role')),
                (S.user_role = h ? h : ''),
                (S.checkAppearance = function () {
                  n(function () {
                    S.mapControl.checkUserAppearance();
                  }, 3e3);
                }),
                (S.recordAppearance = function (e) {
                  S.authenticated() &&
                    (e && e[0] && e[1]
                      ? w.appearance(e[0], e[1])
                      : w.appearance());
                }),
                (S.localizationStatus = 'loading'),
                w
                  .getConfig(
                    S.filters.country_code && 'XX' != S.filters.country_code
                      ? S.filters.country_code
                      : S.cf_country_code,
                    'country'
                  )
                  .then(function (t) {
                    if (t.success && t.data) {
                      void 0,
                        (S.localization = t.data),
                        void 0,
                        S.autoSetUnits && S.setUnitsBasedOnCountry(),
                        n(function () {
                          0 == S.getActiveNetworkFilters() &&
                            S.localization.filterable_networks.length > 0 &&
                            (S.toast(S.networkWarning, 5e3),
                            (S.menu.menu = !0),
                            (S.menu.filters = !0),
                            (S.menu.networks = !0)),
                            0 == S.getActiveOutletsCount() &&
                              (S.toast(S.outletWarning, 5e3),
                              (S.menu.menu = !0),
                              (S.menu.filters = !0),
                              (S.menu.outlets = !0));
                        }, 0),
                        void 0,
                        (S.lastReminderDate = u.get(
                          'v2_plugshare_visits_last_reminder_date'
                        )),
                        S.lastReminderDate || S.resetLoginReminder(),
                        void 0;
                      var o = Date.now(),
                        a = o - S.lastReminderDate,
                        s = a / 864e5;
                      void 0,
                        void 0,
                        void 0,
                        void 0,
                        S.localization.login_reminder &&
                          S.localization.login_reminder.minimum_days &&
                          S.localization.login_reminder.minimum_launches &&
                          s >= S.localization.login_reminder.minimum_days &&
                          S.reminderVisits >=
                            S.localization.login_reminder.minimum_launches &&
                          ((e.initializeEvents.welcomeSkipCancel = !0),
                          S.tryShowWelcome('Registration Reminder'),
                          (S.signupReminderCount = u.get(
                            'v2_plugshare_signup_reminder_count'
                          )),
                          S.signupReminderCount
                            ? S.signupReminderCount++
                            : (S.signupReminderCount = 0),
                          S.setCookie(
                            'v2_plugshare_signup_reminder_count',
                            S.signupReminderCount,
                            'essential'
                          )),
                        S.refetch();
                      var i = u.get('v2_plugshare_email'),
                        l = u.get('v2_plugshare_password');
                      i && l
                        ? (S.logout(!0),
                          (S.initialized = !0),
                          S.mapsActionWaitForInitialized &&
                            S.mapsActionCallback(),
                          n(function () {
                            S.showLogin(),
                              (S.auth.tip = m('translate')(
                                'Recently updated security policies'
                              ));
                          }, 3e3))
                        : y.getSession(!0).then(function (e) {
                            void 0,
                              void 0,
                              e
                                ? (void 0, S.setCognitoUser(e, 'init'))
                                : (void 0,
                                  S.logout(!0),
                                  (S.initialized = !0),
                                  S.loadAds(),
                                  S.mapsActionWaitForInitialized &&
                                    S.mapsActionCallback(),
                                  y.verifyEmailCode
                                    ? (S.showLogin(),
                                      S.changeEmailTip
                                        ? (S.auth.tip = m('translate')(
                                            'Login with your old email to confirm email change'
                                          ))
                                        : (S.auth.tip = m('translate')(
                                            'Login to confirm Email to your account'
                                          )),
                                      (S.auth.mode = 'code'),
                                      (S.auth.verificationCode =
                                        y.verifyEmailCode))
                                    : S.tryDirectAction());
                          }),
                        S.filterCookies();
                      var r = u.get('v2_filter_power');
                      (S.powerLevel = parseInt(r ? r : 0)),
                        (S.filters.power = S.powerLevels[S.powerLevel]);
                      var c = u.get('v2_other_networks');
                      void 0 != c &&
                        (S.filters.other_networks = m('isTrue')(c));
                      var d = u.get('v2_filter_cost');
                      void 0 != d && (S.filters.filter_cost = m('isTrue')(d));
                      var p = u.get('v2_filter_restricted');
                      void 0 != p &&
                        (S.filters.filter_restricted = m('isTrue')(p));
                      var g = u.get('v2_filter_residential');
                      void 0 != g &&
                        (S.filters.filter_residential = m('isTrue')(g));
                      var h = u.get('v2_filter_availability');
                      void 0 != h &&
                        (S.filters.filter_availability = m('isTrue')(h));
                      var v = u.get('v2_filter_soon');
                      void 0 != v && (S.filters.filter_soon = m('isTrue')(v));
                      var f = u.get('v2_filter_score');
                      void 0 != f && (S.filters.plugscore = parseInt(f));
                      var w = u.get('v2_social_provider');
                      void 0 != w &&
                        ((S.socialProvider = w), (S.socialProviderLink = w)),
                        (S.animations = !1),
                        (S.localizationStatus = 'success');
                    } else void 0, (S.localizationStatus = 'fail'), S.toast('Connection to Database Failed. Please Refresh Page', 3e4);
                  });
            }
            (e.geocoderCount = 0),
              (e.directionsCount = 0),
              (e.placesCount = 0),
              (e.autocompletesCount = 0),
              (e.busy = !1);
          }),
          S.init(),
          (S.tryDirectAction = function () {
            if (S.directAction)
              'showPlanner' == S.directAction
                ? n(function () {
                    S.showPlanner();
                  }, 1e3)
                : 'directRegister' == S.directAction
                ? n(function () {
                    S.directRegister();
                  }, 1e3)
                : 'resumeRegister' == S.directAction
                ? n(function () {
                    S.showRegister(null, null, 'resumeRegister');
                  }, 1e3)
                : 'errorRegister' == S.directAction
                ? n(function () {
                    S.showRegister(null, null, 'errorRegister');
                  }, 1e3)
                : 'linkRegister' == S.directAction &&
                  n(function () {
                    S.showRegister(null, null, 'linkRegister');
                  }, 1e3);
            else if (S.user && u.get('v2_interaction_callback')) {
              var e = u.get('v2_interaction_callback');
              S['try'](null, e), u.remove('v2_interaction_callback');
            }
          }),
          t.$watch(
            function () {
              return S.initialized;
            },
            function (t) {
              if (t) {
                if (
                  (void 0,
                  n.cancel(S.waitLoadError),
                  (S.showLoadError = !1),
                  S.urlParams && S.urlParams.email_confirmation)
                ) {
                  S.urlParams.email_confirmation;
                  S.toast('Email Confirmed'),
                    delete S.urlParams.email_confirmation;
                }
                if (
                  (S.forgotPasswordVerificationCode &&
                    S.showForgotPassword(
                      null,
                      S.forgotPasswordVerificationCode
                    ),
                  !S.location && S.urlParams)
                ) {
                  S.mapControl.skipGeolocation(2);
                  var o = S.urlParams;
                  o.latitude && o.longitude
                    ? (void 0,
                      o.spanLat && o.spanLng
                        ? (S.ga(
                            'send',
                            'event',
                            'map',
                            'url fitBounds',
                            o.latitude +
                              ', ' +
                              o.longitude +
                              ' - ' +
                              o.spanLat +
                              ', ' +
                              o.spanLng,
                            1
                          ),
                          void 0,
                          S.mapControl.fitBounds(
                            parseFloat(o.latitude),
                            parseFloat(o.longitude),
                            parseFloat(o.spanLat),
                            parseFloat(o.spanLng)
                          ))
                        : o.zoom
                        ? (S.ga(
                            'send',
                            'event',
                            'map',
                            'url coords zoom',
                            o.latitude + ', ' + o.longitude + ' - ' + o.zoom,
                            1
                          ),
                          S.mapControl.goTo(
                            parseFloat(o.latitude),
                            parseFloat(o.longitude),
                            parseInt(o.zoom)
                          ))
                        : (S.ga(
                            'send',
                            'event',
                            'map',
                            'url coords only',
                            o.latitude + ', ' + o.longitude,
                            1
                          ),
                          S.mapControl.goTo(
                            parseFloat(o.latitude),
                            parseFloat(o.longitude)
                          )))
                    : o.address
                    ? (void 0,
                      (S.urlSearch = !0),
                      e.autocompletesCount++,
                      S.autocompleteService.getPlacePredictions(
                        { input: o.address },
                        singleGoogleSuggestion
                      ),
                      S.ga(
                        'send',
                        'event',
                        'map',
                        'url address search',
                        o.address,
                        1
                      ))
                    : o.name &&
                      (void 0,
                      w.search(o.name).then(function (e) {
                        e.length > 0
                          ? (S.ga(
                              'send',
                              'event',
                              'map',
                              'url api search',
                              o.name,
                              1
                            ),
                            S.mapControl.refreshMarker(e[0]))
                          : (S.ga(
                              'send',
                              'event',
                              'map',
                              'url api search',
                              o.name,
                              0
                            ),
                            S.toast('No locations found with this name'));
                      })),
                    o.pwps && (void 0, (S.filters.filter_pwps = !0)),
                    o.area &&
                      (void 0,
                      (S.filters.area_id = o.area),
                      S.mapControl.skipGeolocation(2)),
                    e.embed &&
                      (o.plugs &&
                        (void 0,
                        (S.embedPlugs = o.plugs.split(',').map(Number)),
                        void 0),
                      o.networks
                        ? (void 0,
                          (S.embedIncludeNetworks = o.networks
                            .split(',')
                            .map(Number)),
                          void 0)
                        : o.exclusion_networks &&
                          (void 0,
                          (S.embedExcludeNetworks = o.exclusion_networks
                            .split(',')
                            .map(Number)),
                          void 0)),
                    o.units &&
                      ('metric' == o.units
                        ? (void 0, (S.metric = !0))
                        : 'imperial' == o.units && (void 0, (S.metric = !1)),
                      u.put('v2_trip_metric', S.metric));
                }
                S.bot &&
                  prerender_latitude &&
                  prerender_longitude &&
                  (void 0,
                  S.mapControl.goTo(
                    parseFloat(prerender_latitude),
                    parseFloat(prerender_longitude),
                    16
                  )),
                  S.deferVerifyCompleteProfile && S.showVerifyCompleteProfile(),
                  S.deferEmailChangeComplete && S.showEmailChangeComplete(),
                  S.deferShowChangeEmail &&
                    S['try'](null, 'showChangeEmail', !0, null, 'verify');
              }
            }
          ),
          (S.showVerifyCompleteProfile = function () {
            S.showRegister(null, null, 'completeProfile'),
              n(function () {
                (S.auth.mode = 'complete'),
                  (S.auth.tip =
                    m('translate')('Email successfully verified') +
                    '. ' +
                    m('translate')(
                      'Please finish your profile details to complete registration'
                    ) +
                    '.'),
                  (S.auth.error = '');
              }, 10);
          }),
          (S.showEmailChangeComplete = function () {
            y.changeEmailPlugshareId
              ? S.verifyEmailCompleted(y.changeEmailPlugshareId, !0)
              : void 0;
          }),
          t.$watch(
            function () {
              return S.filters.area_id;
            },
            function (e) {
              e && (void 0, S.goToArea(e));
            }
          ),
          (S.goToArea = function (t) {
            void 0,
              w.getArea(t).then(function (t) {
                t
                  ? (S.mapControl.focusArea(t.data.geometry),
                    e.embed || (S.areaFilter = t.data.name))
                  : S.toast('Invalid area id');
              });
          }),
          (S.removeArea = function () {
            void 0,
              (S.filters.area_id = null),
              (S.areaFilter = null),
              S.mapControl.clearShapes(),
              S.refetch();
          }),
          angular.element(document).ready(function () {
            void 0,
              S.mobile ||
                S.menu.menu ||
                ('home.embed' == g.current.name ||
                e.embed ||
                window.self !== window.top
                  ? void 0
                  : angular
                      .element(v[0].querySelector('#search-autocomplete'))[0]
                      .querySelector('input')
                      .focus());
          }),
          (S.filterCookies = function () {
            void 0, (S.cookies = u.getAll()), void 0, void 0, void 0, void 0;
            for (var e in S.cookies) {
              if (-1 != e.indexOf('v2_outlet_')) {
                var t = e.replace('v2_outlet_', ''),
                  o = 0;
                -1 != t.indexOf('_1') && ((t = t.replace('_1', '')), (o = 1)),
                  (t = parseInt(t));
                var a = _.findKey(S.filters.outlets, {
                  connector: t,
                  power: o,
                });
                'true' == S.cookies[e] && void 0 == a
                  ? S.filters.outlets.push({ connector: t, power: o })
                  : 'false' == S.cookies[e] &&
                    void 0 != a &&
                    S.filters.outlets.splice(a, 1);
              }
              if (-1 != e.indexOf('v2_network_')) {
                var s = parseInt(e.replace('v2_network_', '')),
                  n = S.filters.networks.indexOf(s);
                'true' == S.cookies[e] && -1 == n
                  ? S.filters.networks.push(s)
                  : 'false' == S.cookies[e] &&
                    -1 != n &&
                    S.filters.networks.splice(n, 1);
              }
            }
            void 0, void 0, void 0, void 0;
          }),
          (S.loadLocale = function (t) {
            if (
              (void 0,
              S.setCookie('v2_plugshare_country', t, 'essential'),
              !e.customMode || (e.customMode && !e.customMode.name))
            ) {
              var o = !1;
              S.filtersMatch && (o = !0),
                w.getConfig(t, 'country').then(function (a) {
                  e.initializeEvents.loadLocale
                    ? (void 0,
                      S.ga(
                        'send',
                        'event',
                        'map',
                        'setting',
                        'Set locale ' + t,
                        1,
                        { nonInteraction: 1 }
                      ),
                      (e.initializeEvents.loadLocale = !1))
                    : S.ga(
                        'send',
                        'event',
                        'map',
                        'setting',
                        'Set locale ' + t,
                        1
                      ),
                    void 0,
                    (S.localization = a.data),
                    void 0,
                    void 0,
                    S.filterCookies(),
                    S.setUnitsBasedOnCountry(),
                    S.getActiveOutletsCount(),
                    S.getActiveNetworkFilters(),
                    S.refetch(),
                    S.checkFilters(),
                    o && S.autoFilters(S.activeVehicleIndex);
                });
            }
          }),
          (S.setUnitsBasedOnCountry = function () {
            void 0,
              (S.metric =
                'US' == S.localization.name || 'UK' == S.localization.name
                  ? !1
                  : !0),
              S.setCookie('v2_trip_metric', S.metric, 'essential'),
              (S.autoSetUnits = !1),
              (S.metricSettings = S.metric),
              S.setUnits();
          }),
          (S.countryList = [
            { name: 'United States of America', code: 'US' },
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Åland Islands', code: 'AX' },
            { name: 'Albania', code: 'AL' },
            { name: 'Algeria', code: 'DZ' },
            { name: 'American Samoa', code: 'AS' },
            { name: 'Andorra', code: 'AD' },
            { name: 'Angola', code: 'AO' },
            { name: 'Anguilla', code: 'AI' },
            { name: 'Antarctica', code: 'AQ' },
            { name: 'Antigua and Barbuda', code: 'AG' },
            { name: 'Argentina', code: 'AR' },
            { name: 'Armenia', code: 'AM' },
            { name: 'Aruba', code: 'AW' },
            { name: 'Australia', code: 'AU' },
            { name: 'Austria', code: 'AT' },
            { name: 'Azerbaijan', code: 'AZ' },
            { name: 'Bahamas', code: 'BS' },
            { name: 'Bahrain', code: 'BH' },
            { name: 'Bangladesh', code: 'BD' },
            { name: 'Barbados', code: 'BB' },
            { name: 'Belarus', code: 'BY' },
            { name: 'Belgium', code: 'BE' },
            { name: 'Belize', code: 'BZ' },
            { name: 'Benin', code: 'BJ' },
            { name: 'Bermuda', code: 'BM' },
            { name: 'Bhutan', code: 'BT' },
            { name: 'Bolivia (Plurinational State of)', code: 'BO' },
            { name: 'Bonaire, Sint Eustatius and Saba', code: 'BQ' },
            { name: 'Bosnia and Herzegovina', code: 'BA' },
            { name: 'Botswana', code: 'BW' },
            { name: 'Bouvet Island', code: 'BV' },
            { name: 'Brazil', code: 'BR' },
            { name: 'British Indian Ocean Territory', code: 'IO' },
            { name: 'Brunei Darussalam', code: 'BN' },
            { name: 'Bulgaria', code: 'BG' },
            { name: 'Burkina Faso', code: 'BF' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Cabo Verde', code: 'CV' },
            { name: 'Cambodia', code: 'KH' },
            { name: 'Cameroon', code: 'CM' },
            { name: 'Canada', code: 'CA' },
            { name: 'Cayman Islands', code: 'KY' },
            { name: 'Central African Republic', code: 'CF' },
            { name: 'Chad', code: 'TD' },
            { name: 'Chile', code: 'CL' },
            { name: 'China', code: 'CN' },
            { name: 'Christmas Island', code: 'CX' },
            { name: 'Cocos (Keeling) Islands', code: 'CC' },
            { name: 'Colombia', code: 'CO' },
            { name: 'Comoros', code: 'KM' },
            { name: 'Congo', code: 'CG' },
            { name: 'Congo (Democratic Republic of the)', code: 'CD' },
            { name: 'Cook Islands', code: 'CK' },
            { name: 'Costa Rica', code: 'CR' },
            { name: "Côte d'Ivoire", code: 'CI' },
            { name: 'Croatia', code: 'HR' },
            { name: 'Curaçao', code: 'CW' },
            { name: 'Cyprus', code: 'CY' },
            { name: 'Czechia', code: 'CZ' },
            { name: 'Denmark', code: 'DK' },
            { name: 'Djibouti', code: 'DJ' },
            { name: 'Dominica', code: 'DM' },
            { name: 'Dominican Republic', code: 'DO' },
            { name: 'Ecuador', code: 'EC' },
            { name: 'Egypt', code: 'EG' },
            { name: 'El Salvador', code: 'SV' },
            { name: 'Equatorial Guinea', code: 'GQ' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Estonia', code: 'EE' },
            { name: 'Eswatini', code: 'SZ' },
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Falkland Islands (Malvinas)', code: 'FK' },
            { name: 'Faroe Islands', code: 'FO' },
            { name: 'Fiji', code: 'FJ' },
            { name: 'Finland', code: 'FI' },
            { name: 'France', code: 'FR' },
            { name: 'French Guiana', code: 'GF' },
            { name: 'French Polynesia', code: 'PF' },
            { name: 'French Southern Territories', code: 'TF' },
            { name: 'Gabon', code: 'GA' },
            { name: 'Gambia', code: 'GM' },
            { name: 'Georgia', code: 'GE' },
            { name: 'Germany', code: 'DE' },
            { name: 'Ghana', code: 'GH' },
            { name: 'Gibraltar', code: 'GI' },
            { name: 'Greece', code: 'GR' },
            { name: 'Greenland', code: 'GL' },
            { name: 'Grenada', code: 'GD' },
            { name: 'Guadeloupe', code: 'GP' },
            { name: 'Guam', code: 'GU' },
            { name: 'Guatemala', code: 'GT' },
            { name: 'Guernsey', code: 'GG' },
            { name: 'Guinea', code: 'GN' },
            { name: 'Guinea-Bissau', code: 'GW' },
            { name: 'Guyana', code: 'GY' },
            { name: 'Haiti', code: 'HT' },
            { name: 'Heard Island and McDonald Islands', code: 'HM' },
            { name: 'Holy See', code: 'VA' },
            { name: 'Honduras', code: 'HN' },
            { name: 'Hong Kong', code: 'HK' },
            { name: 'Hungary', code: 'HU' },
            { name: 'Iceland', code: 'IS' },
            { name: 'India', code: 'IN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Ireland', code: 'IE' },
            { name: 'Isle of Man', code: 'IM' },
            { name: 'Israel', code: 'IL' },
            { name: 'Italy', code: 'IT' },
            { name: 'Jamaica', code: 'JM' },
            { name: 'Japan', code: 'JP' },
            { name: 'Jersey', code: 'JE' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kenya', code: 'KE' },
            { name: 'Kiribati', code: 'KI' },
            { name: 'Korea (Republic of)', code: 'KR' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: "Lao People's Democratic Republic", code: 'LA' },
            { name: 'Latvia', code: 'LV' },
            { name: 'Lebanon', code: 'LB' },
            { name: 'Lesotho', code: 'LS' },
            { name: 'Liberia', code: 'LR' },
            { name: 'Libya', code: 'LY' },
            { name: 'Liechtenstein', code: 'LI' },
            { name: 'Lithuania', code: 'LT' },
            { name: 'Luxembourg', code: 'LU' },
            { name: 'Macao', code: 'MO' },
            { name: 'Macedonia (the former Yugoslav Republic of)', code: 'MK' },
            { name: 'Madagascar', code: 'MG' },
            { name: 'Malawi', code: 'MW' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'Maldives', code: 'MV' },
            { name: 'Mali', code: 'ML' },
            { name: 'Malta', code: 'MT' },
            { name: 'Marshall Islands', code: 'MH' },
            { name: 'Martinique', code: 'MQ' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Mauritius', code: 'MU' },
            { name: 'Mayotte', code: 'YT' },
            { name: 'Mexico', code: 'MX' },
            { name: 'Micronesia (Federated States of)', code: 'FM' },
            { name: 'Moldova (Republic of)', code: 'MD' },
            { name: 'Monaco', code: 'MC' },
            { name: 'Mongolia', code: 'MN' },
            { name: 'Montenegro', code: 'ME' },
            { name: 'Montserrat', code: 'MS' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Myanmar', code: 'MM' },
            { name: 'Namibia', code: 'NA' },
            { name: 'Nauru', code: 'NR' },
            { name: 'Nepal', code: 'NP' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'New Caledonia', code: 'NC' },
            { name: 'New Zealand', code: 'NZ' },
            { name: 'Nicaragua', code: 'NI' },
            { name: 'Niger', code: 'NE' },
            { name: 'Nigeria', code: 'NG' },
            { name: 'Niue', code: 'NU' },
            { name: 'Norfolk Island', code: 'NF' },
            { name: 'Northern Mariana Islands', code: 'MP' },
            { name: 'Norway', code: 'NO' },
            { name: 'Oman', code: 'OM' },
            { name: 'Pakistan', code: 'PK' },
            { name: 'Palau', code: 'PW' },
            { name: 'Palestine, State of', code: 'PS' },
            { name: 'Panama', code: 'PA' },
            { name: 'Papua New Guinea', code: 'PG' },
            { name: 'Paraguay', code: 'PY' },
            { name: 'Peru', code: 'PE' },
            { name: 'Philippines', code: 'PH' },
            { name: 'Pitcairn', code: 'PN' },
            { name: 'Poland', code: 'PL' },
            { name: 'Portugal', code: 'PT' },
            { name: 'Puerto Rico', code: 'PR' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Réunion', code: 'RE' },
            { name: 'Romania', code: 'RO' },
            { name: 'Russian Federation', code: 'RU' },
            { name: 'Rwanda', code: 'RW' },
            { name: 'Saint Barthélemy', code: 'BL' },
            {
              name: 'Saint Helena, Ascension and Tristan da Cunha',
              code: 'SH',
            },
            { name: 'Saint Kitts and Nevis', code: 'KN' },
            { name: 'Saint Lucia', code: 'LC' },
            { name: 'Saint Martin (French part)', code: 'MF' },
            { name: 'Saint Pierre and Miquelon', code: 'PM' },
            { name: 'Saint Vincent and the Grenadines', code: 'VC' },
            { name: 'Samoa', code: 'WS' },
            { name: 'San Marino', code: 'SM' },
            { name: 'Sao Tome and Principe', code: 'ST' },
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Senegal', code: 'SN' },
            { name: 'Serbia', code: 'RS' },
            { name: 'Seychelles', code: 'SC' },
            { name: 'Sierra Leone', code: 'SL' },
            { name: 'Singapore', code: 'SG' },
            { name: 'Sint Maarten (Dutch part)', code: 'SX' },
            { name: 'Slovakia', code: 'SK' },
            { name: 'Slovenia', code: 'SI' },
            { name: 'Solomon Islands', code: 'SB' },
            { name: 'Somalia', code: 'SO' },
            { name: 'South Africa', code: 'ZA' },
            {
              name: 'South Georgia and the South Sandwich Islands',
              code: 'GS',
            },
            { name: 'South Sudan', code: 'SS' },
            { name: 'Spain', code: 'ES' },
            { name: 'Sri Lanka', code: 'LK' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Suriname', code: 'SR' },
            { name: 'Svalbard and Jan Mayen', code: 'SJ' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Switzerland', code: 'CH' },
            { name: 'Taiwan', code: 'TW' },
            { name: 'Tajikistan', code: 'TJ' },
            { name: 'Tanzania, United Republic of', code: 'TZ' },
            { name: 'Thailand', code: 'TH' },
            { name: 'Timor-Leste', code: 'TL' },
            { name: 'Togo', code: 'TG' },
            { name: 'Tokelau', code: 'TK' },
            { name: 'Tonga', code: 'TO' },
            { name: 'Trinidad and Tobago', code: 'TT' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Turkey', code: 'TR' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Turks and Caicos Islands', code: 'TC' },
            { name: 'Tuvalu', code: 'TV' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Ukraine', code: 'UA' },
            { name: 'United Arab Emirates', code: 'AE' },
            {
              name: 'United Kingdom of Great Britain and Northern Ireland',
              code: 'GB',
            },
            { name: 'United States Minor Outlying Islands', code: 'UM' },
            { name: 'Uruguay', code: 'UY' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Vanuatu', code: 'VU' },
            { name: 'Venezuela (Bolivarian Republic of)', code: 'VE' },
            { name: 'Viet Nam', code: 'VN' },
            { name: 'Virgin Islands (British)', code: 'VG' },
            { name: 'Virgin Islands (U.S.)', code: 'VI' },
            { name: 'Wallis and Futuna', code: 'WF' },
            { name: 'Western Sahara', code: 'EH' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Zimbabwe', code: 'ZW' },
          ]),
          (S.findById = function (e, t) {
            var o = _.findKey(e, { id: parseInt(t) });
            return void 0 != o ? e[o] : !1;
          }),
          (S.reloadDelay = null),
          (S.refetch = function (t) {
            (t = t ? t : 0),
              n.cancel(S.reloadDelay),
              (S.reloadDelay = n(function () {
                e.tripPlanner &&
                e.showAlongRoute &&
                S.router.waypoints[0].display &&
                S.router.waypoints[S.router.waypoints.length - 1].display
                  ? S.updateRoute()
                  : S.mapControl.reloadMarkers();
              }, t));
          }),
          (S.counter = function () {
            return w.counter;
          }),
          (S.isModalOpen = function () {
            angular.element(document.body).hasClass('md-dialog-is-showing');
          }),
          (S.toast = function (e, t) {
            h.innerHeight > 420 &&
              !S.bot &&
              p.show({
                template:
                  '<md-toast ng-click="toast.hideToast()">' + e + '</md-toast>',
                controller: function () {
                  return (
                    (S.hideToast = function () {
                      p.hide();
                    }),
                    S
                  );
                },
                controllerAs: 'toast',
                hideDelay: t ? t : 3e3,
                position: 'top right',
                parent: v[0].getElementById('toast-container'),
              });
          }),
          (S.displayCount = function (e) {
            void 0, (S.visibleMarkers = e), S.update();
          }),
          t.$watch(
            function () {
              return S.menu.menu;
            },
            function (t) {
              void 0,
                t &&
                  ((S.location = null),
                  (S.search_focused = !1),
                  e.mobilePlanner && S.closePlanner());
            }
          ),
          t.$watch(
            function () {
              return S.location;
            },
            function (t) {
              if (!S.refreshing)
                if ((void 0, t)) {
                  void 0, (S.lastLocationId = t.id);
                  var o = !1,
                    a = t.connectors;
                  if (a.length > 0)
                    for (var s = 0; s < a.length; s++)
                      if (3 == a[s].connector || 13 == a[s].connector) {
                        o = !0;
                        break;
                      }
                  void 0;
                  var n = 'Electric Car (EV) Charging Station at ';
                  (n += t.address ? t.address : t.display_name),
                    t.description && (n += ' - ' + t.description),
                    (n +=
                      " - Information provided by PlugShare, the world's most popular map for finding electric car (EV) charging stations.");
                  var i = {
                    locationId: t.id,
                    locationName: t.display_name,
                    locationDescription: n,
                    locationPhoto:
                      t.photos && t.photos.length > 0
                        ? m('dev')(t.photos[0].url)
                        : 'https://assets.plugshare.com/assets/plugshare-og.png',
                    locationTitle: t.title_description
                      ? t.title_description
                      : t.display_name + ' | PlugShare',
                  };
                  g.go('home.location', i),
                    e.initializeEvents.locationPageview
                      ? (void 0, (e.initializeEvents.locationPageview = !1))
                      : S.ga('send', 'pageview', 'location/' + t.id),
                    (S.menu.menu = !1),
                    S.setCookie('v2_menu_menu', !1, 'essential'),
                    (S.copyurl =
                      'https://www.plugshare.com/location/' + S.location.id),
                    angular.element('#pane').scrollTop(0);
                } else
                  S.localization &&
                    (e.customMode && e.customMode.slug
                      ? (void 0,
                        S.searchBlur(),
                        S.mobile || (S.menu.menu = !0),
                        g.go('home.map', { viewId: e.customMode.slug }),
                        (S.customModeReturning = !0))
                      : (void 0,
                        g.go('home'),
                        S.mapControl.closeInfoWindows()));
            }
          ),
          (S.findOutletFilter = function (e, t) {
            return _.findKey(w.filters.outlets, { connector: e, power: t });
          }),
          (S.outletWarning =
            'Warning: Zero locations shown due to all plugs toggled off'),
          (S.networkWarning =
            'Warning: Zero locations shown due to all networks toggled off'),
          (S.toggleOutlet = function (e, t) {
            void 0;
            var o = _.findKey(S.filters.outlets, { connector: e, power: t }),
              a = t ? e + '_' + t : e;
            void 0 != o
              ? (S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled outlet ' + e,
                  0
                ),
                S.filters.outlets.splice(o, 1),
                S.setCookie('v2_outlet_' + a, !1, 'essential'))
              : (S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled outlet ' + e,
                  1
                ),
                S.filters.outlets.push({ connector: e, power: t }),
                S.setCookie('v2_outlet_' + a, !0, 'essential')),
              0 == S.getActiveOutletsCount() && S.toast(S.outletWarning, 5e3),
              S.saveOutlets(),
              S.checkAllOutletsShowing(),
              S.checkFilters(),
              S.refetch(750);
          }),
          (S.saveOutlets = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3;
            n.cancel(S.saveOutletsRequest),
              S.user &&
                S.user.vehicles &&
                S.user.vehicles.length &&
                (S.saveOutletsRequest = n(function () {
                  w.updateVehicleFilters(
                    { enabled_outlet_filters: S.filters.outlets },
                    S.activeVehicleIndex
                  ).then(function (e) {
                    e.success && e.data ? (void 0, void 0) : e.error && void 0;
                  });
                }, e));
          }),
          (S.replaceLocalOutlets = function () {
            void 0;
            var e = S.getVehicle();
            if (
              e &&
              e.enabled_outlet_filters &&
              e.enabled_outlet_filters.length
            ) {
              for (
                var t = e.enabled_outlet_filters, o = 0;
                o < S.filters.outlets.length;
                o++
              ) {
                var a = S.filters.outlets[o].power
                  ? S.filters.outlets[o].connector +
                    '_' +
                    S.filters.outlets[o].power
                  : S.filters.outlets[o].connector;
                S.setCookie('v2_outlet_' + a, !1, 'essential');
              }
              for (var o = 0; o < t.length; o++) {
                var a = t[o].power
                  ? t[o].connector + '_' + t[o].power
                  : t[o].connector;
                S.setCookie('v2_outlet_' + a, !0, 'essential');
              }
              (S.filters.outlets = t), S.refetch();
            }
          }),
          (S.showIncompatible = !1),
          (S.toggleIncompatibleOutlets = function () {
            S.ga(
              'send',
              'event',
              'map',
              'filters',
              'Show incompatible outlets',
              1
            ),
              (S.showIncompatible = !S.showIncompatible);
          }),
          (S.allOutletsShowing = !1),
          (S.checkAllOutletsShowing = function () {
            var e = S.getVehicle();
            if (e && e.id) {
              var t = S.localization.outlets_filter.length;
              void 0;
              for (var o = 0; o < S.localization.outlets_filter.length; o++) {
                var a = S.localization.outlets_filter[o];
                (void 0 !=
                  _.findKey(e.compatible_outlets, {
                    connector: a.connector,
                    power: a.power,
                  }) ||
                  void 0 !=
                    _.findKey(S.filters.outlets, {
                      connector: a.connector,
                      power: a.power,
                    })) &&
                  t--;
              }
              0 === t ? (S.allOutletsShowing = !0) : (S.allOutletsShowing = !1),
                void 0;
            }
          }),
          (S.dcfc = function () {
            return (
              _.findKey(S.filters.outlets, { connector: 3, power: 0 }) ||
              _.findKey(S.filters.outlets, { connector: 6, power: 1 }) ||
              _.findKey(S.filters.outlets, { connector: 13, power: 0 })
            );
          }),
          (S.toggleOutlets = function () {
            var e = null;
            if (
              S.getActiveOutletsCount() / S.localization.outlets_filter.length >
              0.5
            ) {
              void 0,
                S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled all outlets off',
                  0
                );
              for (var t = 0; t < S.filters.outlets.length; t++)
                void 0,
                  (e = S.filters.outlets[t].power
                    ? S.filters.outlets[t].connector +
                      '_' +
                      S.filters.outlets[t].power
                    : S.filters.outlets[t].connector),
                  S.setCookie('v2_outlet_' + e, !1, 'essential');
              (S.filters.outlets = []), S.toast(S.outletWarning, 5e3);
            } else {
              void 0,
                S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled all outlets on',
                  1
                ),
                (S.filters.outlets = []);
              for (var o = 0; o < S.localization.outlets_filter.length; o++)
                void 0,
                  S.filters.outlets.push({
                    connector: S.localization.outlets_filter[o].connector,
                    power: S.localization.outlets_filter[o].power,
                  }),
                  (e = S.localization.outlets_filter[o].power
                    ? S.localization.outlets_filter[o].connector +
                      '_' +
                      S.localization.outlets_filter[o].power
                    : S.localization.outlets_filter[o].connector),
                  S.setCookie('v2_outlet_' + e, !0, 'essential');
            }
            (S.filtersMatch = !1),
              S.saveOutlets(),
              S.getActiveOutletsCount(),
              S.checkAllOutletsShowing(),
              S.refetch(750);
          }),
          (S.toggleNetwork = function (e) {
            void 0;
            var t = S.filters.networks.indexOf(e);
            -1 == t
              ? (S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled network ' + e,
                  1
                ),
                S.filters.networks.push(e),
                S.setCookie('v2_network_' + e, !0, 'essential'))
              : (S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled network ' + e,
                  0
                ),
                S.filters.networks.splice(t, 1),
                S.setCookie('v2_network_' + e, !1, 'essential')),
              S.getActiveNetworkFilters(),
              0 == S.activeNetworkFilters &&
                S.localization.filterable_networks.length > 0 &&
                S.toast(S.networkWarning, 5e3),
              S.refetch();
          }),
          (S.toggleNetworks = function () {
            if (
              S.getActiveNetworkFilters() /
                S.localization.filterable_networks.length >
              0.5
            ) {
              void 0,
                S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled all networks off',
                  0
                );
              for (var e = 0; e < S.filters.networks.length; e++)
                void 0,
                  S.setCookie(
                    'v2_network_' + S.filters.networks[e],
                    !1,
                    'essential'
                  );
              (S.filters.networks = []),
                (S.filters.other_networks = !1),
                S.setCookie('v2_other_networks', !1, 'essential'),
                S.toast(S.networkWarning, 5e3);
            } else {
              void 0,
                S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled all networks on',
                  1
                ),
                (S.filters.networks = []);
              for (
                var t = 0;
                t < S.localization.filterable_networks.length;
                t++
              )
                void 0,
                  S.filters.networks.push(
                    S.localization.filterable_networks[t].id
                  ),
                  S.setCookie(
                    'v2_network_' + S.localization.filterable_networks[t].id,
                    !0,
                    'essential'
                  );
              (S.filters.other_networks = !0),
                S.setCookie('v2_other_networks', !0, 'essential');
            }
            S.refetch();
          }),
          (S.toggleAmenities = function (e) {
            void 0, (S.temporaryFiltersTip = !0);
            var t = S.filters.amenities.indexOf(e);
            -1 == t
              ? (S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled amenities ' + e,
                  1
                ),
                S.filters.amenities.push(e))
              : (S.ga(
                  'send',
                  'event',
                  'map',
                  'filters',
                  'Toggled amenities ' + e,
                  0
                ),
                S.filters.amenities.splice(t, 1)),
              S.refetch(750);
          }),
          (S.getAmenityName = function (e) {
            if (S.localization && S.localization.amenities)
              for (var t = 0; t < S.localization.amenities.length; t++)
                if (S.localization.amenities[t].type == e)
                  return S.localization.amenities[t].name;
            return '';
          }),
          (S.activeNetworkFilters = 0),
          (S.getActiveNetworkFilters = function () {
            if (((S.activeNetworkFilters = 0), S.localization)) {
              for (var e = 0; e < S.filters.networks.length; e++) {
                var t = _.findKey(S.localization.filterable_networks, {
                  id: S.filters.networks[e],
                });
                void 0 != t && S.activeNetworkFilters++;
              }
              S.activeNetworkFilters += S.filters.other_networks ? 1 : 0;
            }
            return S.activeNetworkFilters;
          }),
          t.$watch(
            function () {
              return S.filters.other_networks;
            },
            function (e) {
              void 0, S.getActiveNetworkFilters();
            }
          ),
          (S.clearAmenities = function () {
            (S.filters.amenities = []), S.refetch();
          }),
          (S.activeOutletsCount = 0),
          (S.getActiveOutletsCount = function () {
            if (((S.activeOutletsCount = 0), S.localization))
              for (var e = 0; e < S.localization.outlets_filter.length; e++) {
                var t = S.localization.outlets_filter[e];
                void 0 != S.findOutletFilter(t.connector, t.power) &&
                  S.activeOutletsCount++;
              }
            return S.activeOutletsCount;
          }),
          (S.getActiveIncludesCount = function () {
            var e = 0;
            return (
              S.filters.filter_cost && e++,
              S.filters.filter_restricted && e++,
              S.filters.filter_residential && e++,
              S.filters.filter_availability && e++,
              S.filters.filter_soon && e++,
              e
            );
          }),
          (S.toggleSingle = function (e) {
            void 0,
              (S.filters[e] = !S.filters[e]),
              void 0,
              S.ga(
                'send',
                'event',
                'map',
                'filters',
                'Toggled ' + e,
                S.filters[e] ? 1 : 0
              ),
              S.setCookie('v2_' + e, S.filters[e], 'essential'),
              void 0,
              S.refetch(750),
              'other_networks' == e &&
                (S.getActiveNetworkFilters(),
                0 == S.activeNetworkFilters &&
                  S.localization.filterable_networks.length > 0 &&
                  S.toast(S.networkWarning, 5e3)),
              'filter_pwps' == e && (S.temporaryFiltersTip = !0);
          }),
          (S.updatePlugscore = function () {
            S.ga(
              'send',
              'event',
              'map',
              'filters',
              'PlugScore Filter',
              S.filters.plugscore
            ),
              S.setCookie('v2_filter_score', S.filters.plugscore, 'essential'),
              S.refetch(750);
          }),
          (S.updatePower = function () {
            (S.filters.power = S.powerLevels[S.powerLevel]),
              S.ga(
                'send',
                'event',
                'map',
                'filters',
                'Power Filter',
                S.filters.power
              ),
              S.setCookie('v2_filter_power', S.powerLevel, 'essential'),
              S.refetch(750);
          }),
          (S.openFilters = function () {
            (S.menu.menu = !0), (S.menu.filters = !0), (S.menu.networks = !0);
          }),
          (S.autoFilters = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            if (S.user && S.user.vehicles && S.user.vehicles.length > e) {
              S.ga('send', 'event', 'map', 'filters', 'Auto filters', 1),
                void 0;
              var t = S.user.vehicles[e].default_outlets;
              if (t.length) {
                S.removeCookiesBy('v2_outlet_'), (S.filters.outlets = []);
                for (var o in t) {
                  var a = t[o].connector,
                    s = t[o].power;
                  void 0, S.filters.outlets.push({ connector: a, power: s });
                  var n = s ? a + '_' + s : a;
                  S.setCookie('v2_outlet_' + n, !0, 'essential');
                }
                for (var i in S.localization.outlets_filter) {
                  var l = S.localization.outlets_filter[i].connector,
                    r = S.localization.outlets_filter[i].power,
                    c = r ? l + '_' + r : l,
                    d = { connector: l, power: r };
                  void 0 == _.findKey(t, d) &&
                    S.setCookie('v2_outlet_' + c, !1, 'essential');
                }
                (S.user.vehicles[e].enabled_outlet_filters = S.filters.outlets),
                  h.innerWidth < 420 || (S.menu.menu = !0),
                  S.getActiveOutletsCount(),
                  (S.menu.filters = !0),
                  (S.filtersMatch = !0),
                  S.refetch(),
                  S.toast(
                    'Plugs filters set to ' + S.getVehicle().display_name
                  ),
                  S.saveOutlets(),
                  void 0;
              }
            }
          }),
          (S.filtersMatch = !0),
          (S.checkFilters = function () {
            if (S.user && S.user.vehicles && S.user.vehicles.length) {
              var e = S.user.vehicles[S.activeVehicleIndex];
              if (S.localization && S.user && e && e.id) {
                void 0;
                for (var t = 0; t < S.localization.outlets_filter.length; t++) {
                  var o = S.localization.outlets_filter[t];
                  if (
                    void 0 !=
                      _.findKey(e.default_outlets, {
                        connector: o.connector,
                        power: o.power,
                      }) &&
                    void 0 !=
                      _.findKey(S.filters.outlets, {
                        connector: o.connector,
                        power: o.power,
                      })
                  )
                    S.filtersMatch = !0;
                  else {
                    if (
                      void 0 !=
                        _.findKey(e.default_outlets, {
                          connector: o.connector,
                          power: o.power,
                        }) ||
                      void 0 !=
                        _.findKey(S.filters.outlets, {
                          connector: o.connector,
                          power: o.power,
                        })
                    ) {
                      S.filtersMatch = !1;
                      break;
                    }
                    S.filtersMatch = !0;
                  }
                }
              } else S.filtersMatch = !0;
            }
          }),
          (S.markErrors = function (e) {
            return e.$valid ? !1 : (S.touchAll(e), !0);
          }),
          (S.touchAll = function (e) {
            angular.forEach(e.$error, function (e) {
              void 0,
                angular.forEach(e, function (e) {
                  e.$setTouched();
                });
            });
          }),
          (S['try'] = function (t, o, a, s, n, i) {
            void 0,
              S.user
                ? S.unverified
                  ? S.showRegister(t, o, 'verify')
                  : S.user.setup_complete
                  ? S[o](t, s, n, i)
                  : S.showRegister(t, o, 'completeProfileTry')
                : S.initialized
                ? (void 0,
                  e.embed
                    ? S.openLink('https://www.plugshare.com/', 'embed')
                    : ((S.intent = o),
                      a ? S.showLogin(t, o) : S.showRegister(t, o)))
                : (void 0, void 0);
          }),
          (S.callbackAction = function (e, t) {
            if (S.user)
              if (S.unverified)
                n(function () {
                  S.showRegister(e, t, 'verify');
                }, 10);
              else if (S.user.setup_complete) {
                if (t) {
                  var o = 0;
                  'addBookmark' == t && (o = 1e3),
                    n(function () {
                      S[t](e);
                    }, o);
                }
              } else
                n(function () {
                  S.showRegister(e, t, 'completeProfileTry');
                }, 10);
          }),
          e.$on('$locationChangeStart', function (e, t, o) {
            void 0,
              void 0,
              S.directUrl
                ? (S.directUrl = !1)
                : '/' == f.path() &&
                  angular.element(document).find('md-dialog').length > 0 &&
                  (void 0, e.preventDefault(), S.cancel('locationChangeStart'));
            var a = f.search();
            a.area && (S.filters.area_id = a.area);
          }),
          (S.hide = function () {
            d.hide();
          }),
          (S.cancel = function (e) {
            e && void 0, S.maps_action ? void 0 : (void 0, d.cancel());
          }),
          (S.removeCookiesBy = function (e) {
            var t = u.getAll();
            for (var o in t) -1 != o.indexOf(e) && u.remove(o);
          }),
          (S.resetAnimation = function (e) {
            var t = document.getElementById(e);
            t &&
              ((t.style.animation = 'none'),
              t.offsetHeight,
              (t.style.animation = null));
          }),
          (S.getProfilePicture = function (e) {
            return S.user &&
              S.user.photos &&
              S.user.photos.length > 0 &&
              S.user.photos[0]
              ? '2x' == e
                ? S.user.photos[0].thumbnail2x
                : 'url' == e
                ? S.user.photos[0].url
                : S.user.photos[0].thumbnail
              : 'https://assets.plugshare.com/assets/anonymous.jpg';
          }),
          (S.goToLocation = function (e) {
            S.cancel('goToLocation ' + (e && e.id ? e.id : '')),
              S.mapControl.goToNewMarker(e);
          }),
          (S.goToLocationId = function (e) {
            void 0,
              S.ga(
                'send',
                'event',
                'location',
                'go_to_location',
                'Go To Location',
                e
              ),
              S.location && S.location.id == e
                ? S.cancel('goToLocationId ' + e)
                : f.url('/location/' + e);
          }),
          (S.showLocationAction = function (e, t, o, a) {
            void 0,
              S.location && S.location.id == e
                ? 'checkin' == t &&
                  n(function () {
                    S.showCheckin(null, o, a);
                  }, 1e3)
                : (S.goToLocationId(e),
                  (S.locationAction = t),
                  (S.locationActionParams = o));
          }),
          t.$watch(
            function () {
              return S.user;
            },
            function (e, t) {
              void 0,
                S.refetchProfile(),
                S.ga('set', 'userId', S.user && S.user.id ? S.user.id : null);
            }
          ),
          (S.refetchProfile = function () {
            if (S.user) {
              void 0,
                (S.profile.display_name = S.user.display_name),
                (S.profile.email = S.user.email),
                (S.profile.phone = S.user.phone),
                (S.profile.country_code = S.user.country_code),
                (S.profile.zip_code = S.user.zip_code),
                (S.profile.charger_type = S.user.charger_type),
                (S.profile.about = S.user.about),
                (S.profile.allow_promo_email = S.user.allow_promo_email);
              var e = S.getVehicle();
              e &&
                ((S.user.vehicle_name = e.display_name),
                (S.user.vehicle_photo = e.photo_url),
                (S.profile.vehicle_make = e.make),
                (S.profile.vehicle_type = e.model),
                (S.profile.vehicle_subtype = e.trim),
                (S.profile.vehicle_color = e.color));
            }
          }),
          (S.centerMap = function () {
            S.ga('send', 'event', 'map', 'location', 'Center map', 1),
              S.mapControl.centerMap();
          }),
          (S.openLink = function (e, t) {
            S.ga('send', 'event', t, 'outbound', e), h.open(e);
          }),
          (S.trackLink = function (e, t) {
            S.ga('send', 'event', t, 'outbound', e);
          }),
          (S.logDirectionsRequest = function (e, t) {
            if (S.location && S.location.id) {
              var o = 'GOOGLE';
              w.logDirectionsRequest(o, S.location.id);
            }
            S.trackLink(e, t);
          }),
          (S.getOutletStatusNiceName = function (e) {
            if (S.localization && S.localization.outlet_status_values) {
              var t = _.findKey(S.localization.outlet_status_values, { id: e });
              if (void 0 != t)
                return S.localization.outlet_status_values[t].description;
            }
            return e;
          }),
          (S.getOutletStatusGroup = function (e) {
            return e && 'UNKNOWN' != e
              ? 'AVAILABLE' == e
                ? 1
                : 'CHARGING' == e || 'CONNECTED' == e
                ? 2
                : 3
              : 0;
          }),
          (S.clearMap = function () {
            S.mapControl.clearMap();
          }),
          (S.checkExpired = function (e) {
            if (e) {
              var t = new Date(),
                o = new Date(e);
              return t > o;
            }
            return !1;
          }),
          (S.streetViewStatus = function (e) {
            (S.streetViewMode = e), S.resizeMap(), S.update();
          }),
          (S.toggleRank = function () {
            (e.rank = !e.rank), S.refetch(), void 0;
          });
      },
    ];
  },
  function (e, t, o) {
    (function (t) {
      function a() {
        var e = n();
        return e
          ? e
          : 'undefined' != typeof navigator
          ? i(navigator.userAgent)
          : null;
      }
      function s(e) {
        var t = r(),
          o = t.filter(function (t) {
            return t.rule && t.rule.test(e);
          })[0];
        return o ? o.name : null;
      }
      function n() {
        var e = 'undefined' == typeof navigator && 'undefined' != typeof t;
        return e
          ? {
              name: 'node',
              version: t.version.slice(1),
              os: o(7).type().toLowerCase(),
            }
          : null;
      }
      function i(e) {
        var t = l();
        if (!e) return null;
        var o =
          t
            .map(function (t) {
              var o = t.rule.exec(e),
                a = o && o[1].split(/[._]/).slice(0, 3);
              return (
                a &&
                  a.length < 3 &&
                  (a = a.concat(1 == a.length ? [0, 0] : [0])),
                o && { name: t.name, version: a.join('.') }
              );
            })
            .filter(Boolean)[0] || null;
        return (
          o && (o.os = s(e)),
          /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(
            e
          ) && ((o = o || {}), (o.bot = !0)),
          o
        );
      }
      function l() {
        return c([
          ['aol', /AOLShield\/([0-9\._]+)/],
          ['edge', /Edge\/([0-9\._]+)/],
          ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
          ['vivaldi', /Vivaldi\/([0-9\.]+)/],
          ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
          ['samsung', /SamsungBrowser\/([0-9\.]+)/],
          ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
          ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
          ['fxios', /FxiOS\/([0-9\.]+)/],
          ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
          ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/],
          ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ['ie', /MSIE\s(7\.0)/],
          ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ['android', /Android\s([0-9\.]+)/],
          ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ['safari', /Version\/([0-9\._]+).*Safari/],
          ['facebook', /FBAV\/([0-9\.]+)/],
          ['instagram', /Instagram\ ([0-9\.]+)/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
        ]);
      }
      function r() {
        return c([
          ['iOS', /iP(hone|od|ad)/],
          ['Android OS', /Android/],
          ['BlackBerry OS', /BlackBerry|BB10/],
          ['Windows Mobile', /IEMobile/],
          ['Amazon OS', /Kindle/],
          ['Windows 3.11', /Win16/],
          ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
          ['Windows 98', /(Windows 98)|(Win98)/],
          ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
          ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
          ['Windows Server 2003', /(Windows NT 5.2)/],
          ['Windows Vista', /(Windows NT 6.0)/],
          ['Windows 7', /(Windows NT 6.1)/],
          ['Windows 8', /(Windows NT 6.2)/],
          ['Windows 8.1', /(Windows NT 6.3)/],
          ['Windows 10', /(Windows NT 10.0)/],
          ['Windows ME', /Windows ME/],
          ['Open BSD', /OpenBSD/],
          ['Sun OS', /SunOS/],
          ['Linux', /(Linux)|(X11)/],
          ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
          ['QNX', /QNX/],
          ['BeOS', /BeOS/],
          ['OS/2', /OS\/2/],
          [
            'Search Bot',
            /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/,
          ],
        ]);
      }
      function c(e) {
        return e.map(function (e) {
          return { name: e[0], rule: e[1] };
        });
      }
      e.exports = {
        detect: a,
        detectOS: s,
        getNodeVersion: n,
        parseUserAgent: i,
      };
    }.call(t, o(6)));
  },
  function (e, t) {
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function a() {
      throw new Error('clearTimeout has not been defined');
    }
    function s(e) {
      if (d === setTimeout) return setTimeout(e, 0);
      if ((d === o || !d) && setTimeout)
        return (d = setTimeout), setTimeout(e, 0);
      try {
        return d(e, 0);
      } catch (t) {
        try {
          return d.call(null, e, 0);
        } catch (t) {
          return d.call(this, e, 0);
        }
      }
    }
    function n(e) {
      if (p === clearTimeout) return clearTimeout(e);
      if ((p === a || !p) && clearTimeout)
        return (p = clearTimeout), clearTimeout(e);
      try {
        return p(e);
      } catch (t) {
        try {
          return p.call(null, e);
        } catch (t) {
          return p.call(this, e);
        }
      }
    }
    function i() {
      h &&
        m &&
        ((h = !1), m.length ? (g = m.concat(g)) : (v = -1), g.length && l());
    }
    function l() {
      if (!h) {
        var e = s(i);
        h = !0;
        for (var t = g.length; t; ) {
          for (m = g, g = []; ++v < t; ) m && m[v].run();
          (v = -1), (t = g.length);
        }
        (m = null), (h = !1), n(e);
      }
    }
    function r(e, t) {
      (this.fun = e), (this.array = t);
    }
    function c() {}
    var d,
      p,
      u = (e.exports = {});
    !(function () {
      try {
        d = 'function' == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        d = o;
      }
      try {
        p = 'function' == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        p = a;
      }
    })();
    var m,
      g = [],
      h = !1,
      v = -1;
    (u.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
      g.push(new r(e, t)), 1 !== g.length || h || s(l);
    }),
      (r.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (u.title = 'browser'),
      (u.browser = !0),
      (u.env = {}),
      (u.argv = []),
      (u.version = ''),
      (u.versions = {}),
      (u.on = c),
      (u.addListener = c),
      (u.once = c),
      (u.off = c),
      (u.removeListener = c),
      (u.removeAllListeners = c),
      (u.emit = c),
      (u.prependListener = c),
      (u.prependOnceListener = c),
      (u.listeners = function (e) {
        return [];
      }),
      (u.binding = function (e) {
        throw new Error('process.binding is not supported');
      }),
      (u.cwd = function () {
        return '/';
      }),
      (u.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }),
      (u.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    (t.endianness = function () {
      return 'LE';
    }),
      (t.hostname = function () {
        return 'undefined' != typeof location ? location.hostname : '';
      }),
      (t.loadavg = function () {
        return [];
      }),
      (t.uptime = function () {
        return 0;
      }),
      (t.freemem = function () {
        return Number.MAX_VALUE;
      }),
      (t.totalmem = function () {
        return Number.MAX_VALUE;
      }),
      (t.cpus = function () {
        return [];
      }),
      (t.type = function () {
        return 'Browser';
      }),
      (t.release = function () {
        return 'undefined' != typeof navigator ? navigator.appVersion : '';
      }),
      (t.networkInterfaces = t.getNetworkInterfaces =
        function () {
          return {};
        }),
      (t.arch = function () {
        return 'javascript';
      }),
      (t.platform = function () {
        return 'browser';
      }),
      (t.tmpdir = t.tmpDir =
        function () {
          return '/tmp';
        }),
      (t.EOL = '\n');
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.ActivityController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.activity = {
          error: '',
          filter: 'nearby',
          locations: !0,
          checkins: !0,
          photos: !0,
          activities: [],
          loading: !0,
        }),
          (k.showActivity = function (t) {
            k.cancel('showActivity'),
              c
                .show({
                  controller: function () {
                    if (
                      (k.ga('send', 'pageview', 'activity'),
                      k.mobileMargin(),
                      void 0,
                      p.get('v2_plugshare_lat') && p.get('v2_plugshare_lng'))
                    ) {
                      var t = {
                        lat: parseFloat(p.get('v2_plugshare_lat')),
                        lng: parseFloat(p.get('v2_plugshare_lng')),
                      };
                      e.geocoderCount++,
                        k.geocoder.geocode({ location: t }, function (e, t) {
                          'OK' === t
                            ? (void 0, (k.region = e[0].formatted_address))
                            : void 0;
                        });
                    }
                    return k.fetchActivities(), k;
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/activity.tmpl.html',
                  parent: k.body,
                  targetEvent: t,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.fetchActivities = function (e, t) {
            if (
              (k.ga(
                'send',
                'event',
                'activity',
                'filter activity type',
                k.activity.filter,
                1
              ),
              (k.activity.error = ''),
              k.activity.locations || k.activity.checkins || k.activity.photos)
            ) {
              var o = {
                filter: k.activity.filter,
                locations: k.activity.locations,
                checkins: k.activity.checkins,
                photos: k.activity.photos,
              };
              e && (o.afterDate = e),
                t && (o.count = t),
                p.get('v2_plugshare_lat') &&
                  (o.latitude = p.get('v2_plugshare_lat')),
                p.get('v2_plugshare_lng') &&
                  (o.longitude = p.get('v2_plugshare_lng')),
                k.user && k.user.id && (o.userId = k.user.id),
                (k.activity.loading = !0),
                f.getActivities(o).then(function (t) {
                  void 0,
                    k.activity.locations ||
                    k.activity.checkins ||
                    k.activity.photos
                      ? e
                        ? t.length
                          ? (k.activity.activities =
                              k.activity.activities.concat(t))
                          : k.toast('No more activities')
                        : (k.activity.activities = t)
                      : (k.activity.activities = []),
                    (k.activity.loading = !1),
                    k.update();
                });
            } else
              (k.activity.error = 'Please enable at least one activity type'),
                (k.activity.activities = null),
                (k.activity.loading = !1),
                k.update();
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.TripController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        function k(t) {
          if (((t = t.toLowerCase().trim()), void 0, A.route_search_focused)) {
            void 0;
            var o = i.defer();
            A.special_results = [];
            var a = parseFloat(p.get('v2_geo_lat')),
              n = parseFloat(p.get('v2_geo_lng'));
            return (
              a && n && -1 != 'my location'.indexOf(t)
                ? A.special_results.push({
                    display: 'My Location',
                    address: A.myLocationAddress,
                    icon_type: 'M',
                    value: 'My Location',
                    description: 'My Location',
                    place_id: 0,
                  })
                : A.user &&
                  A.user.locations &&
                  1 == A.user.locations.length &&
                  -1 != 'home'.indexOf(t) &&
                  A.special_results.push({
                    display: 'Home',
                    address: A.user.locations[0].address,
                    location: A.user.locations[0],
                    icon_type: 'H',
                  }),
              e.autocompletesCount++,
              A.autocompleteService.getPlacePredictions({ input: t }, T),
              f.search(t).then(
                function (e) {
                  void 0, A.ga('send', 'event', 'routing', 'search', t, 1);
                  for (var a = 0; a < e.length; a++) {
                    var n = {
                      display: e[a].display_name,
                      address: e[a].address,
                      location: e[a],
                      icon_type: e[a].icon_type,
                    };
                    A.route_search_results.push(n);
                  }
                  s(function () {
                    A.route_show_results = !0;
                  }, 0),
                    o.resolve(A.route_search_results);
                },
                function () {
                  return Promise.resolve(!1);
                }
              ),
              o.promise
            );
          }
          return void 0, Promise.resolve(!1);
        }
        function C(e) {
          void 0,
            (A.route_last_query = e.display),
            e.display != e.selected &&
              A.route_search_focused &&
              (delete e.coords,
              delete e.place_id,
              delete e.address,
              delete e.location,
              delete e.location_id,
              delete e.selected,
              A.checkInTrip()),
            (A.lastActiveId = e.index);
        }
        function P(e, t) {
          return e + t;
        }
        function S(e) {
          return [e[1], e[0]];
        }
        function x(e) {
          return 5 * Math.ceil((e + 2) / 5);
        }
        o(this, a), void 0;
        var A = t.$parent.maps;
        (A.routeQuerySearch = k),
          (A.routeSearchTextChange = C),
          (A.routeSelectedItem = null),
          (A.route_last_query = ''),
          (A.route_search_results = []),
          (A.route_search_focused = !1),
          (A.route_show_results = !1),
          (A.lastActiveId = null),
          (A.special_results = []);
        var T = function (e, t) {
          if (
            (void 0,
            void 0,
            (A.route_search_results = []),
            A.special_results.length > 0 &&
              (A.route_search_results = A.special_results),
            t != google.maps.places.PlacesServiceStatus.OK)
          )
            return void 0, void A.update();
          var o = 3;
          e.forEach(function (e) {
            if (o) {
              o--;
              var t = e.place_id ? e.place_id : '',
                a = {
                  value: angular.lowercase(e.description),
                  description: e.description,
                  display: e.structured_formatting.main_text,
                  address: e.structured_formatting.secondary_text,
                  type: 'gmaps',
                  place_id: t,
                  icon_type: 'M',
                };
              A.route_search_results.push(a),
                s(function () {
                  (A.route_show_results = !0), A.update();
                }, 0);
            }
          }),
            void 0,
            void 0,
            A.update();
        };
        (A.routeSelectedItemChange = function (t, o) {
          if ((void 0, void 0, t)) {
            void 0,
              (A.route_search_results = []),
              (A.route_show_results = !1),
              (A.route_search_focused = !1);
            var a = _.findKey(A.router.waypoints, { index: o });
            if (void 0 != a) {
              var n = A.router.waypoints[a];
              (n.display = t.description ? t.description : t.display),
                (n.selected = n.display),
                t.location
                  ? (A.ga(
                      'send',
                      'event',
                      'routing',
                      'select_location',
                      'Selected location in search',
                      t.location.id
                    ),
                    void 0,
                    (n.location_id = t.location.id),
                    (n.address = t.address),
                    (n.coords = [t.location.latitude, t.location.longitude]),
                    (n.location = t.location),
                    A.updateRoute(!0),
                    (A.callbackQueue.polyline = function () {
                      A.mapControl.goToNewMarker(t.location, 98);
                    }))
                  : t.place_id
                  ? (A.ga(
                      'send',
                      'event',
                      'routing',
                      'select_poi',
                      'Selected poi in search',
                      0
                    ),
                    void 0,
                    (n.place_id = t.place_id),
                    e.geocoderCount++,
                    A.geocoder.geocode(
                      { placeId: t.place_id },
                      function (e, t) {
                        'OK' === t
                          ? e[0]
                            ? (void 0,
                              void 0,
                              (n.address = e[0].formatted_address),
                              (n.coords = [
                                e[0].geometry.location.lat(),
                                e[0].geometry.location.lng(),
                              ]),
                              A.update(),
                              A.updateRoute(!0),
                              (A.callbackQueue.fitbounds = function () {
                                A.mapControl.goToSearch(n, null, 98);
                              }))
                            : (A.updateRoute(!0), void 0)
                          : (A.updateRoute(!0), void 0);
                      }
                    ))
                  : 0 === t.place_id &&
                    A.setMyLocation(o, function () {
                      A.updateRoute(!0),
                        (A.timeout = s(function () {
                          A.mapControl.goToSearch(n, null, 98);
                        }, 1e3));
                    }),
                A.tryRange();
            }
          }
        }),
          A.body.on('focus', '.route-autocomplete input', function () {
            A.route_search_focused = !0;
            var e = document.activeElement.id;
            (A.lastActiveId = parseInt(
              angular
                .element('#' + e)
                .parent()
                .parent()
                .attr('index')
            )),
              (A.route_search_results = []),
              (A.route_show_results = !1);
          }),
          A.body.on('mouseup', function () {
            A.route_search_focused &&
              (document.activeElement.classList.contains('search') ||
              'INPUT' == document.activeElement.tagName
                ? void 0
                : ((A.route_search_focused = !1), A.update(), void 0));
          }),
          (A.callbackQueue = {}),
          (A.checkCallbackQueue = function (e) {
            void 0,
              A.callbackQueue[e] &&
                (A.callbackQueue[e](), delete A.callbackQueue[e]);
          }),
          (e.range = {
            visible: !0,
            max: 100,
            vehicle: null,
            limit: 150,
            index: null,
            coords: null,
          }),
          (A.getVehicleRange = function (t) {
            if (
              ((e.range.vehicle = null),
              A.user && A.user.vehicles && A.user.vehicles.length)
            ) {
              var o = A.getVehicle().range;
              if (o) {
                e.range.vehicle = parseInt(((o / 1e3) * 0.621371).toFixed(0));
                var a =
                  50 *
                  (Math.floor(
                    (parseInt(((o / 1e3) * 0.621371).toFixed(0)) + 20) / 50
                  ) +
                    1);
                e.range.limit = 150 > a ? 150 : a;
              }
            }
            t && t();
          }),
          (A.setVehicleRange = function () {
            e.range.vehicle &&
              ((e.range.max = e.range.vehicle),
              A.setCookie('v2_trip_max_range', e.range.max, 'essential'),
              void 0,
              A.toast('Set range estimate to ' + A.getVehicle().display_name),
              A.redrawRange());
          }),
          (A.tryRange = function () {
            2 == A.router.waypoints.length &&
              A.router.waypoints[0].selected &&
              A.redrawRange();
          }),
          (A.redrawRange = function (t) {
            if (e.tripPlanner && e.range.visible) {
              if (
                void 0 != t &&
                A.router.waypoints[t] &&
                A.router.waypoints[t].coords
              )
                void 0,
                  (e.range.index = t),
                  (e.range.coords = A.router.waypoints[t].coords);
              else {
                A.router.waypoints &&
                  A.router.waypoints[0] &&
                  A.router.waypoints[0].coords &&
                  ((e.range.index = 0),
                  (e.range.coords = A.router.waypoints[0].coords));
                for (
                  var o = 0;
                  o < A.router.waypoints.length - 1 &&
                  (A.router.waypoints[o].coords &&
                    ((e.range.index = o),
                    (e.range.coords = A.router.waypoints[o].coords)),
                  A.router.waypoints[o].selected);
                  o++
                );
              }
              e.range.coords && (void 0, void 0);
            }
            A.mapControl.redrawRange();
          }),
          angular.element('.range .slider').on('mousedown', function () {
            document.body.addEventListener('mouseup', A.releaseRange);
          }),
          (A.releaseRange = function () {
            s(function () {
              A.setCookie('v2_trip_max_range', e.range.max, 'essential'),
                A.redrawRange(),
                A.calculateTotals(),
                e.range.max >= e.range.limit &&
                  e.range.limit < 500 &&
                  (void 0,
                  (e.range.limit = 50 * (Math.floor(e.range.max / 50) + 1)),
                  A.update());
            }, 0),
              document.body.removeEventListener('mouseup', A.releaseRange);
          }),
          (A.toggleRange = function () {
            void 0,
              A.setCookie('v2_trip_range', e.range.visible, 'essential'),
              A.ga(
                'send',
                'event',
                'routing',
                'toggle_range',
                'Toggled Show Range',
                e.range.visible ? 1 : 0
              ),
              A.redrawRange(),
              A.calculateTotals();
          }),
          (A.toggleWait = function () {
            void 0,
              A.setCookie('v2_trip_wait', A.router.wait, 'essential'),
              A.ga(
                'send',
                'event',
                'routing',
                'toggle_wait',
                'Toggled Show Wait Times',
                A.router.wait
              );
          }),
          (A.router = {
            waypoints: [],
            radius: 2,
            along: !0,
            wait: !1,
            tolls: !1,
            highways: !1,
            ferries: !1,
            distance: null,
            duration: null,
          });
        var L = p.get('v2_trip_radius');
        void 0 != L && (A.router.radius = parseInt(L));
        var M = p.get('v2_trip_along');
        void 0 != M && (A.router.along = u('isTrue')(M));
        var I = p.get('v2_trip_range');
        void 0 != I && (e.range.visible = u('isTrue')(I));
        var E = p.get('v2_trip_wait');
        void 0 != E && (A.router.wait = u('isTrue')(E));
        var R = p.get('v2_trip_tolls');
        void 0 != R && (A.router.tolls = u('isTrue')(R));
        var $ = p.get('v2_trip_highways');
        void 0 != $ && (A.router.highways = u('isTrue')($));
        var F = p.get('v2_trip_ferries');
        void 0 != F && (A.router.ferries = u('isTrue')(F)),
          void 0,
          (A.debugLocations = function () {
            if (A.router) {
              var e = angular.copy(A.router);
              if (e.waypoints && e.waypoints.length > 0)
                for (var t = 0; t < e.waypoints.length; t++)
                  e.waypoints[t].location &&
                    (e.waypoints[t].location = {
                      address: e.waypoints[t].location.address,
                      name: e.waypoints[t].location.name,
                    });
              return e;
            }
          }),
          (A.routerReset = function (t) {
            void 0,
              A.ga('send', 'pageview', 'trip_planner'),
              A.ga('send', 'event', 'routing', 'shown');
            var o = g.innerWidth;
            o > 1600
              ? A.ga('send', 'event', 'routing', 'browser widescreen', o)
              : o > 1200
              ? A.ga('send', 'event', 'routing', 'browser normal', o)
              : o > 420
              ? A.ga('send', 'event', 'routing', 'browser tablet', o)
              : A.ga('send', 'event', 'routing', 'browser mobile', o),
              (A.router.waypoints = []),
              A.mapControl.clearMap(!0),
              e.directions && A.mapControl.clearRoute(),
              A.update(),
              (A.lastActiveId = null),
              A.getVehicleRange(function () {
                var t = p.get('v2_trip_max_range');
                if (void 0 != t) {
                  var o = parseInt(t);
                  o > 0 &&
                    s(function () {
                      e.range.max = o;
                    }, 0);
                } else e.range.vehicle && A.setVehicleRange();
              }),
              s(function () {
                A.router.waypoints = [
                  { index: 0, wait: 0 },
                  { index: 1, wait: 0 },
                ];
                var o = parseFloat(p.get('v2_geo_lat')),
                  a = parseFloat(p.get('v2_geo_lng'));
                !t &&
                  o &&
                  a &&
                  ((A.router.waypoints[0].display = 'My Location'),
                  A.setMyLocation(0, function () {
                    A.mapControl.createSearchMarker(
                      A.router.waypoints[0],
                      null,
                      98
                    ),
                      A.tryRange();
                  })),
                  A.router.waypoints[0].display
                    ? (void 0,
                      s(function () {
                        angular.element('#waypoint1 input').focus();
                      }, 100),
                      (A.lastActiveId = 1))
                    : (void 0,
                      s(function () {
                        !A.router.loading &&
                          angular.element('#waypoint0 input').length &&
                          angular.element('#waypoint0 input').focus();
                      }, 100),
                      (A.lastActiveId = 0)),
                  (e.tripPlanner = !0),
                  (e.directions = !1),
                  (e.showAlongRoute = A.router.along),
                  (A.router.id = null),
                  (A.router.showTitle = !1),
                  (A.router.name = null),
                  (A.router.saveName = null),
                  (A.router.totalWaitHours = null),
                  (A.router.totalWaitMinutes = null),
                  (A.router.totalDurationHours = null),
                  (A.router.totalDurationMinutes = null),
                  (A.router.showAdd = !1),
                  (A.router.showWarning = !1),
                  (A.router.dangerousSegments = 0),
                  (e.routeIndex = 0),
                  (e.tripComplete = !1),
                  t && A.loadTrip(t);
              }, 0);
          }),
          (t.sortingLog = []),
          (t.sortableOptions = {
            sort: function (e, t) {
              var o = 1;
              g.innerWidth < 1800 && (o = 0.8);
              var a = t.originalPosition.left,
                s = t.position.top / o;
              t.helper.css({ left: a, top: s });
            },
            start: function (e, t) {
              t.item.addClass('drag');
            },
            update: function (e, o) {
              void 0;
              var a = A.router.waypoints
                .map(function (e) {
                  return e.index;
                })
                .join(', ');
              t.sortingLog.push('Update: ' + a);
            },
            stop: function (e, o) {
              o.item.removeClass('drag'),
                angular.element('.ui-sortable-placeholder').remove();
              var a = A.router.waypoints
                .map(function (e) {
                  return e.index;
                })
                .join(', ');
              t.sortingLog.push('Stop: ' + a),
                A.reorderWaypoints(),
                A.updateRoute();
            },
            handle: '.handle',
          }),
          (A.readOnlyHelp = function () {
            if ((z++, 3 == z))
              g.open(
                'https://help.plugshare.com/hc/en-us/articles/4418958340115-Accessing-the-Trip-Planner-on-your-mobile-browser',
                '_blank'
              );
            else {
              var e =
                'To create or edit trips, please use a computer with a browser window at least 1200 pixels wide.<br>Your current width: ' +
                g.innerWidth +
                ' pixels.';
              g.innerWidth > 800 &&
                (e += ' Enlarge your browser window to try again.'),
                A.toast(e, 7500);
            }
          }),
          t.$watch(
            function () {
              return e.mobilePlanner;
            },
            function (t) {
              void 0,
                t &&
                  (A.menu.menu && A.toggleMenu('menu'),
                  e.tripComplete || A.toggleComplete(!0),
                  A.mapControl.closeInfoWindows(),
                  A.mapControl.clearRange());
            }
          );
        var z = 0;
        (A.showPlanner = function (t, o) {
          A.router.loading
            ? A.toast(
                'Please wait for previous request to complete or refresh the page'
              )
            : ((e.mobilePlanner = g.innerWidth < 1200),
              e.mobilePlanner && !o
                ? A.readOnlyHelp()
                : (A.authenticated()
                    ? (A.mobilePlannerMargin(),
                      A.routerReset(o),
                      (A.trips = p.get('v2_plugshare_trips')),
                      A.trips
                        ? A.trips++
                        : ((A.trips = 1),
                          s(function () {
                            A.showTripWelcome();
                          }, 1e3)),
                      void 0,
                      A.setCookie('v2_plugshare_trips', A.trips, 'essential'),
                      A.ga('send', 'pageview', 'trip planner'),
                      e.initializeEvents.tripPlanner
                        ? (A.ga(
                            'send',
                            'event',
                            'trip planner',
                            'showPlanner',
                            'Trip planner opened directly from /trip',
                            A.trips,
                            { nonInteraction: 1 }
                          ),
                          (e.initializeEvents.tripPlanner = !1))
                        : A.ga(
                            'send',
                            'event',
                            'trip planner',
                            'showPlanner',
                            'User opened the trip planner',
                            A.trips
                          ),
                      o || A.toggleMenu('menu'))
                    : A.user
                    ? A['try'](t, 'showPlanner')
                    : ((A.trips = 1),
                      A.setCookie('v2_plugshare_trips', A.trips, 'analytical'),
                      (A.menu.menu = !0),
                      (A.menu.trip = !0),
                      (A.menu.filters = !1),
                      s(function () {
                        A.showTripWelcome();
                      }, 1e3)),
                  void 0,
                  A.setCookie('v2_plugshare_trips', A.trips, 'essential'),
                  (!o || e.mobilePlanner) && A.toggleMenu('menu')));
        }),
          (A.closePlanner = function (t) {
            void 0,
              (e.tripPlanner = !1),
              (e.showAlongRoute = !1),
              (e.tripComplete = !1),
              (e.mobilePlanner = !1),
              t || (A.location = null),
              (A.assistant = {}),
              (A.filters.amenities = []),
              (A.router.waypoints = []),
              (A.router.loading = !1),
              A.mapControl.closePlanner(),
              A.mobileMargin(),
              A.toast('Closed Trip Planner');
          }),
          (A.showTripWelcome = function (t) {
            c.show({
              controller: function () {
                return (
                  A.ga('send', 'pageview', 'trip welcome'),
                  A.mobileMargin(),
                  (A.mobileWarning = e.mobilePlanner),
                  A
                );
              },
              controllerAs: 'maps',
              templateUrl: 'app/main/templates/trip.tmpl.html',
              parent: A.body,
              targetEvent: t,
              clickOutsideToClose: !0,
              escapeToClose: !0,
            }).then(
              function (e) {
                void 0, A.mobilePlannerMargin();
              },
              function () {
                void 0, A.mobilePlannerMargin();
              }
            );
          }),
          (A.queueCounter = 0),
          (A.waypointCounter = 0),
          (A.routingError = !1),
          (A.routeTrip = function (t) {
            void 0,
              angular.element(':focus').blur(),
              (A.route_search_focused = !1),
              (A.queueCounter = 0),
              (A.waypointCounter = 0),
              (A.routingError = !1);
            var o = parseFloat(p.get('v2_geo_lat')),
              a = parseFloat(p.get('v2_geo_lng'));
            A.router.waypoints.forEach(function (n, i) {
              if (
                (void 0,
                void 0,
                A.waypointCounter++,
                n.display != n.selected &&
                  (delete n.selected,
                  delete n.coords,
                  delete n.address,
                  delete n.location,
                  delete n.location_id,
                  delete n.place_id),
                n.coords || n.address || !n.display)
              )
                A.routeCallback(t);
              else {
                void 0, A.queueCounter++, void 0;
                var l = n.display.toLowerCase().trim();
                o && a && -1 != 'my location'.indexOf(l)
                  ? ((n.display = 'My Location'),
                    (n.selected = 'My Location'),
                    A.setMyLocation(i, function () {
                      A.queueCounter--,
                        A.routeCallback(t),
                        (A.callbackQueue.fitbounds = function () {
                          A.mapControl.goToSearch(n, null, 98);
                        });
                    }))
                  : A.user &&
                    A.user.locations &&
                    1 == A.user.locations.length &&
                    -1 != 'home'.indexOf(l)
                  ? ((n.display = 'Home'),
                    (n.selected = 'Home'),
                    (n.location = A.user.locations[0]),
                    (n.location_id = A.user.locations[0].id),
                    (n.address = A.user.locations[0].address),
                    (n.coords = A.user.locations[0].coords),
                    A.queueCounter--,
                    A.routeCallback(t))
                  : (e.autocompletesCount++,
                    s(function () {
                      A.autocompleteService.getPlacePredictions(
                        { input: l },
                        function (o, a) {
                          if (
                            (void 0,
                            void 0,
                            a != google.maps.places.PlacesServiceStatus.OK)
                          )
                            return (
                              void 0,
                              (A.routingError = !0),
                              A.queueCounter--,
                              void A.routeCallback(t)
                            );
                          if (o.length > 0) {
                            var s = o[0];
                            void 0,
                              (n.display = s.description),
                              (n.place_id = s.place_id),
                              (n.selected = s.description),
                              e.geocoderCount++,
                              A.geocoder.geocode(
                                { placeId: s.place_id },
                                function (e, o) {
                                  'OK' === o
                                    ? (e[0]
                                        ? (void 0,
                                          void 0,
                                          (n.coords = [
                                            e[0].geometry.location.lat(),
                                            e[0].geometry.location.lng(),
                                          ]),
                                          (n.address = e[0].formatted_address),
                                          A.update(),
                                          (A.callbackQueue.fitbounds =
                                            function () {
                                              A.mapControl.goToSearch(
                                                n,
                                                null,
                                                98
                                              );
                                            }))
                                        : void 0,
                                      A.queueCounter--,
                                      A.routeCallback(t))
                                    : (void 0,
                                      A.queueCounter--,
                                      A.routeCallback(t));
                                }
                              );
                          } else void 0, (A.routingError = !0);
                        }
                      );
                    }, 10));
              }
            });
          }),
          (A.routeCallback = function (t) {
            if (
              (void 0,
              0 == A.queueCounter &&
                A.waypointCounter == A.router.waypoints.length)
            )
              if (A.routingError)
                A.toast(
                  'Unspecified location not found, please clarify inputs'
                ),
                  A.mapControl.clearRoute(),
                  (e.tripComplete = !1);
              else {
                for (var o = [], a = 0; a < A.router.waypoints.length; a++)
                  A.router.waypoints[a].selected &&
                    o.push(A.router.waypoints[a]);
                var s = o[0],
                  n = o[o.length - 1];
                if (o.length >= 2 && s.selected && n.selected) {
                  A.mapControl.generateMapMarkers(o),
                    (A.router.showAdd = !0),
                    o.shift(),
                    o.pop();
                  var i = {
                    origin: s,
                    destination: n,
                    waypoints: o,
                    metric: A.metric,
                    radius: A.router.radius,
                    tolls: A.router.tolls,
                    highways: A.router.highways,
                    ferries: A.router.ferries,
                    resize: t,
                    pane: A.location && A.location.id ? !0 : !1,
                  };
                  void 0,
                    A.mapControl.routeTrip(i),
                    A.ga(
                      'send',
                      'event',
                      'routing',
                      'route_trip',
                      'Route query from ' + s.display + ' to ' + n.display,
                      o.length
                    ),
                    A.generateRouteLink(),
                    A.redrawRange();
                } else
                  A.toast('Please provide an origin and destination'),
                    (e.tripComplete = !1);
              }
          }),
          (A.routingResponse = function (t) {
            void 0,
              (e.directions = t),
              t &&
                (A.router.showTitle ||
                  ((A.router.showTitle = !0),
                  (A.router.name =
                    'Trip to ' +
                    A.router.waypoints[A.router.waypoints.length - 1].selected),
                  A.router.name.length > 100 &&
                    (A.router.name = A.router.name.substring(0, 100)),
                  s(function () {
                    angular.element('#trip-name input').select();
                  }, 100)),
                A.calculateTotals(),
                A.router.loading &&
                  (A.toast('Trip Loaded'),
                  (A.router.loading = !1),
                  A.update()));
          }),
          (A.calculateTotals = function () {
            if (A.router.waypoints && A.router.waypoints.length >= 2) {
              A.router.totalWait = 0;
              for (var t = [], o = 0; o < A.router.waypoints.length; o++)
                delete A.router.waypoints[o].distance,
                  delete A.router.waypoints[o].durationHours,
                  delete A.router.waypoints[o].durationMinutes,
                  delete A.router.waypoints[o].displayDistanceWarning,
                  delete A.router.waypoints[o].distanceMessage,
                  A.router.waypoints[o].selected &&
                    (t.push(o),
                    A.router.wait &&
                      (0 == o ||
                      o == A.router.waypoints.length - 1 ||
                      void 0 == A.router.waypoints[o].wait
                        ? (A.router.waypoints[o].wait = 0)
                        : A.router.waypoints[o].wait > 99 &&
                          (A.router.waypoints[o].wait = 99),
                      (A.router.totalWait += A.router.waypoints[o].wait)));
              if (
                ((A.router.totalWait = 60 * A.router.totalWait * 60),
                void 0,
                void 0,
                e.directions)
              ) {
                var a = 0,
                  s = 0,
                  n = e.directions.routes[e.routeIndex].legs,
                  i = [],
                  l =
                    "Warning: The distance between your previous and next charging station is over your vehicle's estimated max range. We recommend adding another charging stop in between.",
                  r = "Distance is within your vehicle's estimated max range";
                void 0, (A.router.dangerousSegments = 0);
                for (var c = 0; c < n.length + 1; c++) {
                  if (
                    A.router.waypoints[t[c]].location_id ||
                    (c >= 1 && c == t.length - 1)
                  ) {
                    var d = i.length > 0 ? i.reduce(P) : 0,
                      p = d > e.range.max;
                    p && A.router.dangerousSegments++, void 0;
                    for (var u = 1; u < i.length + 1; u++)
                      void 0,
                        (A.router.waypoints[t[c - u]].displayDistanceWarning =
                          p),
                        e.range.visible &&
                          (A.router.waypoints[t[c - u]].distanceMessage =
                            d > e.range.max ? l : r);
                    i = [];
                  }
                  c < n.length &&
                    ((a += n[c].distance.value),
                    (s += n[c].duration.value),
                    i.push(
                      parseFloat((n[c].distance.value / 1609.34).toFixed(1))
                    ),
                    (A.router.waypoints[t[c]].distance = A.convertDistance(
                      n[c].distance.value
                    )),
                    (A.router.waypoints[t[c]].durationHours = A.convertDuration(
                      n[c].duration.value,
                      'hours'
                    )),
                    (A.router.waypoints[t[c]].durationMinutes =
                      A.convertDuration(n[c].duration.value, 'minutes')));
                }
                (A.router.totalDistance = a),
                  (A.router.waypoints[A.router.waypoints.length - 1].distance =
                    A.convertDistance(a)),
                  (A.router.waypoints[
                    A.router.waypoints.length - 1
                  ].durationHours = A.convertDuration(s, 'hours')),
                  (A.router.waypoints[
                    A.router.waypoints.length - 1
                  ].durationMinutes = A.convertDuration(s, 'minutes')),
                  (A.router.totalWaitHours = A.convertDuration(
                    A.router.totalWait,
                    'hours'
                  )),
                  (A.router.totalWaitMinutes = A.convertDuration(
                    A.router.totalWait,
                    'minutes'
                  )),
                  (A.router.totalDurationHours = A.convertDuration(
                    s + A.router.totalWait,
                    'hours'
                  )),
                  (A.router.totalDurationMinutes = A.convertDuration(
                    s + A.router.totalWait,
                    'minutes'
                  )),
                  A.update(),
                  void 0,
                  void 0;
              } else void 0;
            }
          }),
          (A.convertDistance = function (e) {
            return A.metric
              ? e > 1e5
                ? (e / 1e3).toFixed(0)
                : (e / 1e3).toFixed(1)
              : e / 1609.34 > 100
              ? (e / 1609.34).toFixed(0)
              : (e / 1609.34).toFixed(1);
          }),
          (A.convertDuration = function (e, t) {
            if (e > 3600 && 'hours' == t) {
              var o = Math.floor((100 * e) / 36e4);
              return o;
            }
            if ('minutes' == t) {
              e %= 3600;
              var a = e > 0 ? (e / 60).toFixed(0) : 0;
              return a;
            }
            return 0;
          }),
          (A.toggleAlong = function () {
            void 0,
              (e.showAlongRoute = A.router.along),
              A.setCookie('v2_trip_along', A.router.along, 'essential'),
              A.ga(
                'send',
                'event',
                'routing',
                'toggle_along',
                'Toggled Show Along Route Only',
                A.router.along ? 1 : 0
              ),
              1 == e.showAlongRoute
                ? (A.mapControl.cleanMap(), A.updateRoute())
                : A.mapControl.reloadMarkers();
          }),
          (A.updateRoute = function (t) {
            void 0,
              ((A.router.waypoints[0].display &&
                A.router.waypoints[A.router.waypoints.length - 1].display) ||
                e.directions) &&
                A.routeTrip(t);
          }),
          (A.refreshPolyline = function () {
            e.directions && A.mapControl.getPolyline(A.router.radius);
          }),
          angular.element('#radius-slider').on('mousedown', function () {
            document.body.addEventListener('mouseup', A.release);
          }),
          (A.release = function () {
            A.refreshPolyline(),
              s(function () {
                A.setCookie('v2_trip_radius', A.router.radius, 'essential'),
                  A.ga(
                    'send',
                    'event',
                    'routing',
                    'polyline_radius',
                    'Updated polyline search radius',
                    A.router.radius
                  );
              }, 0),
              document.body.removeEventListener('mouseup', A.release);
          }),
          (A.toggleAvoid = function (e) {
            s(function () {
              A.setCookie('v2_trip_' + e, A.router[e], 'essential'),
                A.ga(
                  'send',
                  'event',
                  'routing',
                  'toggle_avoid',
                  'Toggled avoid ' + e,
                  A.router[e] ? 1 : 0
                );
            }, 0),
              A.updateRoute();
          }),
          (A.toggleComplete = function (t) {
            if (
              (t ? (e.tripComplete = !0) : (e.tripComplete = !e.tripComplete),
              (A.router.showWarning = !0),
              (A.assistant = null),
              e.tripComplete)
            ) {
              void 0, A.mapControl.clearMap(!0);
              for (var o = 0; o < A.router.waypoints.length; )
                A.router.waypoints[o].selected
                  ? o++
                  : (A.router.waypoints.splice(o, 1), A.reorderWaypoints());
              angular.element(':focus').blur(),
                (A.location = null),
                A.routeTrip(!0),
                (A.route_search_focused = !1),
                (A.route_show_results = !1),
                A.mapControl.tripLocations(A.router.waypoints),
                A.ga(
                  'send',
                  'event',
                  'routing',
                  'toggle_complete',
                  'Trip complete mode',
                  1
                );
            } else
              void 0,
                A.updateRoute(),
                A.mapControl.closeTags(),
                A.ga(
                  'send',
                  'event',
                  'routing',
                  'toggle_complete',
                  'Trip complete mode',
                  0
                );
          }),
          (A.saveTrip = function () {
            if ((void 0, A.user)) {
              void 0, void 0, void 0;
              var t = {
                  name: A.router.name ? A.router.name : 'Untitled Trip',
                  vehicle_range: e.range.max,
                  distance: A.router.totalDistance,
                  polyline: {},
                  legs: [],
                  version: 'plugshare_web',
                },
                o = A.getVehicle();
              A.user &&
                o &&
                o.id &&
                ((t.vehicle_id = o.model_id), (t.vehicle_subtype = o.trim_id));
              var a = e.directions.routes[0];
              if (a) {
                t.polyline = { type: 'LineString', coordinates: [] };
                for (var s = 0; s < a.overview_path.length; s++) {
                  var n = S([
                    a.overview_path[s].lat(),
                    a.overview_path[s].lng(),
                  ]);
                  t.polyline.coordinates.push(n);
                }
              }
              var i = {
                address: A.router.waypoints[0].address,
                distance: 0,
                coordinate: {
                  type: 'Point',
                  coordinates: S(A.router.waypoints[0].coords),
                },
                wait_hours: 0,
              };
              A.router.waypoints[0].location_id
                ? (i.location_id = A.router.waypoints[0].location_id)
                : e.directions.geocoded_waypoints[0].place_id &&
                  (i.ext_id = e.directions.geocoded_waypoints[0].place_id),
                t.legs.push(i);
              for (var l = 0; l < a.legs.length; l++) {
                var r = [];
                if (1 == a.legs[l].steps.length) {
                  void 0,
                    r.push([
                      a.legs[l].steps[0].path[0].lat(),
                      a.legs[l].steps[0].path[0].lng(),
                    ]);
                  var c = a.legs[l].steps[0].path.length - 1;
                  r.push([
                    a.legs[l].steps[0].path[c].lat(),
                    a.legs[l].steps[0].path[c].lng(),
                  ]);
                } else
                  for (var d = 0; d < a.legs[l].steps.length; d++)
                    r.push(
                      S([
                        a.legs[l].steps[d].start_point.lat(),
                        a.legs[l].steps[d].start_point.lng(),
                      ])
                    );
                var p = {
                  address: a.legs[l].end_address,
                  distance: a.legs[l].distance.value,
                  polyline: { type: 'LineString', coordinates: r },
                  coordinate: {
                    type: 'Point',
                    coordinates: S([
                      a.legs[l].end_location.lat(),
                      a.legs[l].end_location.lng(),
                    ]),
                  },
                };
                A.router.waypoints[l + 1].location_id
                  ? (p.location_id = A.router.waypoints[l + 1].location_id)
                  : A.router.waypoints[l + 1].place_id &&
                    (p.ext_id = A.router.waypoints[l + 1].place_id),
                  A.router.wait
                    ? (p.wait_hours = A.router.waypoints[l + 1].wait)
                    : (p.wait_hours = 0),
                  t.legs.push(p);
              }
              void 0;
              var u = !1,
                m = t.name == A.router.saveName;
              if (A.router.id) {
                var g = _.findKey(A.latestTrips(), { id: A.router.id });
                void 0 != g && (u = !0);
              }
              u && m
                ? f.updateTrip(t, A.router.id).then(function (e) {
                    void 0,
                      e.success && e.data
                        ? ((A.router.id = e.data.id),
                          A.ga(
                            'send',
                            'event',
                            'routing',
                            'save_trip',
                            'Updated Saved Trip',
                            A.router.id
                          ),
                          A.toast('Trip Changes Saved', 5e3),
                          A.latestTrips())
                        : e.error &&
                          (void 0,
                          A.toast('Error - Trip changes could not be saved'));
                  })
                : f.saveTrip(t).then(function (e) {
                    void 0,
                      e.success && e.data
                        ? ((A.router.id = e.data.id),
                          m
                            ? (A.toast('Trip Saved', 5e3),
                              A.ga(
                                'send',
                                'event',
                                'routing',
                                'save_trip',
                                'Saved Trip',
                                A.router.id
                              ))
                            : (A.toast('Trip Saved as ' + t.name, 5e3),
                              A.ga(
                                'send',
                                'event',
                                'routing',
                                'save_trip',
                                'Saved Trip As',
                                A.router.id
                              )),
                          (A.router.saveName = e.data.name),
                          A.latestTrips())
                        : e.error &&
                          (void 0, A.toast('Error - Trip could not be saved'));
                  });
            }
          }),
          (A.latestTrips = function () {
            return f.trips;
          }),
          (A.getTrips = function () {
            A.user &&
              !A.unverified &&
              A.user.setup_complete &&
              f.getTrips().then(function (e) {
                return void 0, e;
              });
          }),
          (A.deleteTrip = function (e) {
            confirm('Are you sure you want to delete this trip?') &&
              f.deleteTrip(e).then(function (t) {
                t &&
                  (A.ga(
                    'send',
                    'event',
                    'routing',
                    'delete_trip',
                    'Deleted Trip',
                    e
                  ),
                  A.toast('Trip Deleted'));
              });
          }),
          (A.resetRouteLoading = function () {
            A.router.loading = !1;
          }),
          (A.fetchPlaceCounter = 0),
          (A.loadTrip = function (e) {
            void 0,
              (A.router.loading = !0),
              (A.fetchPlaceCounter = 0),
              f.getTrip(e).then(function (e) {
                if (e) {
                  void 0,
                    (A.router.showTitle = !0),
                    (A.router.id = e.id),
                    (A.router.name = e.name),
                    (A.router.saveName = e.name),
                    (A.router.waypoints = []);
                  for (var t = 0; t < e.legs.length; t++) {
                    var o = e.legs[t].address;
                    e.legs[t].location &&
                      e.legs[t].location.name &&
                      (o = e.legs[t].location.name);
                    var a = null;
                    e.legs[t].coordinate && e.legs[t].coordinate.coordinates
                      ? (a = S(e.legs[t].coordinate.coordinates))
                      : e.legs[t].location &&
                        e.legs[t].location.latitude &&
                        e.legs[t].location.longitude &&
                        (a = [
                          e.legs[t].location.latitude,
                          e.legs[t].location.longitude,
                        ]),
                      e.legs[t].wait_hours && (A.router.wait = !0);
                    var s = {
                      index: t,
                      display: o,
                      selected: o,
                      address: e.legs[t].address,
                      coords: a,
                      wait: e.legs[t].wait_hours ? e.legs[t].wait_hours : 0,
                    };
                    e.legs[t].location_id
                      ? (s.location_id = e.legs[t].location_id)
                      : e.legs[t].ext_id
                      ? (s.place_id = e.legs[t].ext_id)
                      : A.retrievePlaceId(a, t, e.id),
                      e.legs[t].location && (s.location = e.legs[t].location),
                      A.router.waypoints.push(s);
                  }
                  A.loadCompleteCallback();
                } else (A.router.loading = !1), A.toast('Trip failed to load');
              });
          }),
          (A.retrievePlaceId = function (t, o, a) {
            A.fetchPlaceCounter++;
            var s = { lat: t[0], lng: t[1] };
            e.geocoderCount++,
              A.geocoder.geocode({ location: s }, function (e, t) {
                'OK' === t
                  ? (void 0,
                    void 0,
                    A.router.id == a && A.router.waypoints.length >= o
                      ? ((A.router.waypoints[o].place_id = e[0].place_id),
                        A.loadCompleteCallback(!0))
                      : void 0)
                  : A.loadCompleteCallback(!0);
              });
          }),
          (A.loadCompleteCallback = function (t) {
            t && A.fetchPlaceCounter--,
              0 == A.fetchPlaceCounter &&
                (A.routeTrip(),
                e.mobilePlanner
                  ? (e.tripComplete || A.toggleComplete(!0),
                    A.mapControl.closeInfoWindows(),
                    A.mapControl.clearRange())
                  : A.mapControl.loadTripLocations(A.router.waypoints));
          }),
          (A.insertWaypointAfter = function (e) {
            void 0,
              A.router.waypoints.length < 25
                ? (A.router.waypoints.splice(e + 1, 0, { wait: 0 }),
                  A.ga(
                    'send',
                    'event',
                    'routing',
                    'insert_waypoint',
                    'Inserted waypoint',
                    1
                  ),
                  A.reorderWaypoints(),
                  A.calculateTotals(),
                  s(function () {
                    angular.element('#waypoint' + (e + 1) + ' input').focus();
                  }, 0),
                  25 == A.router.waypoints.length &&
                    A.toast(
                      'You have reached the maximum number of stops. If you need to route more stops, we recommend splitting into multiple trips',
                      5e3
                    ))
                : A.toast(
                    'You have reached the maximum number of stops. If you need to route more stops, we recommend splitting into multiple trips',
                    5e3
                  );
          }),
          (A.clearWaypoint = function (t, o) {
            void 0, (A.router.showWarning = !0);
            var a = _.findKey(A.router.waypoints, { index: parseInt(t) });
            if (void 0 != a) {
              if (A.router.waypoints.length <= 2 || o) {
                if (A.router.waypoints[a].display) {
                  var n = A.router.waypoints[a];
                  delete n.display,
                    delete n.coords,
                    delete n.address,
                    delete n.location,
                    delete n.location_id,
                    delete n.place_id,
                    delete n.selected,
                    delete n.displayDistanceWarning,
                    delete n.distanceMessage,
                    (n.wait = 0);
                }
              } else A.router.waypoints.splice(a, 1), A.reorderWaypoints();
              if (
                (A.update(),
                s(function () {
                  A.updateRoute();
                }, 0),
                e.tripComplete)
              )
                A.mapControl.tripLocations(A.router.waypoints);
              else {
                for (var i = 0, l = 0; l < A.router.waypoints.length; l++)
                  A.router.waypoints[l].selected && i++;
                i >= 2
                  ? A.updateRoute()
                  : (A.mapControl.clearRoute(),
                    A.mapControl.reloadMarkers(),
                    A.tryRange()),
                  A.checkInTrip();
              }
            }
          }),
          (A.reverseTrip = function () {
            void 0;
            for (var e = [], t = 0; t < A.router.waypoints.length; t++)
              e.unshift(A.router.waypoints[t]);
            (A.router.waypoints = e),
              A.reorderWaypoints(),
              A.update(),
              A.updateRoute();
            var o = A.router.name.trim();
            0 === o.indexOf('Trip to ')
              ? (o = o.replace('Trip to ', 'Return from '))
              : 0 === o.indexOf('Return from ') &&
                (o = o.replace('Return from ', 'Trip to ')),
              (A.router.name = o),
              A.router.name.length > 100 &&
                (A.router.name = A.router.name.substring(0, 100)),
              A.toast('Trip reversed');
          }),
          (A.reorderWaypoints = function () {
            void 0;
            for (var e = 0; e < A.router.waypoints.length; e++)
              A.router.waypoints[e].index = e;
            A.redrawRange();
          }),
          (A.showWaypoint = function (t) {
            var o = _.findKey(A.router.waypoints, { index: t });
            if (void 0 != o) {
              var a = A.router.waypoints[o];
              if (a.location)
                void 0,
                  A.ga(
                    'send',
                    'event',
                    'routing',
                    'show_waypoint',
                    'Show location waypoint',
                    a.location.id
                  ),
                  e.tripComplete
                    ? A.mapControl.goToMarker(a.location.id)
                    : A.mapControl.goToNewMarker(a.location);
              else if (a.address || a.coords) {
                void 0;
                var n = {
                  place_id: a.place_id,
                  display: a.display,
                  address: a.address,
                  coords: a.coords,
                };
                (A.location = null),
                  A.ga(
                    'send',
                    'event',
                    'routing',
                    'show_waypoint',
                    'Show poi waypoint',
                    a.place_id
                  ),
                  s(function () {
                    A.mapControl.goToSearch(n);
                  }, 0);
              }
            }
          }),
          (A.centerCoords = function (e) {
            void 0, A.mapControl.panTo(e);
          }),
          (A.copyWaypoint = function (e) {
            var t = _.findKey(A.router.waypoints, { index: e });
            if (void 0 != t) {
              var o = A.router.waypoints[t];
              o.address &&
                (void 0,
                A.copy(o.address, 'address'),
                A.ga(
                  'send',
                  'event',
                  'routing',
                  'copy_waypoint_address',
                  o.address,
                  o.place_id ? o.place_id : 0
                ));
            }
          }),
          (A.getActiveInput = function () {
            for (var e = -1, t = 0; t < A.router.waypoints.length; t++)
              if (!A.router.waypoints[t].display) {
                e = t;
                break;
              }
            return e;
          }),
          A.body.on('mouseenter', '.hoverpulse', function () {
            (A.pulseActive = !0), A.update();
          }),
          A.body.on('mouseleave', '.hoverpulse', function () {
            (A.pulseActive = !1), A.update();
          }),
          (A.addToTrip = function () {
            if (
              (void 0,
              (A.pulseActive = !1),
              A.update(),
              A.location || A.assistant)
            ) {
              var e = A.getActiveInput();
              if (-1 !== e) {
                void 0;
                var t = A.router.waypoints[e];
                A.location
                  ? (void 0,
                    (t.location_id = A.location.id),
                    (t.location = A.location),
                    (t.display = A.location.display_name),
                    (t.selected = A.location.display_name),
                    (t.address = A.location.address),
                    (t.coords = [A.location.latitude, A.location.longitude]),
                    (t.wait = 0),
                    A.ga(
                      'send',
                      'event',
                      'routing',
                      'added_waypoint',
                      'Added location waypoint',
                      A.location.id
                    ))
                  : A.assistant &&
                    (void 0,
                    (t.place_id = A.assistant.place_id),
                    (t.display = A.assistant.display),
                    (t.selected = A.assistant.display),
                    (t.address = A.assistant.address),
                    (t.coords = A.assistant.coords),
                    (t.wait = 0),
                    A.ga(
                      'send',
                      'event',
                      'routing',
                      'added_waypoint',
                      'Added poi waypoint',
                      A.assistant.place_id
                    )),
                  (A.lastActiveId = null),
                  (A.route_search_focused = !1),
                  A.checkInTrip(),
                  A.reorderWaypoints(),
                  A.update(),
                  A.updateRoute();
              } else
                void 0,
                  A.router.waypoints.length < 25
                    ? (A.location
                        ? (void 0,
                          A.router.waypoints.splice(
                            A.router.waypoints.length - 1,
                            0,
                            {
                              location_id: A.location.id,
                              location: A.location,
                              display: A.location.display_name,
                              address: A.location.address,
                              coords: [
                                A.location.latitude,
                                A.location.longitude,
                              ],
                              selected: A.location.display_name,
                              wait: 0,
                            }
                          ))
                        : A.assistant &&
                          (void 0,
                          A.router.waypoints.splice(
                            A.router.waypoints.length - 1,
                            0,
                            {
                              place_id: A.assistant.place_id,
                              display: A.assistant.display,
                              selected: A.assistant.display,
                              address: A.assistant.address,
                              coords: A.assistant.coords,
                              wait: 0,
                            }
                          )),
                      A.checkInTrip(),
                      A.reorderWaypoints(),
                      A.updateRoute())
                    : A.toast(
                        'You have reached the maximum number of stops. If you need to route more stops, we recommend splitting into multiple trips',
                        5e3
                      );
            }
          }),
          (A.checkSearchRemove = function (e) {
            if (A.router.waypoints && A.router.waypoints.length) {
              for (var t = !1, o = 0; o < A.router.waypoints.length; o++)
                if (A.router.waypoints[o].place_id == e) {
                  t = !0;
                  break;
                }
              t || A.mapControl.removeSearch(e);
            }
          }),
          (A.removeFromTrip = function () {
            if ((void 0, A.location)) {
              var e = _.findKey(A.router.waypoints, {
                location_id: A.location.id,
              });
              void 0 != e &&
                (A.clearWaypoint(e),
                A.ga(
                  'send',
                  'event',
                  'routing',
                  'remove_waypoint',
                  'Removed location waypoint',
                  A.location.id
                ));
            } else if (A.assistant) {
              var t = _.findKey(A.router.waypoints, {
                place_id: A.assistant.place_id,
              });
              void 0 != t &&
                (A.clearWaypoint(t),
                A.ga(
                  'send',
                  'event',
                  'routing',
                  'remove_waypoint',
                  'Removed poi waypoint',
                  A.assistant.place_id
                ));
            }
          }),
          (A.findInTrip = function (e) {
            var t = null;
            if (
              (void 0 != e
                ? (t = e)
                : A.location && void 0 != A.location.id
                ? (t = A.location.id)
                : A.assistant &&
                  void 0 != A.assistant.place_id &&
                  (t = A.assistant.place_id),
              void 0 != t)
            ) {
              var o = _.findKey(A.router.waypoints, { location_id: t }),
                a = _.findKey(A.router.waypoints, { place_id: t });
              return void 0 != o || void 0 != a ? !0 : !1;
            }
            return !1;
          }),
          (A.checkInTrip = function (e) {
            void 0,
              A.findInTrip(e)
                ? (angular
                    .element('.action.placeholder')
                    .css('display', 'none'),
                  angular.element('.action.add').css('display', 'none'),
                  angular
                    .element('.action.remove')
                    .css('display', 'inline-block'))
                : (angular
                    .element('.action.placeholder')
                    .css('display', 'none'),
                  angular.element('.action.add').css('display', 'inline-block'),
                  angular.element('.action.remove').css('display', 'none'));
          }),
          (A.assistant = {}),
          (A.setAssistant = function (e) {
            void 0, void 0, (A.assistant = e), A.update();
          }),
          (A.setMyLocation = function (t, o) {
            void 0;
            var a = parseFloat(p.get('v2_geo_lat')),
              s = parseFloat(p.get('v2_geo_lng'));
            if (a && s) {
              var n = { lat: a, lng: s };
              e.geocoderCount++,
                A.geocoder.geocode({ location: n }, function (e, n) {
                  'OK' === n
                    ? (void 0,
                      (A.myLocationAddress = e[0].formatted_address),
                      (A.router.waypoints[t].address = e[0].formatted_address),
                      (A.router.waypoints[t].place_id = 0),
                      (A.router.waypoints[t].display = 'My Location'),
                      (A.router.waypoints[t].selected = 'My Location'),
                      (A.router.waypoints[t].coords = [a, s]),
                      A.ga(
                        'send',
                        'event',
                        'routing',
                        'set_my_location',
                        'Set waypoint to my current location',
                        t
                      ),
                      A.mapControl.updateMyPin(),
                      o && o())
                    : (void 0, o && o());
                });
            } else
              A.toast(
                'Please enable browser geolocation settings to use location services'
              );
          }),
          (A.hoverMarkerOn = function (e) {
            A.router.waypoints[e].location && A.router.waypoints[e].location.id
              ? A.mapControl.hoverMarkerOn(
                  A.router.waypoints[e].location.id,
                  'marker'
                )
              : void 0 != A.router.waypoints[e].place_id &&
                A.mapControl.hoverMarkerOn(
                  A.router.waypoints[e].place_id,
                  'search'
                );
          }),
          (A.hoverMarkerOff = function () {
            A.mapControl.hoverMarkerOff();
          }),
          (A.generateRouteLink = function () {
            for (
              var e = 'https://www.google.com/maps/dir/',
                t = A.router.waypoints.slice(0),
                o = 0;
              o < t.length;
              o++
            ) {
              var a = '';
              t[o].coords
                ? (a = t[o].coords[0] + ',' + t[o].coords[1])
                : t[o].address
                ? (a = t[o].address)
                : t[o].display && (a = t[o].display),
                a && (e += encodeURIComponent(a) + '/');
            }
            (e += '&dirflg=d'), void 0, (A.routeLink = e);
          }),
          (A.checkPane = function (e) {
            A.location && A.location.id
              ? A.showPane()
              : A.mapControl.mapClick(e);
          }),
          (A.showPath = function (e) {
            c
              .show({
                controller: function () {
                  return (
                    A.ga('send', 'pageview', 'elevation'), A.mobileMargin(), A
                  );
                },
                controllerAs: 'maps',
                templateUrl: 'app/main/templates/elevation.tmpl.html',
                parent: A.body,
                targetEvent: e,
                clickOutsideToClose: !0,
                escapeToClose: !0,
              })
              .then(
                function (e) {
                  void 0, A.mobilePlannerMargin();
                },
                function () {
                  void 0, A.mobilePlannerMargin();
                }
              ),
              s(function () {
                'undefined' != typeof d3
                  ? A.getElevation()
                  : A.loadJS(
                      'https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.js',
                      A.getElevation
                    );
              }, 0);
          }),
          (A.loadJS = function (e, t) {
            var o = document.createElement('script');
            (o.src = e),
              (o.onload = t),
              (o.onreadystatechange = t),
              document.body.appendChild(o);
          }),
          (A.getElevation = function () {
            if (e.directions) {
              var t = [],
                o = e.directions.routes[0].overview_path;
              if (o.length > 0)
                for (var a = 0; a < o.length; a++)
                  t.push({ lat: o[a].lat(), lng: o[a].lng() });
              void 0, A.mapControl.getPathElevation(t);
            }
          }),
          (A.drawElevation = function (t) {
            void 0;
            var o = { top: 50, right: 50, bottom: 70, left: 70 },
              a = A.router.totalDistance;
            (a /= A.metric ? 1e3 : 1609.34), void 0;
            for (var s = 2, n = 2, i = 0; i < t.length; i++)
              (t[i].index = i),
                A.metric ||
                  (t[i].elevation = Math.round(3.28084 * t[i].elevation));
            var l = angular.element('#elevation'),
              r = l.innerWidth() - 80,
              c = l.innerHeight() - 150,
              d = d3
                .select('#chart')
                .append('svg')
                .attr('width', r)
                .attr('height', c)
                .append('g')
                .attr('transform', 'translate(' + o.left + ',' + o.top + ')');
            (r = r - o.left - o.right), (c = c - o.top - o.bottom);
            var p = x(
                d3.max(t, function (e) {
                  return e.elevation;
                })
              ),
              u = x(
                d3.min(t, function (e) {
                  return e.elevation;
                })
              ),
              m = p - u;
            (p += m / 10),
              (u -= m / 10),
              u > 0 && (u = 0),
              p >= 100 && (s = 0),
              a >= 100 && (n = 0);
            var g = d3.scaleLinear().rangeRound([0, r]).domain([0, t.length]),
              h = d3.scaleLinear().rangeRound([c, 0]).domain([u, p]),
              v = d3.scaleLinear().rangeRound([0, r]).domain([0, a]),
              f = d3.axisLeft(h).tickSize(-r).tickFormat('');
            d.append('g').attr('class', 'grid y-left').call(f);
            var w = d.append('g').attr('class', 'axis-container');
            w.append('g').attr('class', 'y axis y-left').call(d3.axisLeft(h)),
              w
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 0 - o.left)
                .attr('x', 0 - c / 2)
                .attr('dy', '1em')
                .attr('class', 'y-axis-text')
                .style('text-anchor', 'middle')
                .text('Elevation (' + (A.metric ? 'm' : 'ft') + ')');
            var y = d3.axisBottom(v);
            w
              .append('g')
              .attr('class', 'x axis')
              .attr('transform', 'translate(0,' + c + ')')
              .call(y),
              w
                .append('text')
                .attr('class', 'x-axis-text')
                .attr(
                  'transform',
                  'translate(' + r / 2 + ' ,' + (c + o.top) + ')'
                )
                .style('text-anchor', 'middle')
                .text('Distance (' + (A.metric ? 'km' : 'mi') + ')');
            var b = d3
                .line()
                .x(function (e) {
                  return g(e.index);
                })
                .y(function (e) {
                  return h(e.elevation);
                })
                .curve(d3.curveBasis),
              k = d3
                .area()
                .x(function (e) {
                  return g(e.index);
                })
                .y0(c)
                .y1(function (e) {
                  return h(e.elevation);
                })
                .curve(d3.curveBasis),
              _ = d.append('g').attr('class', 'data-plot'),
              C = _.append('path')
                .datum(t)
                .attr('class', 'line')
                .attr('fill', 'none')
                .attr('stroke-linejoin', 'round')
                .attr('stroke-linecap', 'round')
                .attr('d', b),
              P = C.node().getTotalLength();
            C.attr('stroke-dasharray', P + ' ' + P).attr(
              'stroke-dashoffset',
              P
            );
            var S = _.append('path')
                .datum(t)
                .attr('class', 'area')
                .style('fill-opacity', 0)
                .attr('d', k),
              T = C.node().getTotalLength();
            S.attr('stroke-dasharray', T + ' ' + T).attr(
              'stroke-dashoffset',
              T
            ),
              C.transition().duration(2e3).attr('stroke-dashoffset', 0),
              S.transition()
                .duration(2e3)
                .style('fill-opacity', 0.2)
                .transition()
                .duration(2e3)
                .attr('stroke-dashoffset', 0);
            var L = d.append('g').attr('class', 'mouse-over-effects');
            L.append('path')
              .attr('class', 'mouse-line')
              .style('stroke', '#2471d0')
              .style('stroke-width', '1px')
              .style('opacity', '1');
            var M = angular.element('.line'),
              I = [{ name: 'elevation', values: t }],
              E = L.selectAll('.mouse-per-line')
                .data(I)
                .enter()
                .append('g')
                .attr('class', 'mouse-per-line');
            E.append('circle')
              .attr('r', 7)
              .style('stroke', 'white')
              .style('fill', '#2471d0')
              .style('stroke-width', '2px')
              .style('opacity', '0');
            var R = d3.select('#chart').append('div').attr('class', 'tooltip');
            if (
              (L.append('svg:rect')
                .attr('width', r)
                .attr('height', c)
                .attr('fill', 'none')
                .attr('pointer-events', 'all')
                .on('mouseout', function () {
                  d3.select('.mouse-line').style('opacity', '0'),
                    d3
                      .selectAll('.mouse-per-line circle')
                      .style('opacity', '0'),
                    d3.selectAll('.mouse-per-line text').style('opacity', '0'),
                    R.style('opacity', '0');
                })
                .on('mouseover', function () {
                  d3.select('.mouse-line').style('opacity', '1'),
                    d3
                      .selectAll('.mouse-per-line circle')
                      .style('opacity', '1'),
                    d3.selectAll('.mouse-per-line text').style('opacity', '1'),
                    R.style('opacity', '1');
                })
                .on('mousemove', function () {
                  var e = d3.mouse(this);
                  d3.select('.mouse-line').attr('d', function () {
                    var t = 'M' + e[0] + ',' + c;
                    return (t += ' ' + e[0] + ',0');
                  }),
                    d3
                      .selectAll('.mouse-per-line')
                      .attr('transform', function (t, o) {
                        for (
                          var a = 0,
                            i = M[o].getTotalLength(),
                            l = null,
                            r = null;
                          ;

                        ) {
                          if (
                            ((l = Math.floor((a + i) / 2)),
                            (r = M[o].getPointAtLength(l)),
                            (l === i || l === a) && r.x !== e[0])
                          )
                            break;
                          if (r.x > e[0]) i = l;
                          else {
                            if (!(r.x < e[0])) break;
                            a = l;
                          }
                        }
                        var c = h.invert(r.y).toFixed(s),
                          d = v.invert(r.x).toFixed(n);
                        return (
                          R.html(
                            "<div class='tooltip-data'>Elevation: " +
                              c +
                              ' ' +
                              (A.metric ? 'm' : 'ft') +
                              "</div><div class='tooltip-data'>Distance: " +
                              d +
                              ' ' +
                              (A.metric ? 'km' : 'mi') +
                              '</div>'
                          )
                            .style('left', e[0] + 8 + 'px')
                            .style('top', r.y - 16 + 'px'),
                          'translate(' + e[0] + ',' + r.y + ')'
                        );
                      });
                }),
              e.directions)
            ) {
              var $ = e.directions.routes[0].legs;
              void 0;
              for (var F = 0, z = 0; z < $.length + 1; z++) {
                var V = d3
                  .select('#chart')
                  .append('div')
                  .attr('class', 'marker');
                V.html(
                  '<div><div class="hover">' +
                    A.router.waypoints[z].display +
                    '</div><div class="sprite marker"><div class="icon-' +
                    (A.router.waypoints[z].location
                      ? A.router.waypoints[z].location.icon_type
                      : 'M') +
                    '"></div></div><div class="order">' +
                    (z + 1) +
                    '</div></div>'
                )
                  .style('left', o.left - 3 + (F / a) * (r - 3) + 'px')
                  .style('top', '-7px'),
                  $[z] &&
                    (F += $[z].distance.value / (A.metric ? 1e3 : 1609.34));
              }
            }
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.SearchController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        function k(t) {
          if (
            (void 0,
            t != x.selected_answer && (x.search_query = t),
            (!x.selected_answer && !x.cancelSearches) || x.forceResearch)
          ) {
            void 0;
            var o = i.defer();
            if (
              ((x.forceResearch = !1),
              (x.last_query = t),
              (x.search_results = []),
              x.searchHistoryClick)
            )
              x.searchHistoryClick = !1;
            else if (x.searchHistory.length) {
              for (
                var a = angular.lowercase(t), n = 0, l = 0;
                l < x.searchHistory.length;
                l++
              ) {
                var r = x.searchHistory[l];
                3 > n &&
                  'search' == r.type &&
                  -1 != r.value.indexOf(a) &&
                  r.value != a &&
                  (x.search_results.push(r), n++);
              }
              x.search_results.length && (x.show_results = !0);
            }
            if (t.length >= 3) {
              e.autocompletesCount++,
                x.autocompleteService.getPlacePredictions({ input: t }, A),
                (x.searchCallback = !0);
              var c = x.mapControl.getPosition();
              return (
                void 0,
                f.search(t, c).then(function (e) {
                  if (!x.searchCallback || !x.searchText)
                    return void 0, Promise.resolve(!1);
                  x.ga('send', 'event', 'map', 'search', t, 1);
                  for (var a = 0; a < e.length; a++) {
                    var n = {
                      value: angular.lowercase(name),
                      display: e[a].display_name,
                      address: e[a].address,
                      type: 'charger',
                      location: e[a],
                      location_id: e[a].id,
                      icon_type: e[a].icon_type,
                    };
                    x.search_results.push(n);
                  }
                  (x.show_results = !0),
                    x.checkSearch(),
                    o.resolve(x.search_results),
                    s(function () {
                      x.searchText && (x.show_results = !0);
                    }, 0),
                    x.checkSearch(),
                    o.resolve(x.search_results);
                }),
                o.promise
              );
            }
            return void 0, Promise.resolve(!1);
          }
          return (
            void 0,
            t == x.last_query && (x.show_results = !0),
            Promise.resolve(!1)
          );
        }
        function C(t) {
          void 0,
            (x.search_query = t),
            (x.forceResearch = !1),
            (x.last_query = t),
            (x.cancelSearches = !0),
            s(function () {
              (x.cancelSearches = !1), void 0;
            }, 1e3),
            void 0,
            (x.searchQueue = !1),
            e.autocompletesCount++,
            x.autocompleteService.getPlacePredictions({ input: t }, T);
        }
        function P(e) {
          void 0,
            e
              ? x.search_place_id || (x.search_focused = !0)
              : (x.searchHistory.length && x.search_focused
                  ? x.showRecentSearchHistory()
                  : (x.search_focused = !1),
                (x.location = null),
                x.mapControl.closeInfoWindows());
        }
        function S(t, o) {
          if (t)
            if (
              (t.history &&
                (x.ga(
                  'send',
                  'event',
                  'search',
                  'select_search_history',
                  t.display,
                  t.count
                ),
                'search' == t.type
                  ? (x.search_query = t.value)
                  : (x.search_query = '')),
              'search' == t.type)
            ) {
              (x.searchText = t.display), (x.searchHistoryClick = !0);
              var a = _.findKey(x.searchHistory, { display: t.display });
              void 0 != a &&
                ((x.searchHistory[a].timestamp = Date.now()),
                (x.searchHistory[a].count = x.searchHistory[a].count + 1),
                x.storeSearchHistory());
            } else {
              if (
                (x.checkSearch(t.display), !o && (t.location_id || t.place_id))
              ) {
                var a = _.findKey(x.searchHistory, { display: t.display });
                void 0 != a
                  ? ((x.searchHistory[a].timestamp = Date.now()),
                    (x.searchHistory[a].count = x.searchHistory[a].count + 1),
                    x.storeSearchHistory())
                  : ((t.history = !0),
                    (t.timestamp = Date.now()),
                    (t.count = 1),
                    x.searchHistory.unshift(t),
                    x.storeSearchHistory()),
                  void 0;
              }
              if (
                ((x.searchText = t.display),
                (x.selected_answer = t.display),
                (x.last_query = t.display),
                (x.searchCallback = !1),
                void 0,
                (x.search_results = []),
                (x.show_results = !1),
                void 0,
                x.searchBlur(),
                t.location)
              ) {
                if (
                  (x.ga(
                    'send',
                    'event',
                    'search',
                    'select_location',
                    'Selected location in search',
                    t.location.id
                  ),
                  void 0,
                  (x.search_place_id = !1),
                  x.mapControl.refreshMarker(t.location),
                  x.search_query)
                ) {
                  var s = {
                    search_string: x.search_query,
                    action: 'select-location',
                    location_id: t.location.id,
                    vehicle_id: x.getVehicle().model_id,
                  };
                  f.logSearch(s);
                }
              } else
                t.place_id &&
                  (x.ga(
                    'send',
                    'event',
                    'search',
                    'select_coordinate',
                    'Selected coordinate in search',
                    0
                  ),
                  void 0,
                  (x.search_place_id = !0),
                  (x.location = null),
                  (x.menu.menu = !1),
                  x.mapControl.closeInfoWindows(),
                  e.geocoderCount++,
                  x.geocoder.geocode({ placeId: t.place_id }, function (e, o) {
                    if ('OK' === o)
                      if (e[0]) {
                        void 0;
                        var a = {
                          swLat: e[0].geometry.viewport.getSouthWest().lat(),
                          swLng: e[0].geometry.viewport.getSouthWest().lng(),
                          neLat: e[0].geometry.viewport.getNorthEast().lat(),
                          neLng: e[0].geometry.viewport.getNorthEast().lng(),
                        };
                        void 0;
                        var s = {
                          place_id: t.place_id,
                          display: t.display,
                          address: e[0].formatted_address,
                          coords: [
                            e[0].geometry.location.lat(),
                            e[0].geometry.location.lng(),
                          ],
                        };
                        x.mapControl.goToSearch(s, a),
                          x.logPlacesSearch(
                            t.place_id,
                            s.address,
                            s.coords,
                            Math.abs(a.swLat - a.neLat),
                            Math.abs(a.swLng - a.neLng)
                          );
                      } else void 0, x.logPlacesSearch(t.place_id);
                    else void 0, x.logPlacesSearch(t.place_id);
                  }));
            }
        }
        o(this, a), void 0;
        var x = t.$parent.maps;
        (x.querySearch = k),
          (x.selectedItemChange = S),
          (x.searchTextChange = P),
          (x.search_query = ''),
          (x.last_cancel_query = ''),
          (x.last_query = ''),
          (x.search_results = []),
          (x.search_focused = !1),
          (x.selected_answer = !1),
          (x.show_results = !1),
          (x.searchQueue = !1),
          (x.forceResearch = !1),
          (x.searchCallback = !0),
          x.supportsLocalStorage &&
            localStorage.searchHistory &&
            localStorage.searchHistory.length &&
            ((x.searchHistory = JSON.parse(localStorage.searchHistory)),
            void 0,
            void 0),
          x.searchHistory || (x.searchHistory = []),
          (x.autocompleteService =
            new google.maps.places.AutocompleteService()),
          (x.geocoder = new google.maps.Geocoder());
        var A = function (e, t) {
            if (
              (void 0,
              void 0,
              t != google.maps.places.PlacesServiceStatus.OK ||
                !x.searchCallback ||
                !x.searchText)
            )
              return void void 0;
            var o = 3;
            e.forEach(function (e) {
              if (o) {
                o--;
                var t = e.place_id ? e.place_id : '',
                  a = {
                    value: angular.lowercase(e.description),
                    display: e.structured_formatting.main_text,
                    address: e.structured_formatting.secondary_text,
                    type: 'gmaps',
                    place_id: t,
                    icon_type: 'M',
                  };
                x.search_results.push(a);
              }
            }),
              s(function () {
                x.show_results = !0;
              }, 0),
              void 0,
              x.update();
          },
          T = function (e, t) {
            if (
              (f.activeRequests &&
                f.activeRequests.search &&
                f.activeRequests.search.resolve(),
              (x.search_results = []),
              t != google.maps.places.PlacesServiceStatus.OK)
            )
              return (
                void 0,
                void s(function () {
                  x.urlSearch
                    ? (x.toast('No results found for this address'),
                      (x.urlSearch = !1))
                    : ((x.show_results = !0), x.update());
                }, 0)
              );
            x.urlSearch = !1;
            var o = e[0],
              a = o.place_id ? o.place_id : '',
              n = {
                value: angular.lowercase(o.description),
                display: o.structured_formatting.main_text,
                address: o.structured_formatting.secondary_text,
                type: 'gmaps',
                place_id: a,
                icon_type: 'M',
              };
            x.search_results.push(n);
            var i = angular.lowercase(x.searchText),
              l = _.findKey(x.searchHistory, { display: i });
            if (void 0 != l)
              (x.searchHistory[l].timestamp = Date.now()),
                (x.searchHistory[l].count = x.searchHistory[l].count + 1),
                x.storeSearchHistory();
            else {
              var r = {
                value: i,
                display: x.searchText,
                type: 'search',
                history: !0,
                timestamp: Date.now(),
                count: 1,
              };
              x.searchHistory.unshift(r), x.storeSearchHistory();
            }
            void 0, void 0, x.selectedItemChange(n, !0);
          };
        x.logPlacesSearch = function (e, t, o, a, s) {
          if (x.search_query) {
            var n = {
              search_string: x.search_query,
              action: 'select-map',
              vehicle_id: x.getVehicle().model_id,
              place_id: e,
              selected_geocoded_address: t,
              selected_geocoded_latitude_span: a,
              selected_geocoded_longitude_span: s,
            };
            o &&
              (n.selected_geocoded_coordinate = {
                type: 'Point',
                coordinates: [o[1], o[0]],
              }),
              f.logSearch(n);
          }
        };
        var L = angular.element(h[0].querySelector('#search-autocomplete'));
        L.on('keypress', 'input', function (e) {
          var t = angular
            .element(h[0].querySelector('#search-autocomplete input'))
            .val();
          13 == e.keyCode &&
            (x.selected_answer
              ? (void 0, (x.forceResearch = !0), k(t))
              : (void 0,
                (x.searchQueue = !0),
                C(t),
                (x.search_results = []),
                x.ga('send', 'event', 'map', 'quicksearch', t, 1, {})));
        }),
          x.body.on('focus', '#search-autocomplete input', function () {
            (x.search_focused = !0), x.showRecentSearchHistory();
          }),
          x.body.on('blur', '#search-autocomplete input', function () {
            if (
              ((x.search_focused = !1),
              (x.searchQueue = !1),
              !x.selected_answer &&
                x.search_query &&
                x.search_query.length >= 3 &&
                x.last_cancel_query != x.search_query)
            ) {
              var e = {
                search_string: x.search_query,
                action: 'cancel',
                vehicle_id: x.getVehicle().model_id,
              };
              f.logSearch(e), (x.last_cancel_query = x.search_query);
            }
          }),
          x.body.on(
            'mousedown',
            '#primary-search .search-result',
            function (e) {
              e.preventDefault();
            }
          ),
          (x.searchBlur = function () {
            angular
              .element(h[0].querySelector('#search-autocomplete'))[0]
              .querySelector('input')
              .blur(),
              (x.search_focused = !1),
              x.update();
          }),
          x.body.on('click', '#search-autocomplete button', function () {
            void 0,
              x.mobile && (void 0, x.searchBlur(), (x.search_focused = !1)),
              (x.last_query = ''),
              (x.location = null);
          }),
          s(function () {
            x.body.on('click', '#map', function (e) {
              void 0, void 0, x.searchBlur();
            });
          }, 3e3),
          t.$watch(
            function () {
              return x.searchText;
            },
            function (e, t) {
              void 0, x.checkSearch(e);
            }
          ),
          (x.checkSearch = function (e) {
            e || (e = x.searchText),
              void 0,
              e != x.last_query &&
                (e
                  ? (x.show_results = !1)
                  : (void 0,
                    (x.search_results = []),
                    x.showRecentSearchHistory())),
              e != x.selected_answer && (x.selected_answer = !1);
          }),
          x.body.on('mousedown', '#map', function () {
            g.innerWidth < 420 &&
              x.menu.menu &&
              ((x.menu.menu = !1), x.update());
          }),
          (x.clearResults = function () {
            x.search_results = [];
          }),
          (x.showRecentSearchHistory = function () {
            if (
              x.searchHistory.length &&
              x.search_focused &&
              !e.embed &&
              !x.searchText
            ) {
              (x.show_results = !0),
                (x.search_results = angular.copy(x.searchHistory)),
                x.search_results.sort(function (e, t) {
                  return t.timestamp - e.timestamp;
                });
              var t = x.mobile ? 3 : 7;
              x.search_results.length > t &&
                (x.search_results = x.search_results.splice(0, t));
            }
          }),
          (x.storeSearchHistory = function () {
            x.supportsLocalStorage &&
              !e.embed &&
              (x.searchHistory.length > 100 &&
                (x.searchHistory = x.searchHistory.splice(0, 100)),
              (localStorage.searchHistory = JSON.stringify(x.searchHistory)));
          }),
          (x.clearSearchHistory = function () {
            if (
              confirm('Are you sure you want to clear your search history?')
            ) {
              void 0,
                x.ga(
                  'send',
                  'event',
                  'search',
                  'clear_history',
                  'Cleared Search History',
                  x.searchHistory.length
                ),
                localStorage.removeItem('searchHistory'),
                (x.searchHistory = []),
                x.toast('Cleared Search History'),
                x.searchBlur(),
                (x.search_focused = !1);
              for (var e = [], t = 0; t < x.search_results.length; t++)
                x.search_results[t].history || e.push(x.search_results[t]);
              x.search_results = e;
            }
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.SessionsController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.isSessionCommunicating = function (e) {
          return ['AUTHORIZING', 'CONNECTED'].includes(
            e ? e : k.session.details.status
          );
        }),
          (k.isSessionActive = function (e) {
            return [
              'AUTHORIZING',
              'CONNECTED',
              'CHARGING',
              'STOPPING',
              'UNKNOWN',
            ].includes(e ? e : k.session.details.status);
          }),
          (k.isSessionProcessing = function (e) {
            return ['AUTHORIZING', 'CONNECTED', 'STOPPING'].includes(
              e ? e : k.session.details.status
            );
          }),
          (k.isSessionError = function (e) {
            return ['FAULT', 'TIMEOUT', 'STOPPING'].includes(
              e ? e : k.session.details.status
            );
          }),
          (k.isSessionComplete = function (e) {
            return 'SESSION_COMPLETE' == (e ? e : k.session.details.status);
          }),
          (k.isSessionCharging = function (e) {
            return 'CHARGING' == (e ? e : k.session.details.status);
          }),
          (k.isSessionStopping = function (e) {
            return 'STOPPING' == (e ? e : k.session.details.status);
          }),
          (k.isSessionUnknown = function (e) {
            return 'UNKNOWN' == (e ? e : k.session.details.status);
          }),
          (k.showKey = function (e, t) {
            return t && t.length
              ? t.includes(e)
                ? !1
                : !0
              : null === k.session.details[e]
              ? !1
              : !0;
          }),
          (k.getSessionDataCount = function (e) {
            var t = 1;
            return (
              k.showKey('soc', e) && t++,
              k.showKey('watts', e) && t++,
              k.showKey('watt_hours', e) && t++,
              t
            );
          }),
          (k.showWave = !(k.iosMobile || 'Safari' == k.browser)),
          (k.session = {}),
          (k.sessionReset = function (e) {
            e || k.cancel('sessionReset'),
              (k.session = {
                error: '',
                loading: !1,
                processing: !1,
                details: {},
                id: null,
                interval: null,
                poll: null,
                stopRequest: !1,
                dataCount: 0,
              });
          }),
          k.sessionReset(!0),
          (k.showSession = function (e, t) {
            k.sessionReset(),
              (k.session.id = t
                ? t
                : parseInt(p.get('v2_active_charge_session_id'))),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'session'),
                      k.ga(
                        'send',
                        'event',
                        'session',
                        'pwps_session_status_view',
                        'Viewed pwps_session_id: ' + t,
                        1
                      ),
                      k.mobileMargin(),
                      k.sessionUpdate(),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/session.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !0,
                  escapeToClose: !0,
                })
                .then(
                  function (e) {
                    void 0,
                      k.mobilePlannerMargin(),
                      n.cancel(k.session.interval),
                      s.cancel(k.session.poll),
                      f.activeRequests.session.resolve();
                  },
                  function () {
                    void 0,
                      k.mobilePlannerMargin(),
                      n.cancel(k.session.interval),
                      s.cancel(k.session.poll),
                      f.activeRequests.session.resolve();
                  }
                );
          }),
          (k.sessionUpdate = function (e) {
            void 0,
              e || (k.session.loading = !0),
              f.getSession(k.session.id).then(function (t) {
                void 0,
                  t.success
                    ? ((k.session.error = ''),
                      (k.session.details = t.data.data),
                      k.isSessionActive() &&
                        ((k.activeChargeSessionId = t.data.data.id),
                        p.put(
                          'v2_active_charge_session_id',
                          k.activeChargeSessionId
                        )),
                      (k.session.dataCount = k.getSessionDataCount(
                        k.session.details.useless_keys
                      )),
                      k.getSessionTime(),
                      k.session.id !=
                        parseInt(p.get('v2_active_charge_session_id')) ||
                        k.isSessionActive() ||
                        (p.remove('v2_active_charge_session_id'),
                        (k.activeChargeSessionId = null)),
                      e && f.getSessions(),
                      k.session.stopRequest &&
                        'CHARGING' == k.session.status &&
                        ((k.session.error = u('translate')(
                          'Unable to stop the session'
                        )),
                        (k.session.stopRequest = !1),
                        k.update()),
                      k.session.stopRequest &&
                        ['FAULT', 'TIMEOUT', 'SESSION_COMPLETE'].includes(
                          k.session.details.status
                        ) &&
                        ((k.session.stopRequest = !1), k.update()))
                    : t.error &&
                      (t.error.errors && t.error.errors['public']
                        ? (k.session.error = t.error.errors['public'])
                        : (k.session.error = t.error)),
                  k.session.details.should_poll &&
                    (k.session.poll = s(
                      function () {
                        k.sessionUpdate(!0);
                      },
                      k.isSessionCharging() || k.isSessionUnknown() ? 1e4 : 2e3
                    )),
                  (k.session.loading = !1);
              });
          }),
          (k.timeSince = function (e) {
            var t = new Date(e),
              o = new Date(),
              a = o.getTime() - t.getTime();
            return Math.floor(a / 1e3);
          }),
          (k.getSessionTime = function () {
            if (
              (void 0,
              k.session.details.started_at || k.session.details.created_at)
            ) {
              var e = k.session.details.started_at
                ? k.session.details.started_at
                : k.session.details.created_at;
              if (k.isSessionCharging() || k.isSessionStopping())
                (k.session.details.time_elapsed = k.timeSince(e)),
                  k.session.interval ||
                    (k.session.interval = n(function () {
                      k.session.details.time_elapsed = k.timeSince(e);
                    }, 1e3));
              else if (k.session.details.ended_at) {
                var t = new Date(e),
                  o = new Date(k.session.details.ended_at),
                  a = o.getTime() - t.getTime();
                k.session.details.time_elapsed = Math.floor(a / 1e3);
              }
            }
          }),
          (k.stopCharge = function (e) {
            confirm(u('translate')('Are you sure you want to stop charging')) &&
              ((k.session.processing = !0),
              f.stopCharge(e).then(function (e) {
                e.success
                  ? (void 0, (k.session.stopRequest = !0))
                  : e.error &&
                    (void 0, (k.session.error = e.error.errors['public'])),
                  (k.session.processing = !1);
              }));
          }),
          (k.latestChargeSessions = function () {
            return f.chargeSessions ? f.chargeSessions : [];
          }),
          (k.moreChargeSessions = function () {
            return f.moreChargeSessions;
          }),
          (k.getChargeSessions = function (e) {
            if ((void 0, k.authenticated())) {
              var t = k.latestChargeSessions().length;
              f.getSessions(e).then(function (o) {
                return (
                  void 0,
                  o && o.data && o.data.data && o.data.data.length && void 0,
                  e &&
                    t == k.latestChargeSessions().length &&
                    k.toast('No more charge sessions'),
                  !e &&
                    o.length &&
                    k.isSessionActive(o.data.data[0].status) &&
                    (p.put(
                      'v2_active_charge_session_id',
                      k.activeChargeSessionId
                    ),
                    (k.activeChargeSessionId = o.data.data[0].id)),
                  e ||
                    0 != o.data.data.length ||
                    (p.remove('v2_active_charge_session_id'),
                    (k.activeChargeSessionId = null)),
                  o
                );
              });
            }
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.PWPSController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        function k(e) {
          void 0,
            e.error
              ? ((C.pwps.processing = !1),
                e.error.message && (C.pwps.error = e.error.message),
                C.update())
              : C.attemptPayment(e, !0);
        }
        o(this, a), void 0;
        var C = t.$parent.maps,
          P =
            'undefined' != typeof environment && environment.stripeKey
              ? environment.stripeKey
              : '';
        !P && C.testing && (P = 'pk_test_alwi0Nfro8hnlPHIXngq8Sc7'), void 0;
        var S = Stripe(P),
          x = S.elements();
        (C.isOutletAvailable = function (e) {
          return 0 === e || 1 === e || 5 === e;
        }),
          (C.activeCardIndex = null),
          (C.paymentSources = []),
          (C.pwps = {}),
          (C.pwpsReset = function (e) {
            e || C.cancel('pwpsReset'),
              C.pwps.cardElement && C.pwps.cardElement.destroy(),
              (C.pwps = {
                error: '',
                success: '',
                loading: !1,
                processing: !1,
                jit: [],
                drawerVisible: !1,
                clientSecret: null,
                state: 'pay',
                activationData: {},
                cardElement: null,
                keyboard: !1,
              });
          }),
          C.pwpsReset(!0),
          (C.getPaymentSources = function () {
            C.paymentSources.length ||
              f.getSources().then(function (e) {
                void 0, void 0, (C.paymentSources = f.paymentSources);
                var t = p.get('v2_active_payment_source');
                if (void 0 != t)
                  if ('stripe_pay' == t) C.activeCardIndex = 99;
                  else {
                    t = parseInt(t);
                    var o = _.findKey(C.paymentSources, { id: t });
                    void 0 != o && (C.activeCardIndex = o);
                  }
                void 0;
              });
          }),
          (C.getJitStations = function () {
            (C.pwps.loading = !0),
              C.ga(
                'send',
                'event',
                'pwps',
                'jit show stations',
                'pwps location: ' + C.location.id,
                1
              ),
              f.getJit(C.location.id).then(function (e) {
                void 0,
                  e.success
                    ? ((C.pwps.jit = e.data),
                      0 == C.pwps.jit.length &&
                        ((C.pwps.error =
                          'No stations could be fetched. Please try again'),
                        (C.pwps.success = '')))
                    : e.error &&
                      ((C.pwps.error = e.error.errors['public']),
                      (C.pwps.success = '')),
                  (C.pwps.loading = !1);
              });
          }),
          (C.showPWPS = function (e) {
            P
              ? (!C.activeChargeSessionId ||
                  (C.activeChargeSessionId &&
                    confirm(
                      u('translate')('A charging session is already active')
                    ))) &&
                (C.pwpsReset(),
                C.getJitStations(),
                c
                  .show({
                    controller: function () {
                      return (
                        C.ga('send', 'pageview', 'pwps'),
                        (C.resizeModalContentFrame = !0),
                        C.mobileMargin(),
                        C.getPaymentSources(),
                        C.user_role &&
                          C.toast('Role: ' + C.user_role.replace('_', ' ')),
                        C
                      );
                    },
                    controllerAs: 'maps',
                    templateUrl: 'app/main/templates/pwps.tmpl.html',
                    parent: C.body,
                    targetEvent: e,
                    clickOutsideToClose: !1,
                    escapeToClose: !1,
                  })
                  .then(
                    function (e) {
                      void 0,
                        C.mobilePlannerMargin(),
                        (C.resizeModalContentFrame = !1);
                    },
                    function () {
                      void 0,
                        C.mobilePlannerMargin(),
                        (C.resizeModalContentFrame = !1);
                    }
                  ))
              : C.openLink('https://pay.plugshare.com/?source=web', 'pwps');
          }),
          (C.activateStation = function (e, t) {
            if (t.activation_data) {
              C.ga(
                'send',
                'event',
                'pwps',
                'activate station',
                'station id: ' + e.id,
                1
              ),
                (C.pwps.activationData = t.activation_data),
                (C.pwps.activationData.location_id = e.location_id),
                (C.pwps.activationData.station_id = e.id),
                (C.pwps.activationData.outlet_id = t.id),
                (C.pwps.activationData.outlet_name = t.description),
                (C.pwps.activationData.connector = t.connector),
                (C.pwps.activationData.cost_description =
                  t.payment_data.cost_description),
                (C.pwps.activationData.terms_and_conditions_url =
                  t.payment_data.terms_and_conditions_url),
                (C.pwps.activationData.service_description =
                  t.payment_data.service_description),
                (C.pwps.activationData.country =
                  t.payment_data.stripe_connect_country_code),
                (C.pwps.activationData.currency = t.payment_data.currency
                  ? t.payment_data.currency.toLowerCase()
                  : null);
              for (var o = 0; o < t.payment_data.line_items.length; o++)
                if ('Hold amount' == t.payment_data.line_items[o].title) {
                  C.pwps.activationData.preauth =
                    t.payment_data.line_items[o].value;
                  break;
                }
              C.setupPaymentRequestButton(),
                void 0,
                void 0,
                C.showPaymentSources();
            } else
              C.ga(
                'send',
                'event',
                'pwps',
                'activate station fail',
                'station id: ' + e.id,
                0
              ),
                void 0;
          }),
          (C.overlayCancel = function () {
            C.pwps.processing
              ? void 0
              : ((C.pwps.drawerVisible = !1),
                (C.pwps.success = ''),
                (C.pwps.error = ''));
          }),
          (C.showPaymentSources = function () {
            (C.pwps.drawerVisible = !0),
              C.resizePaymentHeight(),
              C.paymentSources && null !== C.activeCardIndex
                ? ((C.pwps.state = 'pay'),
                  (C.pwps.success = ''),
                  (C.pwps.error = ''))
                : ((C.pwps.state = 'change'),
                  (C.pwps.success = ''),
                  (C.pwps.error = ''));
          }),
          (C.changePaymentMethod = function () {
            C.ga(
              'send',
              'event',
              'pwps',
              'change payment method',
              'changePaymentMethod',
              1
            ),
              (C.pwps.state = 'change'),
              (C.pwps.success = ''),
              (C.pwps.error = '');
          }),
          (C.backToPayment = function () {
            null === C.activeCardIndex
              ? ((C.pwps.success = ''),
                (C.pwps.error = u('translate')(
                  'Please select a payment method'
                )))
              : ((C.pwps.state = 'pay'),
                (C.pwps.success = ''),
                (C.pwps.error = ''));
          }),
          (C.selectPaymentSource = function (e) {
            (C.pwps.success = ''),
              (C.pwps.error = ''),
              99 == e
                ? (p.put('v2_active_payment_source', 'stripe_pay'),
                  (C.activeCardIndex = e))
                : C.paymentSources[e].is_expired
                ? (C.pwps.error = u('translate')('This card has expired'))
                : (p.put('v2_active_payment_source', C.paymentSources[e].id),
                  (C.activeCardIndex = e));
          }),
          (C.addPaymentMethod = function (e) {
            e
              ? (C.ga(
                  'send',
                  'event',
                  'pwps',
                  'direct payment method',
                  'directPayment',
                  1
                ),
                (C.pwps.state = 'direct'))
              : (C.ga(
                  'send',
                  'event',
                  'pwps',
                  'add payment method',
                  'addPaymentMethod',
                  1
                ),
                (C.pwps.state = 'new')),
              (C.pwps.success = ''),
              (C.pwps.error = ''),
              C.pwps.cardElement && C.pwps.cardElement.clear(),
              f.createSetupIntent().then(function (e) {
                void 0,
                  void 0,
                  e.success
                    ? ((C.pwps.clientSecret =
                        e.data.data.setup_intent_client_secret),
                      (C.pwps.sourceId = e.data.data.id),
                      void 0 == C.pwps.cardElement
                        ? ((C.pwps.cardElement = x.create('card')),
                          C.pwps.cardElement.mount('#card-element'),
                          C.pwps.cardElement.on('ready', function (e) {
                            C.pwps.cardElement.on('focus', function (e) {
                              void 0, (C.pwps.keyboard = !0);
                            }),
                              C.pwps.cardElement.on('blur', function (e) {
                                void 0, (C.pwps.keyboard = !1);
                              }),
                              C.mobile || C.pwps.cardElement.focus();
                          }))
                        : C.mobile || C.pwps.cardElement.focus())
                    : e.error &&
                      ((C.pwps.error = e.error.errors['public']),
                      (C.pwps.success = '')),
                  (C.pwps.keyboard = !1);
              });
          }),
          (C.cancelNewPaymentMethod = function () {
            (C.pwps.state = 'change'),
              (C.pwps.success = ''),
              (C.pwps.error = ''),
              (C.pwps.keyboard = !1);
          }),
          (C.saveCard = function () {
            (C.pwps.processing = !0),
              S.confirmCardSetup(C.pwps.clientSecret, {
                payment_method: {
                  card: C.pwps.cardElement,
                  billing_details: {},
                },
              }).then(function (e) {
                e.error
                  ? (void 0,
                    void 0,
                    (C.pwps.processing = !1),
                    (C.pwps.error = e.error.message),
                    (C.pwps.success = ''),
                    C.update())
                  : (void 0,
                    f
                      .saveCard(
                        C.pwps.sourceId,
                        e.setupIntent.id,
                        e.setupIntent.status
                      )
                      .then(function (e) {
                        e.success
                          ? (C.ga(
                              'send',
                              'event',
                              'pwps',
                              'save card',
                              'card successfully saved',
                              1
                            ),
                            void 0,
                            void 0,
                            void 0,
                            C.selectPaymentSource(C.paymentSources.length - 1),
                            (C.pwps.success = u('translate')(
                              'Payment method added'
                            )))
                          : e.error &&
                            (void 0,
                            (C.pwps.error = e.error.errors['public']),
                            (C.pwps.success = '')),
                          (C.pwps.state = 'pay'),
                          (C.pwps.processing = !1),
                          C.update();
                      }));
              });
          }),
          (C.deleteCard = function (e, t) {
            confirm(
              b.instant('Are you sure you want to delete', {
                card_type: e.card_type,
                last_four: e.last_four,
              })
            ) &&
              ((C.pwps.processing = !0),
              f.deleteCard(e.id).then(function (e) {
                C.ga(
                  'send',
                  'event',
                  'pwps',
                  'delete card',
                  'card successfully deleted',
                  1
                ),
                  void 0,
                  void 0,
                  void 0,
                  C.activeCardIndex == t
                    ? (C.activeCardIndex = null)
                    : C.activeCardIndex > t && C.activeCardIndex--,
                  (C.pwps.success = u('translate')('Payment method deleted')),
                  (C.pwps.error = ''),
                  (C.pwps.processing = !1);
              }));
          }),
          (C.activateSession = function (e) {
            void 0,
              f.activate(e).then(function (e) {
                e.success
                  ? (C.ga(
                      'send',
                      'event',
                      'pwps',
                      'activate session',
                      'activate session success',
                      1
                    ),
                    void 0,
                    (C.activeChargeSessionId = e.data.data.id),
                    p.put(
                      'v2_active_charge_session_id',
                      C.activeChargeSessionId
                    ),
                    c.hide(C.activeChargeSessionId),
                    (C.directUrl = !0),
                    m.go('home'),
                    (C.location = null),
                    s(function () {
                      C.showSession(null, C.activeChargeSessionId);
                    }, 1e3),
                    f.getSessions())
                  : e.error &&
                    (void 0,
                    (C.pwps.error = e.error.errors['public']),
                    (C.pwps.success = '')),
                  (C.pwps.processing = !1);
              });
          }),
          (C.setupPaymentRequestButton = function () {
            var e = S.paymentRequest({
                country: C.pwps.activationData.country,
                currency: C.pwps.activationData.currency,
                total: {
                  label: 'Pay with PlugShare',
                  amount: C.pwps.activationData.preauth,
                },
                requestPayerName: !0,
                requestPayerEmail: !0,
              }),
              t = S.elements(),
              o = t.create('paymentRequestButton', { paymentRequest: e });
            e.canMakePayment().then(function (e) {
              void 0,
                void 0,
                e &&
                  ((C.canMakePayment = !0),
                  (C.applePay = e.applePay),
                  C.update(),
                  o.mount('#payment-request-button'));
            }),
              e.on('paymentmethod', function (e) {
                C.attemptPayment(e);
              });
          }),
          (C.attemptPayment = function (e, t) {
            f.createSetupIntent(e.paymentMethod.id).then(function (o) {
              void 0,
                void 0,
                o.success
                  ? f
                      .preactivate(o.data.data.id, C.pwps.activationData)
                      .then(function (o) {
                        if (o.success) {
                          void 0, void 0;
                          var a = o.data.data.id,
                            s = null;
                          o.data.data.partner &&
                          o.data.data.partner.is_connect_account &&
                          o.data.data.partner.stripe_account_id
                            ? (void 0,
                              (s = Stripe(P, {
                                stripeAccount:
                                  o.data.data.partner.stripe_account_id,
                              })))
                            : (void 0, (s = S)),
                            s
                              .confirmCardPayment(
                                o.data.data.payment_intent_client_secret,
                                {},
                                { handleActions: !1 }
                              )
                              .then(function (o) {
                                o.error
                                  ? t
                                    ? ((C.pwps.error = o.error), C.update())
                                    : e.complete('fail')
                                  : (t || e.complete('success'),
                                    C.activateSession(a));
                              });
                        } else
                          o.error &&
                            (void 0,
                            (C.pwps.processing = !1),
                            (C.pwps.error = o.error.errors['public']),
                            (C.pwps.success = ''));
                      })
                  : o.error &&
                    ((C.pwps.error = o.error.errors['public']),
                    (C.pwps.success = ''));
            });
          }),
          (C.confirmCharge = function (e) {
            C.paymentSources[C.activeCardIndex].is_expired
              ? ((C.pwps.error =
                  'Error - Payment method expired. Please change your payment method'),
                (C.pwps.success = ''))
              : ((C.pwps.processing = !0),
                f.preactivate(e, C.pwps.activationData).then(function (e) {
                  if (e.success) {
                    C.ga(
                      'send',
                      'event',
                      'pwps',
                      'confirm charge',
                      'preactivate success',
                      1
                    ),
                      void 0;
                    var t = e.data.data.id,
                      o = null;
                    e.data.data.partner &&
                    e.data.data.partner.is_connect_account &&
                    e.data.data.partner.stripe_account_id
                      ? (void 0,
                        (o = Stripe(P, {
                          stripeAccount: e.data.data.partner.stripe_account_id,
                        })))
                      : (void 0, (o = S)),
                      o
                        .confirmCardPayment(
                          e.data.data.payment_intent_client_secret,
                          {}
                        )
                        .then(function (e) {
                          e.error
                            ? (void 0,
                              (C.pwps.processing = !1),
                              (C.pwps.error = e.error.message),
                              (C.pwps.success = ''),
                              C.update())
                            : (void 0,
                              'requires_capture' === e.paymentIntent.status
                                ? C.activateSession(t)
                                : (void 0,
                                  (C.pwps.processing = !1),
                                  (C.pwps.error =
                                    u('translate')('Error') +
                                    ' - ' +
                                    u('translate')(
                                      'Could not activate station'
                                    )),
                                  (C.pwps.success = ''),
                                  C.update()));
                        });
                  } else
                    void 0,
                      (C.pwps.processing = !1),
                      e.error
                        ? (C.pwps.error = e.error.errors['public'])
                        : (C.pwps.error = 'Error - Could not activate station'),
                      (C.pwps.success = '');
                }));
          }),
          (C.submitPayment = function () {
            C.pwps.processing ||
              ((C.pwps.processing = !0),
              C.update(),
              S.createPaymentMethod({
                type: 'card',
                card: C.pwps.cardElement,
                billing_details: {},
              }).then(k));
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.LocationController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.stationMinimum = 'At least one station is required.'),
          (k.xLocation = {}),
          (k.xLocationReset = function (e) {
            e || k.cancel('xLocationReset'),
              (k.xLocation = {
                nearby: [],
                stations: [],
                amenities: [],
                parking_attributes: [],
                access_restrictions: [],
                stationIndex: 0,
                error: '',
                processing: !1,
                stationAdded: !1,
                remove: [],
              });
          }),
          k.xLocationReset(!0),
          (k.addStation = function () {
            void 0,
              k.xLocation.error == k.stationMinimum && (k.xLocation.error = '');
            var e = {
              index: k.xLocation.stationIndex,
              network_id: 0,
              existing: !1,
            };
            k.xLocation.stations.push(e),
              k.xLocation.stationIndex++,
              (k.xLocation.stationAdded = !0);
          }),
          (k.removeStation = function (e) {
            if ((void 0, k.xLocation.stations.length > 1)) {
              var t = _.findKey(k.xLocation.stations, { index: e });
              k.xLocation.stations.splice(t, 1);
            } else k.xLocation.error = k.stationMinimum;
          }),
          (k.tryRemoveStation = function (e) {
            confirm(
              'Are you sure you want to delete this station?\nNote: Changes are not saved until you click [Update]'
            ) && k.xLocation.remove.push(e);
          }),
          (k.undoRemoveStation = function (e) {
            var t = k.xLocation.remove.indexOf(e);
            -1 != t && k.xLocation.remove.splice(t, 1);
          }),
          (k.toggleAmenity = function (e) {
            var t = k.xLocation.amenities.indexOf(e);
            t > -1
              ? k.xLocation.amenities.splice(t, 1)
              : k.xLocation.amenities.push(e);
          }),
          (k.toggleParkingAttribute = function (e) {
            var t = k.xLocation.parking_attributes.indexOf(e);
            t > -1
              ? k.xLocation.parking_attributes.splice(t, 1)
              : k.xLocation.parking_attributes.push(e);
          }),
          (k.toggleAccessAttribute = function (e) {
            var t = k.xLocation.access_restrictions.indexOf(e);
            t > -1
              ? k.xLocation.access_restrictions.splice(t, 1)
              : k.xLocation.access_restrictions.push(e);
          }),
          (k.findObjectIndex = function (e, t) {
            for (var o = 0; o < t.length; o++)
              if (
                (e.sort(function (e, t) {
                  return e.connector - t.connector;
                }),
                t[o].sort(function (e, t) {
                  return e.connector - t.connector;
                }),
                _.isEqual(e, t[o]))
              )
                return o;
            return -1;
          }),
          (k.updateConnector = function (e) {
            void 0, e.error && (k.xLocation.error = '');
            var t = null;
            'edit' == k.xLocation.action
              ? (t = k.location.valid_outlets)
              : 'public' == k.xLocation.type
              ? (t = k.localization.outlets_public)
              : 'residential' == k.xLocation.type &&
                (t = k.localization.outlets_private);
            var o = t.length;
            99 == e.select
              ? ((k.xLocation.error =
                  'Please do not manually add supercharger locations. They will be automatically added by moderators through a network feed once they are ready to be used. Thank you.'),
                (e.error = 'supercharger'),
                (e.select = null),
                (e.outlets = null),
                k.ga(
                  'send',
                  'event',
                  'attempt',
                  'add_supercharger',
                  'Tried to add supercharger',
                  0
                ))
              : e.select < o
              ? (e.outlets = [t[e.select]])
              : (e.outlets =
                  k.localization.outlet_configurations[e.select - o].outlets),
              void 0;
          }),
          (k.simpleControl = {}),
          (k.simpleControl.open = 0),
          (k.simpleControl.coords = []),
          (k.geocodeAddress = function () {
            e.geocoderCount++,
              k.geocoder.geocode(
                { address: k.xLocation.address },
                function (e, t) {
                  'OK' === t
                    ? (void 0,
                      k.simpleControl.goToLocation(e[0].geometry.location))
                    : void 0;
                }
              );
          }),
          (k.reverseGeocodeAddress = function () {
            var t = { lat: k.xLocation.latitude, lng: k.xLocation.longitude };
            e.geocoderCount++,
              k.geocoder.geocode({ location: t }, function (e, t) {
                'OK' === t
                  ? (void 0,
                    (k.xLocation.address = e[0].formatted_address),
                    k.update())
                  : void 0;
              });
          }),
          t.$watch(
            function () {
              return k.simpleControl.coords;
            },
            function (e, t) {
              void 0,
                (k.xLocation.latitude = k.simpleControl.coords[0]),
                (k.xLocation.longitude = k.simpleControl.coords[1]);
            }
          ),
          (k.nearbyLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          (k.findNearby = function (e) {
            'add' == k.xLocation.action &&
              'public' == k.xLocation.type &&
              (void 0,
              (k.xLocation.error = ''),
              f
                .getNearby(k.xLocation.latitude, k.xLocation.longitude, 1610)
                .then(function (t) {
                  t.success && t.data
                    ? (void 0,
                      (k.xLocation.nearby = t.data),
                      k.simpleControl.addNearbyMarkers(t.data),
                      e &&
                        k.xLocation.nearby.length > 0 &&
                        (k.xLocation.error =
                          u('translate')('Warning') +
                          u('translate')(
                            'Restricted or Coming Soon locations may be hidden by your filter settings'
                          ) +
                          '.' +
                          u('translate')(
                            'Please double check nearby locations below to avoid adding duplicates'
                          ) +
                          '.'),
                      k.update())
                    : (void 0,
                      (k.xLocation.error =
                        'Warning: Could not retrieve nearby locations. Please wait and try again.'));
                }));
          }),
          (k.addPublicLocation = function (e) {
            k.ga('send', 'pageview', 'add_location'),
              k.showActionLocation(e, 'add', 'public');
          }),
          (k.addResidentialLocation = function (e) {
            0 == k.user.locations.length
              ? (k.ga('send', 'pageview', 'add_home_charger'),
                k.showActionLocation(e, 'add', 'residential'))
              : (void 0, k.viewHomeCharger(e));
          }),
          (k.editLocation = function (e) {
            3 == k.location.access &&
            k.location.owner &&
            k.location.owner.id == k.user.id
              ? (k.ga('send', 'pageview', 'edit_home_charger'),
                k.showActionLocation(e, 'edit', 'residential'))
              : 3 == k.location.access || k.location.locked
              ? k.showReport(e)
              : (k.ga('send', 'pageview', 'edit_location'),
                k.showActionLocation(e, 'edit', 'public'));
          }),
          (k.viewHomeCharger = function () {
            k.user &&
              k.user.locations &&
              k.user.locations.length > 0 &&
              (void 0,
              k.user.locations[0].owner ||
                (k.user.locations[0].owner = {
                  display_name: k.user.display_name,
                }),
              k.mapControl.goToNewMarker(k.user.locations[0]));
          }),
          (k.showActionLocation = function (t, o, a) {
            e.tripPlanner && k.closePlanner(!0),
              k.xLocationReset(),
              (k.xLocation.action = o),
              (k.xLocation.type = a),
              'add' == k.xLocation.action
                ? ((k.simpleControl.coords = k.mapControl.getPosition()),
                  (k.filters.filter_restricted && k.filters.filter_soon) ||
                    s(function () {
                      k.findNearby(!0);
                    }, 1e3))
                : 'edit' == k.xLocation.action &&
                  (k.simpleControl.coords = [
                    k.location.latitude,
                    k.location.longitude,
                  ]),
              k.simpleControl.open++,
              c
                .show({
                  controller: function () {
                    if ((k.mobileMargin(), 'edit' == k.xLocation.action)) {
                      void 0,
                        void 0,
                        (k.xLocation.address = k.location.address),
                        (k.xLocation.description = k.location.description),
                        (k.xLocation.name = k.location.name),
                        (k.xLocation.hours = k.location.hours),
                        (k.xLocation.cost = k.location.cost),
                        (k.xLocation.cost_description =
                          k.location.cost_description),
                        (k.xLocation.phone = k.location.phone),
                        (k.xLocation.open247 = k.location.open247),
                        (k.xLocation.restricted =
                          2 == k.location.access ? !0 : !1),
                        (k.xLocation.parking_level = k.location.parking_level),
                        k.location.overhead_clearance_meters &&
                          (k.xLocation.overhead_clearance = k.metric
                            ? k.location.overhead_clearance_meters.toFixed(2)
                            : (
                                3.28084 * k.location.overhead_clearance_meters
                              ).toFixed(2)),
                        (k.xLocation.parking_attributes = k.location
                          .parking_attributes
                          ? JSON.parse(
                              JSON.stringify(k.location.parking_attributes)
                            )
                          : []),
                        (k.xLocation.access_restrictions = k.location
                          .access_restrictions
                          ? JSON.parse(
                              JSON.stringify(k.location.access_restrictions)
                            )
                          : []),
                        k.location.stations.sort(function (e, t) {
                          return e.id - t.id;
                        }),
                        (k.xLocation.stationIndex = 0),
                        (k.xLocation.stations = []);
                      for (var e in k.location.stations) {
                        var t = {
                          outlets: [],
                          index: k.xLocation.stationIndex,
                          network_ext_id: k.location.stations[e].network_ext_id,
                          existing: !0,
                          outside_network_id: !1,
                          outside_network_name: !1,
                        };
                        k.xLocation.stationIndex++,
                          k.location.stations[e].network &&
                            k.location.stations[e].network.name &&
                            (t.network_name =
                              k.location.stations[e].network.name),
                          k.location.stations[e].outlets.sort(function (e, t) {
                            return e.id - t.id;
                          });
                        for (var o in k.location.stations[e].outlets) {
                          var a = {
                            connector:
                              k.location.stations[e].outlets[o].connector,
                            power: 0,
                          };
                          k.location.stations[e].outlets[o].power &&
                            (a.power = k.location.stations[e].outlets[o].power),
                            t.outlets.push(a);
                        }
                        var s = null;
                        if (
                          ('edit' == k.xLocation.action
                            ? (s = k.location.valid_outlets)
                            : 'public' == k.xLocation.type
                            ? (s = k.localization.outlets_public)
                            : 'residential' == k.xLocation.type &&
                              (s = k.localization.outlets_private),
                          1 == k.location.stations[e].outlets.length)
                        )
                          k.location.stations[e].outlets[0].power
                            ? (t.select = 99)
                            : (t.select = _.findKey(s, {
                                connector:
                                  k.location.stations[e].outlets[0].connector,
                              }));
                        else {
                          var n = k.findObjectIndex(
                            t.outlets,
                            k.localization.clean_configurations
                          );
                          -1 == n
                            ? (void 0,
                              (k.xLocation.error =
                                'Warning: Invalid station plug combination detected (Check user region: Settings -> Region)'),
                              (t.error = !0))
                            : (t.select = n + s.length);
                        }
                        if (
                          ((t.network_id = 0),
                          k.location.stations[e].network_id)
                        ) {
                          t.network_id = k.location.stations[e].network_id;
                          var i = _.findKey(
                            k.localization.filterable_networks,
                            { id: t.network_id }
                          );
                          void 0 == i &&
                            ((t.outside_network_id =
                              k.location.stations[e].network.id),
                            (t.outside_network_name =
                              k.location.stations[e].network.name),
                            void 0,
                            void 0);
                        }
                        (t.id = k.location.stations[e].id),
                          void 0,
                          k.xLocation.stations.push(t);
                      }
                      void 0,
                        void 0,
                        (k.xLocation.stationIndex =
                          k.xLocation.stations.length),
                        (k.xLocation.amenities = []);
                      for (var l in k.location.amenities)
                        k.xLocation.amenities.push(
                          k.location.amenities[l].type
                        );
                    } else 'add' == k.xLocation.action && k.addStation();
                    return k;
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/location.tmpl.html',
                  parent: k.body,
                  targetEvent: t,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.submitLocation = function () {
            if (
              (void 0, (k.xLocation.error = ''), k.markErrors(k.xLocationForm))
            )
              k.xLocation.error = 'Please fill out all required fields';
            else {
              void 0, (k.xLocation.processing = !0);
              var e = { access: 1, stations: [] };
              if (
                ((e.address = k.xLocation.address),
                (e.description = k.xLocation.description),
                (e.hours = k.xLocation.hours),
                (e.open247 = k.xLocation.open247),
                (e.access_restrictions = k.xLocation.access_restrictions),
                (e.parking_level = k.xLocation.parking_level),
                (e.parking_attributes = k.xLocation.parking_attributes),
                k.xLocation.overhead_clearance &&
                  (e.overhead_clearance_meters = parseFloat(
                    k.metric
                      ? k.xLocation.overhead_clearance
                      : k.xLocation.overhead_clearance / 3.28084
                  )),
                'add' == k.xLocation.action &&
                  ((e.actor = k.user.id), (e.locale = f.localization.name)),
                'residential' == k.xLocation.type &&
                  ((e.access = 3), (e.owner_id = k.user.id)),
                'public' == k.xLocation.type)
              ) {
                (e.amenities = []),
                  k.xLocation.restricted && (e.access = 2),
                  (e.name = k.xLocation.name),
                  (e.cost = k.xLocation.cost),
                  (e.cost_description = k.xLocation.cost_description),
                  (e.phone = k.xLocation.phone);
                for (var t in k.xLocation.amenities)
                  e.amenities.push({ type: k.xLocation.amenities[t] });
              }
              (e.latitude = k.xLocation.latitude),
                (e.longitude = k.xLocation.longitude),
                void 0,
                void 0;
              for (
                var o = angular.copy(k.xLocation.stations), a = 0;
                a < k.xLocation.remove.length;
                a++
              ) {
                var s = _.findKey(o, { index: k.xLocation.remove[a] });
                o.splice(s, 1);
              }
              void 0;
              for (var n in o) {
                var i = { outlets: [] };
                for (var l in o[n].outlets) {
                  var r = { connector: o[n].outlets[l].connector };
                  o[n].outlets[l].power && (r.power = o[n].outlets[l].power),
                    i.outlets.push(r);
                }
                var d = parseInt(o[n].network_id);
                d && (i.network_id = d),
                  o[n].id && (i.id = o[n].id),
                  void 0,
                  e.stations.push(i);
              }
              void 0,
                void 0,
                'add' == k.xLocation.action
                  ? ((e.coming_soon = 'true' == k.xLocation.coming_soon),
                    f.addLocation(e).then(function (e) {
                      void 0,
                        e.success && e.data
                          ? ('residential' == k.xLocation.type &&
                              (k.ga(
                                'send',
                                'event',
                                'contribute',
                                'add_home_charger',
                                'Added home charger',
                                e.data.id
                              ),
                              (k.user.locations = [e.data])),
                            'public' == k.xLocation.type &&
                              k.ga(
                                'send',
                                'event',
                                'contribute',
                                'add_location',
                                'Added location',
                                e.data.id
                              ),
                            c.hide(e.data.name),
                            k.xLocationReset(),
                            (k.xLocation.processing = !1),
                            k.update(),
                            k.mapControl.goToNewMarker(e.data),
                            k.toast('Location Added'))
                          : e.error &&
                            (void 0,
                            (k.xLocation.error = e.error),
                            (k.xLocation.processing = !1),
                            k.update());
                    }))
                  : 'edit' == k.xLocation.action &&
                    ((e.id = k.location.id),
                    f.editLocation(e).then(function (e) {
                      void 0,
                        e.success && e.data
                          ? ('residential' == k.xLocation.type &&
                              k.ga(
                                'send',
                                'event',
                                'contribute',
                                'edit_home_charger',
                                'Edited home charger',
                                e.data.id
                              ),
                            'public' == k.xLocation.type &&
                              k.ga(
                                'send',
                                'event',
                                'contribute',
                                'edit_location',
                                'Edited location',
                                e.data.id
                              ),
                            c.hide(e.data.name),
                            k.xLocationReset(),
                            (k.xLocation.processing = !1),
                            (k.location = e.data),
                            k.update(),
                            k.mapControl.refreshMarker(e.data, !0),
                            k.toast('Location Updated'))
                          : e.error &&
                            (void 0,
                            (k.xLocation.error = e.error),
                            (k.xLocation.processing = !1),
                            k.update());
                    }));
            }
          }),
          (k.removeLocation = function () {
            if (confirm('Are you sure you want to remove your home charger?')) {
              void 0, (k.xLocation.error = ''), (k.xLocation.processing = !0);
              var e = k.location.id;
              f.removeLocation(e).then(function (t) {
                t &&
                  (k.ga(
                    'send',
                    'event',
                    'location',
                    'delete_location',
                    'Remove User Shared Location',
                    e
                  ),
                  k.toast('Your home charger has been removed'),
                  k.cancel(),
                  k.mapControl.removeMarker(e),
                  (k.user.locations = []),
                  (k.location = null),
                  (k.directUrl = !0),
                  m.go('home'));
              });
            }
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.VehicleController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.getVehicleMake = function (e) {
          var t = '';
          if (k.localization.vehicles) {
            var o = _.findKey(k.localization.vehicles, { id: e });
            void 0 != o && (t = k.localization.vehicles[o].group);
          }
          return t;
        }),
          (k.getVehicleById = function (e) {
            return f.getVehicleById(e);
          }),
          (k.getMakeImage = function (e) {
            var t =
              'https://assets.plugshare.com/vehicles/makes/image/default.png';
            if (e) {
              var o = _.findKey(f.localization.makes, { name: e });
              void 0 != o &&
                f.localization.makes[o].image_url &&
                (t = f.localization.makes[o].image_url);
            }
            return void 0, t;
          }),
          t.$watch(
            function () {
              return k.profile.vehicle_make;
            },
            function (e, t) {
              k.profile.vehicle_make &&
                (k.profile.vehicle_image = k.getMakeImage(e));
            }
          ),
          (k.getActiveModelName = function () {
            var e = k.getVehicleById(k.profile.vehicle_type).model;
            e ? (k.profile.activeModel = e) : delete k.profile.activeModel;
          }),
          (k.showVehicle = function (e, t) {
            f.getRegionVehicles(k.localization.name).then(function (o) {
              o.success && o.data
                ? (void 0,
                  (k.localization = o.data),
                  void 0,
                  k.user &&
                    k.user.vehicles &&
                    (k.user.vehicles.length
                      ? (k.profileReset(),
                        k.refetchProfile(),
                        void 0 != t
                          ? (k.profile.viewIndex = t ? t : 0)
                          : (k.profile.viewIndex = k.activeVehicleIndex),
                        k.viewVehicle(t),
                        k.getActiveModelName(),
                        c
                          .show({
                            controller: function () {
                              return (
                                k.ga('send', 'pageview', 'vehicle'),
                                k.mobileMargin(),
                                k
                              );
                            },
                            controllerAs: 'maps',
                            templateUrl: 'app/main/templates/vehicle.tmpl.html',
                            parent: k.body,
                            targetEvent: e,
                            clickOutsideToClose: !1,
                            escapeToClose: !1,
                          })
                          .then(
                            function (e) {
                              void 0,
                                k.mobilePlannerMargin(),
                                k.vehicleCleanup();
                            },
                            function () {
                              void 0,
                                k.mobilePlannerMargin(),
                                k.vehicleCleanup();
                            }
                          ))
                      : k.addVehicle(e)))
                : (void 0,
                  k.toast(
                    'Unable to get vehicles list. Please try again',
                    5e3
                  ));
            });
          }),
          (k.submitVehicle = function () {
            if ((void 0, (k.profile.error = ''), k.markErrors(k.profileForm)))
              k.profile.error = 'Please fill out all required fields';
            else {
              void 0, (k.profile.processing = !0);
              var e = {
                vehicle_base_id: k.profile.vehicle_type,
                vehicle_variation_id: k.profile.vehicle_subtype,
                vehicle_color_id: k.profile.vehicle_color,
              };
              'Other' == k.profile.vehicle_make && (e.vehicle_base_id = 99),
                k.getVehicle(k.profile.viewIndex)['new']
                  ? 'None' == k.profile.vehicle_make
                    ? ((k.profile.processing = !1),
                      k.user.vehicles.splice(k.profile.viewIndex),
                      c.hide(k.user.id + ': ' + k.user.display_name))
                    : (void 0,
                      f.addVehicle(e, k.profile.viewIndex).then(function (e) {
                        e.success && e.data
                          ? (void 0,
                            (k.user.vehicles = f.user.vehicles),
                            void 0,
                            k.ga(
                              'send',
                              'event',
                              'user',
                              'edit',
                              'Add Vehicle',
                              1
                            ),
                            k.selectVehicle(k.profile.viewIndex),
                            c.hide(k.user.id + ': ' + k.user.display_name),
                            (k.profile.processing = !1),
                            k.update(),
                            k.toast('Vehicle Added'))
                          : e.error &&
                            (void 0,
                            (k.profile.error = e.error),
                            (k.profile.processing = !1),
                            k.update());
                      }))
                  : 'None' == k.profile.vehicle_make
                  ? k.deleteVehicle(k.profile.viewIndex)
                  : (void 0,
                    f.updateVehicle(e, k.profile.viewIndex).then(function (e) {
                      e.success && e.data
                        ? (void 0,
                          (k.user.vehicles[parseInt(k.profile.viewIndex)] =
                            e.data),
                          k.ga(
                            'send',
                            'event',
                            'user',
                            'edit',
                            'Update Vehicle',
                            1
                          ),
                          k.selectVehicle(k.profile.viewIndex),
                          c.hide(k.user.id + ': ' + k.user.display_name),
                          (k.profile.processing = !1),
                          k.update(),
                          k.toast('Vehicle Updated'))
                        : e.error &&
                          (void 0,
                          (k.profile.error = e.error),
                          (k.profile.processing = !1),
                          k.update());
                    }));
            }
          }),
          (k.vehiclesLimit = 4),
          (k.getVehicle = function (e) {
            return (
              void 0 == e && (e = k.activeVehicleIndex),
              void 0 != e && k.user && k.user.vehicles && k.user.vehicles.length
                ? k.user.vehicles[e]
                : {
                    color: '',
                    compatible_outlets: [],
                    default_outlets: [],
                    display_name: '',
                    enabled_outlet_filters: [],
                    id: null,
                    make: '',
                    model: '',
                    photo_url: null,
                    photo_url_alt: null,
                    range: null,
                    trim: '',
                    vehicle_base_id: null,
                    vehicle_color_id: null,
                    vehicle_variation_id: null,
                  }
            );
          }),
          (k.viewPreviousVehicle = function () {
            var e = parseInt(k.profile.viewIndex);
            0 == e ? (e = k.user.vehicles.length - 1) : (e -= 1),
              void 0,
              k.viewVehicle(e);
          }),
          (k.viewNextVehicle = function () {
            var e = parseInt(k.profile.viewIndex);
            e == k.user.vehicles.length - 1 ? (e = 0) : (e += 1),
              void 0,
              k.viewVehicle(e);
          }),
          (k.viewVehicle = function (e) {
            if (
              (k.profile.touched &&
                confirm(
                  'Unsaved changes detected, are you sure you want to switch tabs?'
                )) ||
              !k.profile.touched
            ) {
              (k.profile.touched = !1), (k.profile.error = ''), void 0;
              var t = k.getVehicle(e);
              (k.profile.viewIndex = e),
                (k.profile.vehicle_make = k.getVehicleMake(t.model_id)),
                (k.profile.vehicle_image = k.getMakeImage(
                  k.profile.vehicle_make
                )),
                (k.profile.vehicle_type = t.model_id),
                (k.profile.vehicle_subtype = t.trim_id),
                (k.profile.vehicle_plugs = t.default_outlets),
                k.getActiveModelName(),
                k.getVehicleColors(),
                k.resetAnimation('vehicle-image'),
                (k.profile.vehicle_color = t.color_id),
                k.update();
            }
          }),
          (k.addVehicle = function (e, t, o) {
            if (
              k.authenticated() &&
              (void 0 != o && (k.activeVehicleIndex = o),
              (k.profile.touched &&
                confirm(
                  'Unsaved changes detected, are you sure you want to switch tabs?'
                )) ||
                !k.profile.touched)
            )
              if (
                ((k.profile.touched = !1),
                void 0,
                k.user &&
                  k.user.vehicles &&
                  k.user.vehicles.length < k.vehiclesLimit)
              ) {
                var a = {
                  vehicle_name: null,
                  vehicle_color: 0,
                  vehicle_subtype: 0,
                  vehicle_type: 0,
                  new: !0,
                  display_name: 'New',
                  enabled_outlet_filters: [],
                };
                k.user.vehicles.push(a),
                  (k.profile.vehicle_make = null),
                  (k.profile.vehicle_type = null),
                  (k.profile.vehicle_subtype = null),
                  (k.profile.vehicle_plugs = []),
                  (k.profile.vehicle_color = null),
                  (k.profile.activeModel = null),
                  (k.profile.viewIndex = k.user.vehicles.length - 1),
                  k.resetAnimation('vehicle-image'),
                  (e || t) && k.showVehicle(e, k.profile.viewIndex);
              } else
                k.toast('Maximum ' + k.vehiclesLimit + ' vehicles allowed');
          }),
          (k.deleteVehicle = function (e) {
            var t = k.getVehicle().id;
            void 0 != e &&
              k.user.vehicles[e].id &&
              confirm('Are you sure you want to delete this vehicle?') &&
              (void 0,
              (k.profile.processing = !0),
              f.deleteVehicle(k.user.vehicles[e].id).then(function (e) {
                if (e.success && e.data) {
                  void 0,
                    k.ga('send', 'event', 'user', 'edit', 'Delete Vehicle', 0),
                    (k.user.vehicles = f.user.vehicles);
                  var o = _.findKey(k.user.vehicles, { id: t });
                  void 0 != o
                    ? o != k.activeVehicleIndex && k.selectVehicle(o)
                    : k.selectVehicle(0),
                    c.hide(k.user.id + ': ' + k.user.display_name),
                    (k.profile.processing = !1),
                    k.update(),
                    k.toast('Vehicle Deleted');
                } else e.error && (void 0, (k.profile.error = e.error), (k.profile.processing = !1), k.update());
              }));
          }),
          (k.selectVehicle = function (e, t) {
            if (
              void 0 != k.activeVehicleIndex &&
              -1 != k.activeVehicleIndex.toString().indexOf('manage')
            )
              void 0 != t && (k.activeVehicleIndex = t),
                k.showVehicle(null, k.activeVehicleIndex);
            else if (k.user.vehicles.length) {
              void 0 != e &&
                (e > k.user.vehicles.length - 1 && (e = 0),
                (k.activeVehicleIndex = e));
              var o = k.getVehicle();
              void 0,
                k.setCookie('v2_active_vehicle_id', o.id, 'essential'),
                (k.showIncompatible = !1),
                k.replaceLocalOutlets(),
                k.checkFilters(),
                k.getActiveOutletsCount(),
                k.checkAllOutletsShowing(),
                k.getVehicleRange();
            } else
              void 0,
                (k.activeVehicleIndex = 0),
                k.setCookie('v2_active_vehicle_id', 0, 'essential');
          }),
          (k.vehicleCleanup = function () {
            (k.profile.touched = !1),
              k.user &&
                k.user.vehicles &&
                k.user.vehicles.length &&
                k.user.vehicles[k.user.vehicles.length - 1]['new'] &&
                (void 0, k.user.vehicles.splice(k.user.vehicles.length - 1));
          }),
          (k.resetVehicle = function (e) {
            void 0,
              e >= 3 &&
                ((k.profile.vehicle_type = null),
                (k.profile.vehicle_plugs = []),
                'Other' == k.profile.vehicle_make &&
                  delete k.profile.activeModel),
              e >= 2 && (k.profile.vehicle_subtype = null),
              e >= 1 &&
                ((k.profile.vehicle_color = null), k.getVehicleColors()),
              2 == e &&
                (k.getActiveModelName(), k.resetAnimation('vehicle-image'));
            var t = null;
            if (2 >= e && k.profile.vehicle_type) {
              var o = _.findKey(k.localization.vehicles, {
                id: parseInt(k.profile.vehicle_type),
              });
              void 0 != o && (t = k.localization.vehicles[o]),
                (k.profile.vehicle_plugs = t.default_outlets);
            }
            if (1 == e && k.profile.vehicle_subtype && t.subtypes.length) {
              var a = _.findKey(t.subtypes, {
                id: parseInt(k.profile.vehicle_subtype),
              });
              void 0 != a &&
                (k.profile.vehicle_plugs = t.subtypes[a].default_outlets);
            }
            k.profile.touched = !0;
          }),
          (k.getVehicleColors = function () {
            if (
              ((k.vehicleColors = []), k.localization && k.profile.vehicle_type)
            ) {
              void 0;
              var e = k.findById(
                k.localization.vehicles,
                k.profile.vehicle_type
              );
              void 0;
              var t = null;
              if (
                (k.profile.vehicle_subtype &&
                  (t = parseInt(k.profile.vehicle_subtype)),
                e && e.subtypes.length > 0 && t)
              ) {
                var o = _.findKey(e.subtypes, { id: t });
                void 0 != o &&
                e.subtypes[o].colors &&
                e.subtypes[o].colors.length > 0
                  ? (void 0, void 0, (k.vehicleColors = e.subtypes[o].colors))
                  : (k.vehicleColors = e.colors);
              } else k.vehicleColors = e.colors;
            }
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.CheckinController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.checkin = {}),
          (k.checkinReset = function (e) {
            if (
              (e || k.cancel('checkinReset'),
              (k.checkin = {
                type: 'success',
                waiting: !1,
                error: '',
                processing: !1,
                power: !0,
                latitude: null,
                longitude: null,
                source: 'default',
                stationId: null,
                stationNames: [],
                stationOthers: [
                  { id: 'x', name: 'Another station not listed' },
                  { id: 'y', name: "I can't see the station name" },
                  { id: 'z', name: "I don't know" },
                ],
              }),
              k.user &&
                k.user.vehicles &&
                k.user.vehicles.length &&
                (k.checkin.vehicle = k.activeVehicleIndex),
              k.localization &&
                k.localization.networks_for_populating_review_station_data &&
                k.localization.networks_for_populating_review_station_data
                  .length)
            )
              for (var t = 0; t < k.location.stations.length; t++)
                k.location.stations[t].name &&
                  -1 !==
                    k.localization.networks_for_populating_review_station_data.indexOf(
                      k.location.stations[t].network_id
                    ) &&
                  k.checkin.stationNames.push({
                    id: k.location.stations[t].id.toString(),
                    name: k.location.stations[t].name,
                  });
          }),
          k.checkinReset(!0),
          (k.checkinCheck = function () {
            if (k.user && k.checkin.vehicle && k.location) {
              var e = k.getVehicle(k.checkin.vehicle);
              void 0;
              for (var t = !1, o = 0; o < e.compatible_outlets.length; o++) {
                var a = e.compatible_outlets[o],
                  s = _.findKey(k.location.connectors, {
                    connector: a.connector,
                  });
                if (void 0 != s) {
                  if (t) {
                    void 0, (t = !1), (k.checkin.connector_type = null);
                    break;
                  }
                  t = k.location.connectors[s];
                }
              }
              t && (void 0, (k.checkin.connector_type = t.connector));
            }
          }),
          (k.setUserCheckinLocation = function (e) {
            void 0, (k.checkin.latitude = e[0]), (k.checkin.longitude = e[1]);
          }),
          (k.showCheckin = function (e, t, o) {
            void 0,
              k.checkinReset(),
              o && (k.checkin.source = o),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'add_review'),
                      k.ga(
                        'send',
                        'event',
                        'contribute',
                        'start_review: ' + t,
                        k.checkin.source,
                        1
                      ),
                      k.mobileMargin(),
                      k.checkinCheck(),
                      t && (k.checkin.type = t),
                      !g.innerWidth < 420 &&
                        s(function () {
                          var e = angular.element(
                            h[0].querySelector('#checkin.modal')
                          );
                          e.css('height', e[0].offsetHeight + 'px');
                        }, 1e3),
                      k.mapControl.getUserPosition(),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/checkin.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.submitCheckin = function (e) {
            if ((void 0, (k.checkin.error = ''), k.markErrors(k.checkinForm)))
              k.checkin.error = 'Please fill out all required fields';
            else {
              switch (
                (void 0,
                (k.checkin.processing = !0),
                1 == k.location.connectors.length &&
                  (k.checkin.connector_type =
                    k.location.connectors[0].connector),
                k.checkin.type)
              ) {
                case 'success':
                  (k.checkin.rating = 1), delete k.checkin.problem;
                  break;
                case 'error':
                  (k.checkin.rating = -1),
                    delete k.checkin.kilowatts,
                    delete k.checkin.amps,
                    delete k.checkin.volts;
                  break;
                case 'tip':
                  (k.checkin.rating = 0),
                    delete k.checkin.problem,
                    delete k.checkin.kilowatts,
                    delete k.checkin.amps,
                    delete k.checkin.volts,
                    delete k.checkin.connector_type;
              }
              var t = Math.round(k.checkin.kilowatts);
              k.checkin.volts &&
                k.checkin.amps &&
                (t = Math.round((k.checkin.volts * k.checkin.amps) / 1e3));
              var o = {
                locationId: k.location.id,
                rating: k.checkin.rating,
                comment: k.checkin.comment,
                duration: k.checkin.duration,
                problem: k.checkin.problem,
                user_vehicle_id: k.getVehicle(k.checkin.vehicle).id,
                connector_type: k.checkin.connector_type,
              };
              if (
                (t && (o.kilowatts = t),
                k.checkin.latitude &&
                  k.checkin.longitude &&
                  ((o.latitude = k.checkin.latitude),
                  (o.longitude = k.checkin.longitude)),
                k.checkin.stationId)
              ) {
                var a = _.findKey(k.checkin.stationOthers, {
                  id: k.checkin.stationId,
                });
                if (void 0 != a)
                  o.station_selection_response =
                    k.checkin.stationOthers[a].name;
                else {
                  var s = _.findKey(k.checkin.stationNames, {
                    id: k.checkin.stationId,
                  });
                  void 0 != s &&
                    ((o.station_selection_response =
                      k.checkin.stationNames[s].name),
                    (o.station_id = parseInt(k.checkin.stationId)));
                }
              }
              f.checkin(o).then(function (e) {
                void 0,
                  e.success && e.data
                    ? (k.ga(
                        'send',
                        'event',
                        'contribute',
                        'add_review',
                        'Source: ' + k.checkin.source,
                        e.data.id
                      ),
                      c.hide(e.data.id),
                      k.mapControl.refreshMarker(e.data.location),
                      e.data.is_visible || void 0 === e.data.is_visible
                        ? k.toast('Check In Successful')
                        : k.toast(
                            'Thank you for your submission. Your review is not yet visible in PlugShare while it is evaluated by our community moderation team. We will update you shortly.',
                            2e4
                          ),
                      k.refreshLocation())
                    : e.error &&
                      (void 0,
                      (k.checkin.error = e.error),
                      (k.checkin.processing = !1),
                      k.update());
              });
            }
          }),
          (k.switchCheckinUnits = function () {
            (k.checkin.power = !k.checkin.power),
              (k.checkin.amps = null),
              (k.checkin.volts = null),
              (k.checkin.kilowatts = null);
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.TutorialController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.pageIndex = 1),
          (k.showTutorial = function (e) {
            c.show({
              controller: function () {
                return (
                  k.ga('send', 'pageview', 'tutorial'),
                  k.mobileMargin(),
                  (k.pageIndex = 1),
                  (k.tutorialSearchQuery = ''),
                  k
                );
              },
              controllerAs: 'maps',
              templateUrl: 'app/main/templates/tutorial.tmpl.html',
              parent: k.body,
              targetEvent: e,
              clickOutsideToClose: !1,
              escapeToClose: !1,
            }).then(
              function (e) {
                void 0, k.mobilePlannerMargin();
              },
              function () {
                void 0, k.mobilePlannerMargin();
              }
            );
          }),
          (k.tutorialPage = function (e) {
            e ? k.pageIndex++ : k.pageIndex--,
              s(function () {
                angular
                  .element(h[0].querySelector('md-dialog-content'))
                  .scrollTop(0);
              }, 0);
          }),
          (k.helper = function (e, t) {
            g.innerWidth < 420 && k.hide(),
              'legend' == e
                ? ((k.menu.menu = !0),
                  (k.menu.legend = !0),
                  (k.menu.filters = !1),
                  (k.menu.account = !1),
                  (k.menu.bookmarks = !1),
                  (k.menu['new'] = !1),
                  (k.menu.settings = !1),
                  (k.menu.trip = !1),
                  (k.menu.app = !1))
                : 'filters' == e
                ? ((k.menu = {
                    menu: !0,
                    legend: !1,
                    filters: !0,
                    networks: !0,
                    account: !1,
                    bookmarks: !1,
                    new: !1,
                    settings: !1,
                    trip: !1,
                    app: !1,
                  }),
                  k.toast('Filters menu opened'))
                : 'country' == e
                ? ((k.menu = {
                    menu: !0,
                    legend: !1,
                    filters: !0,
                    networks: !1,
                    account: !1,
                    bookmarks: !1,
                    new: !1,
                    settings: !1,
                    trip: !1,
                    app: !1,
                  }),
                  k.showSettings())
                : 'public' == e
                ? ((k.menu.menu = !0),
                  (k.menu.legend = !1),
                  (k.menu.filters = !1),
                  (k.menu.account = !1),
                  (k.menu.bookmarks = !1),
                  (k.menu['new'] = !0),
                  (k.menu.settings = !1),
                  (k.menu.trip = !1),
                  (k.menu.app = !1),
                  k['try'](t, 'addPublicLocation'))
                : 'residential' == e
                ? ((k.menu.menu = !0),
                  (k.menu.legend = !1),
                  (k.menu.filters = !1),
                  (k.menu.account = !1),
                  (k.menu.bookmarks = !1),
                  (k.menu['new'] = !0),
                  (k.menu.settings = !1),
                  (k.menu.trip = !1),
                  (k.menu.app = !1),
                  k['try'](t, 'addResidentialLocation'))
                : 'help' == e
                ? ((k.menu.menu = !0), k.showTutorial(t))
                : 'feedback' == e
                ? ((k.menu.menu = !0),
                  (k.menu.filters = !1),
                  k.hide(),
                  s(function () {
                    k.showFeedback();
                  }, 1e3))
                : 'quickPlugs' == e
                ? ((k.menu.legend = !1),
                  (k.menu.filters = !0),
                  (k.menu.networks = !1),
                  (k.menu.menu = !0),
                  k.ga(
                    'send',
                    'event',
                    'helper',
                    'quick_filter',
                    'Show Plug Filters',
                    1
                  ))
                : 'quickPower' == e
                ? ((k.menu.legend = !1),
                  (k.menu.filters = !0),
                  (k.menu.networks = !1),
                  (k.menu.menu = !0),
                  k.ga(
                    'send',
                    'event',
                    'helper',
                    'quick_filter',
                    'Show Power Filters',
                    1
                  ))
                : 'quickNetworks' == e
                ? ((k.menu.legend = !1),
                  (k.menu.filters = !0),
                  (k.menu.networks = !0),
                  (k.menu.menu = !0),
                  k.ga(
                    'send',
                    'event',
                    'helper',
                    'quick_filter',
                    'Show Network Filters',
                    1
                  ))
                : 'quickPlugScore' == e
                ? ((k.menu.legend = !1),
                  (k.menu.filters = !0),
                  (k.menu.networks = !1),
                  (k.menu.menu = !0),
                  k.ga(
                    'send',
                    'event',
                    'helper',
                    'quick_filter',
                    'Show PlugScore Filters',
                    1
                  ))
                : 'quickPWPS' == e &&
                  ((k.menu.legend = !1),
                  (k.menu.filters = !0),
                  (k.menu.networks = !1),
                  (k.menu.menu = !0),
                  k.ga(
                    'send',
                    'event',
                    'helper',
                    'quick_filter',
                    'Show PWPS Filters',
                    1
                  ));
          }),
          (k.helpdeskSearch = function () {
            k.ga('send', 'event', 'help', 'search', k.tutorialSearchQuery, 1);
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.FeedbackController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.feedback = {}),
          (k.feedbackReset = function (e) {
            e || k.cancel('feedbackReset'),
              (k.feedback = {
                error: '',
                processing: !1,
                fileName1: null,
                fileName2: null,
                fileName3: null,
                fileSize: 0,
              });
          }),
          k.feedbackReset(!0),
          (k.showFeedback = function (e, t) {
            k.feedbackReset(),
              k.getIp(),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'contact_us'),
                      k.mobileMargin(),
                      (k.feedback.type = 'general'),
                      t && (k.feedback.type = 'location'),
                      k.user &&
                        k.user.email &&
                        (k.feedback.email = k.user.email),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/feedback.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.submitFeedback = function () {
            if ((void 0, (k.feedback.error = ''), k.markErrors(k.feedbackForm)))
              k.message.error = 'Please fill out all required fields';
            else {
              (k.feedback.processing = !0), void 0;
              var e = ('<b>' + k.feedback.type + '</b><br>', new FormData());
              (k.feedback.uploadSize = 0),
                angular.element('#photo_upload1')[0] &&
                  angular.element('#photo_upload1')[0].files &&
                  angular.element('#photo_upload1')[0].files[0] &&
                  (e.append(
                    'attachments[]',
                    angular.element('#photo_upload1')[0].files[0]
                  ),
                  (k.feedback.uploadSize +=
                    angular.element('#photo_upload1')[0].files[0].size)),
                angular.element('#photo_upload2')[0] &&
                  angular.element('#photo_upload2')[0].files &&
                  angular.element('#photo_upload2')[0].files[0] &&
                  (e.append(
                    'attachments[]',
                    angular.element('#photo_upload2')[0].files[0]
                  ),
                  (k.feedback.uploadSize +=
                    angular.element('#photo_upload2')[0].files[0].size)),
                angular.element('#photo_upload3')[0] &&
                  angular.element('#photo_upload3')[0].files &&
                  angular.element('#photo_upload3')[0].files[0] &&
                  (e.append(
                    'attachments[]',
                    angular.element('#photo_upload3')[0].files[0]
                  ),
                  (k.feedback.uploadSize +=
                    angular.element('#photo_upload3')[0].files[0].size)),
                k.feedback.uploadSize > 2e7
                  ? ((k.feedback.error =
                      'Total attachment(s) size should not exceed 20MB'),
                    (k.feedback.processing = !1),
                    k.update())
                  : ((k.feedback.error = ''),
                    e.append('subject', 'PlugShare.com Feedback'),
                    e.append(
                      'email',
                      k.user && k.user.email ? k.user.email : k.feedback.email
                    ),
                    e.append('feedback type', k.feedback.type),
                    e.append('message', k.feedback.message),
                    e.append(
                      'userId',
                      k.user && k.user.id ? k.user.id : 'Not Logged In'
                    ),
                    e.append('system', k.system),
                    e.append('browser', k.browser),
                    e.append('version', k.version),
                    e.append('userAgent', k.userAgent),
                    e.append('city', k.ip.city),
                    e.append('region', k.ip.region),
                    e.append('country', k.ip.country),
                    k.lastLocationId &&
                      e.append(
                        'lastLocation',
                        'https://www.plugshare.com/location/' + k.lastLocationId
                      ),
                    $.ajax({
                      url: 'https://formspree.io/f/xgedkgwg',
                      method: 'post',
                      headers: { Accept: 'application/json' },
                      data: e,
                      processData: !1,
                      contentType: !1,
                      success: function (e, t, o) {
                        k.ga(
                          'send',
                          'event',
                          'corporate',
                          'contact_us',
                          'Sent feedback message',
                          0,
                          e
                        ),
                          c.hide(o.status),
                          k.feedbackReset(),
                          k.toast('Feedback Submitted');
                      },
                      error: function (e, t) {
                        void 0,
                          void 0,
                          (k.feedback.error = JSON.parse(
                            e.responseText
                          ).errors[0].message),
                          (k.feedback.processing = !1),
                          k.update();
                      },
                    }));
            }
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.UploadController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.upload = {}),
          (k.uploadReset = function (e) {
            e || k.cancel('uploadReset'),
              (k.upload = { error: '', processing: !1, fileName1: null });
          }),
          k.uploadReset(!0),
          (k.showUpload = function (e, t) {
            void 0,
              k.uploadReset(),
              c
                .show({
                  controller: function () {
                    return (
                      t
                        ? k.ga('send', 'pageview', 'add_profile_photo')
                        : k.ga('send', 'pageview', 'add_photo'),
                      k.mobileMargin(),
                      (k.upload.profile = t),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/upload.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.submitUpload = function () {
            void 0,
              (k.upload.error = ''),
              !k.markErrors(k.uploadForm) &&
              angular.element('#photo_upload1')[0] &&
              angular.element('#photo_upload1')[0].files &&
              angular.element('#photo_upload1')[0].files[0]
                ? (void 0,
                  (k.upload.processing = !0),
                  k.upload.profile
                    ? (void 0,
                      f
                        .uploadProfile(
                          angular.element('#photo_upload1')[0].files[0],
                          k.user.id
                        )
                        .then(function (e) {
                          void 0,
                            e.success && e.data
                              ? (k.ga(
                                  'send',
                                  'event',
                                  'user',
                                  'add_profile_photo',
                                  'Added profile photo',
                                  e.data.id
                                ),
                                angular
                                  .element('#profile-photo')
                                  .attr('image-error', !0),
                                s(function () {
                                  c.hide(e.data.url),
                                    k.uploadReset(),
                                    k.toast('Profile Photo Uploaded'),
                                    k.user.photos.unshift(e.data);
                                }, 1e3))
                              : e.error &&
                                (void 0,
                                (k.upload.error = e.error),
                                (k.upload.processing = !1),
                                k.update());
                        }))
                    : f
                        .uploadPhoto(
                          k.location.id,
                          angular.element('#photo_upload1')[0].files[0],
                          k.upload.caption,
                          k.user.id
                        )
                        .then(function (e) {
                          void 0,
                            e.success && e.data
                              ? (k.ga(
                                  'send',
                                  'event',
                                  'contribute',
                                  'add_photo',
                                  'Added photo',
                                  e.data.id
                                ),
                                s(function () {
                                  c.hide(e.data),
                                    k.uploadReset(),
                                    void 0 === e.data.is_visible
                                      ? (k.toast('Photo Uploaded'),
                                        k.refreshLocation())
                                      : e.data.is_visible
                                      ? k.toast('Photo Uploaded')
                                      : k.toast(
                                          'Thank you for your submission. Your photo will appear in PlugShare after processing completes.',
                                          2e4
                                        );
                                }, 1e3))
                              : e.error &&
                                (void 0,
                                (k.upload.error = e.error),
                                (k.upload.processing = !1),
                                k.update());
                        }))
                : (k.upload.error = 'Please select a file to upload.');
          }),
          (k.uploadChange = function (e, t, o) {
            if ((void 0, void 0, (k[e].error = ''), t.files && t.files[0])) {
              var a = new FileReader();
              (a.onload = function (e) {
                angular.element('#attachment' + o).attr('src', e.target.result);
              }),
                a.readAsDataURL(t.files[0]),
                (k[e]['fileName' + o] = t.files[0].name),
                k.update();
            }
          }),
          (k.clearUpload = function (e, t) {
            (k[e].error = ''),
              angular.element('#photo_upload' + t).val(''),
              (k[e]['fileName' + t] = null);
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.MessageController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.message = {}),
          (k.messageReset = function (e) {
            e || k.cancel('messageReset'),
              (k.message = { error: '', processing: !1 });
          }),
          k.messageReset(!0),
          (k.showMessage = function (e) {
            k.messageReset(),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'send_message'),
                      k.mobileMargin(),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/message.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.submitMessage = function () {
            void 0,
              (k.message.error = ''),
              k.markErrors(k.messageForm)
                ? (k.message.error = 'Please fill out all required fields')
                : (void 0,
                  (k.message.processing = !0),
                  f
                    .messageOwner(
                      k.user.id,
                      k.location.owner.id,
                      k.message.message
                    )
                    .then(function (e) {
                      void 0,
                        e.success && e.data
                          ? (k.ga(
                              'send',
                              'event',
                              'messaging',
                              'sent_message',
                              'Sent message',
                              e.data.id,
                              k.message.message
                            ),
                            c.hide(e.data),
                            k.messageReset(),
                            k.toast('Owner Messaged'))
                          : e.error &&
                            (void 0,
                            (k.message.error = e.error),
                            (k.message.processing = !1),
                            k.update());
                    }));
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.AuthController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.stripError = function (e) {
          return e.replace('PreAuthentication failed with error ', '');
        }),
          (k.setCognitoUser = function (t, o) {
            var a = _.findKey(t, { Name: 'custom:plugshare_id' });
            if (void 0 != a) {
              var n = t[a].Value;
              void 0,
                f.getUser(n).then(function (t) {
                  if ((void 0, t.success && t.user)) {
                    if (
                      (k.ga(
                        'send',
                        'event',
                        'user',
                        'login',
                        'User logged in',
                        t.user.id,
                        t.user
                      ),
                      (k.user = t.user),
                      k.resetLoginReminder(),
                      (k.pendingEmail = w.pendingEmail),
                      k.checkAppearance(),
                      k.user.vehicles.length)
                    )
                      if (k.activeVehicleId) {
                        var a = _.findKey(k.user.vehicles, {
                          id: k.activeVehicleId,
                        });
                        void 0 != a
                          ? (k.activeVehicleIndex = a)
                          : (k.activeVehicleIndex = 0);
                      } else k.activeVehicleIndex = 0;
                    else k.activeVehicleIndex = 0;
                    k.selectVehicle(k.activeVehicleIndex),
                      k.replaceLocalOutlets(),
                      k.checkFilters(),
                      k.checkAllOutletsShowing(),
                      k.filters.filter_residential &&
                        (k.location &&
                          k.location.id &&
                          (k.preventNearbyFlag = !0),
                        k.refetch(),
                        k.refreshLocation()),
                      k.replaceLocalOutlets(),
                      k.checkFilters(),
                      k.checkAllOutletsShowing(),
                      k.checkAccess(),
                      k.getLocationUserCheckins(),
                      'login' == o &&
                        (w.verifyEmailStatus
                          ? (w.verifyEmailStatus = null)
                          : k.toast('Successfully Logged In')),
                      'register' == o
                        ? (k.ga(
                            'send',
                            'event',
                            'user',
                            'signup',
                            'User signed up',
                            k.user.id
                          ),
                          k.ga(
                            'send',
                            'event',
                            'signup',
                            'success',
                            k.getIntent(),
                            Date.now() - k.registerStartTime
                          ),
                          dataLayer.push({ event: 'gtm.registerSuccess' }),
                          (k.auth.tip =
                            u('translate')('Account created') +
                            '. ' +
                            u('translate')(
                              'Please enter the confirmation code sent to your email to verify your account'
                            )),
                          (k.auth.mode = 'verify'),
                          (k.auth.processing = !1),
                          s(function () {
                            angular.element('#verificationCode').focus();
                          }, 100),
                          k.setCookie(
                            'v2_plugshare_accepted_privacy_policy_v' +
                              policy_version,
                            1,
                            'essential'
                          ),
                          k.eu || (k.showPolicy = !1))
                        : 'social' == o
                        ? k.user.setup_complete
                          ? (k.ga(
                              'send',
                              'event',
                              'user',
                              'socialSignIn signin success',
                              k.socialProvider,
                              1
                            ),
                            k.toast('Successfully Logged In'))
                          : (k.user &&
                              k.user.is_first_login &&
                              (k.ga(
                                'send',
                                'event',
                                'user',
                                'socialSignIn register success',
                                k.socialProvider,
                                1
                              ),
                              k.ga(
                                'send',
                                'event',
                                'user',
                                'signup',
                                'User signed up',
                                k.user.id
                              ),
                              k.ga(
                                'send',
                                'event',
                                'signup',
                                'success',
                                k.getIntent(),
                                0
                              ),
                              dataLayer.push({ event: 'gtm.registerSuccess' })),
                            k.initialized
                              ? k.showRegister(null, null, 'resumeRegister')
                              : ((k.directAction = 'resumeRegister'), void 0))
                        : (k.verifyMode
                            ? ((k.auth.processing = !1), (k.verifyMode = !1))
                            : e.initializeEvents.changelogSkipCancel
                            ? (e.initializeEvents.changelogSkipCancel = !1)
                            : k.maps_action
                            ? void 0
                            : (void 0,
                              c.hide(k.user.id + ': ' + k.user.display_name)),
                          k.getBookmarks(),
                          k.getTrips(),
                          k.getChargeSessions(),
                          k.eu ||
                            (k.user.has_accepted_current_privacy_policy
                              ? ((k.showPolicy = !1), s.cancel(k.policyDelay))
                              : k.sessionAcceptedPolicy
                              ? f.acceptPrivacyPolicy()
                              : (k.showPolicy = !0)));
                  } else t.error && (k.ga('send', 'event', 'user', 'login_error', JSON.stringify(t.error), 0, null), void 0, (k.auth.error = k.stripError(t.error)), (k.auth.processing = !1), k.update());
                  'init' == o &&
                    ((k.initialized = !0),
                    k.mapsActionWaitForInitialized && k.mapsActionCallback(),
                    k.tryDirectAction(),
                    k.loadAds());
                });
            } else void 0, k.logout();
            var i = _.findKey(t, { Name: 'email_verified' });
            void 0 != i &&
              'false' == t[i].Value &&
              (void 0, (k.unverified = !0));
          }),
          (k.passwordHint = !0),
          (k.passwordCheck = function (e, t) {
            var o = k.localization.password_policy,
              a = !0;
            if (e)
              for (var s = 0; s < o.length; s++)
                if (o[s].regex) {
                  var n = RegExp(o[s].regex);
                  n.test(e) || (a = !1);
                }
            void 0,
              'authForm' == t
                ? k.authForm.password.$setValidity('passwordPolicy', a)
                : 'passForm' == t
                ? k.authForm.new_password.$setValidity('passwordPolicy', a)
                : 'forgotForm' == t &&
                  k.forgotForm.newPassword.$setValidity('passwordPolicy', a),
              (k.passwordHint = !1);
          }),
          (k.auth = {}),
          (k.authReset = function () {
            (k.auth = {
              type: null,
              error: '',
              tip: '',
              processing: !1,
              touched: !1,
              graphic: !1,
              policy: !0,
              mode: null,
              continueWithEmail: !1,
            }),
              (k.passwordHint = !0);
          }),
          k.authReset(),
          (k.viewContinueEmail = function () {
            (k.auth.continueWithEmail = !0), k.update();
          }),
          (k.showLogin = function (e, t, o) {
            (k.auth.error = ''),
              (k.auth.tip = ''),
              (k.auth.continueWithEmail = !1),
              k.emailChangeTip &&
                ((k.emailChangeTip = null),
                (k.auth.tip = k.auth.tip =
                  u('translate')(
                    'Please login to your account to change your email'
                  )),
                (k.auth.hideSocial = !0),
                k.changeEmailPrefill &&
                  ((k.auth.email = k.changeEmailPrefill),
                  (k.changeEmailPrefill = null))),
              k.resetAnimation('graphic'),
              o && k.getIntent(o),
              k.auth.type
                ? (void 0, (k.auth.type = 'login'))
                : ((k.auth.type = 'login'),
                  c
                    .show({
                      controller: function () {
                        return (
                          k.ga('send', 'pageview', 'login'),
                          k.ga(
                            'send',
                            'event',
                            'login',
                            'began',
                            k.getIntent(null, 'Direct Login')
                          ),
                          k.mobileMargin(),
                          s(function () {
                            angular.element('#email').focus();
                          }, 1e3),
                          k
                        );
                      },
                      controllerAs: 'maps',
                      templateUrl: 'app/main/templates/authenticate.tmpl.html',
                      parent: k.body,
                      targetEvent: e,
                      clickOutsideToClose: !1,
                      escapeToClose: !1,
                    })
                    .then(
                      function (o) {
                        void 0,
                          k.ga(
                            'send',
                            'event',
                            'login',
                            'success',
                            k.getIntent(null, 'Direct Login')
                          ),
                          k.mobilePlannerMargin(),
                          k.authenticated()
                            ? t
                              ? 'completeRegister' != o ||
                                'showProfile' != t ||
                                k.user.vehicles.length
                                ? k.callbackAction(e, t)
                                : k.addVehicle(e, !0)
                              : 'register' == k.auth.type && k.addVehicle(e, !0)
                            : k['try'](e, t);
                      },
                      function () {
                        void 0,
                          k.ga(
                            'send',
                            'event',
                            'login',
                            'cancel',
                            k.getIntent(null, 'Direct Login')
                          ),
                          k.mobilePlannerMargin();
                      }
                    )
                    ['finally'](function () {
                      k.authReset(), p.remove('v2_interaction_callback');
                    }));
          }),
          (k.submitLogin = function () {
            void 0,
              (k.auth.error = ''),
              k.markErrors(k.authForm)
                ? (k.auth.error = 'Please fill out all required fields')
                : (void 0,
                  (k.auth.processing = !0),
                  k.logout(!0),
                  w
                    .authenticateUser(k.auth.email, k.auth.password)
                    .then(function (e) {
                      void 0,
                        e.success
                          ? (void 0,
                            w.getSession().then(function (e) {
                              void 0,
                                void 0,
                                e
                                  ? (void 0, k.setCognitoUser(e, 'login'))
                                  : k.logout(!0);
                            }))
                          : (void 0,
                            'UserMigration failed with error Auth Failed.' ==
                            e.error
                              ? (k.auth.error = 'User credentials do not exist')
                              : 'Password reset required for the user' ==
                                e.error
                              ? (void 0, k.showForgotPassword(null, null, !0))
                              : (k.auth.error = k.stripError(e.error)),
                            (k.auth.processing = !1),
                            k.update());
                    }));
          }),
          (k.getIntent = function (e, t) {
            return (
              'addPublicLocation' == e && (k.intent = 'Add Public Location'),
              'addResidentialLocation' == e &&
                (k.intent = 'Add Private Location'),
              'showUpload' == e && (k.intent = 'Add Photo'),
              'showCheckin' == e && (k.intent = 'Check In'),
              'addBookmark' == e && (k.intent = 'Bookmark Location'),
              'editLocation' == e && (k.intent = 'Edit Location'),
              'showMessage' == e && (k.intent = 'Message User'),
              'showPlanner' == e &&
                ('showPlanner' == k.directAction
                  ? ((k.intent = 'Direct Trip Planner'),
                    (k.directAction = null))
                  : (k.intent = 'Open Trip Planner')),
              k.intent || (k.intent = t ? t : 'Direct Registration'),
              k.intent
            );
          }),
          (k.showRegister = function (e, t, o) {
            if (p.get('v2_interaction_callback') && !t)
              t = p.get('v2_interaction_callback');
            else if (t) {
              var a = new Date(),
                n = new Date(a);
              n.setMinutes(a.getMinutes() + 10),
                k.setCookie('v2_interaction_callback', t, 'essential', n);
            }
            (k.passwordHint = !0),
              (k.auth.error = ''),
              (k.auth.tip = ''),
              (k.auth.hideSocial = !1),
              (k.auth.continueWithEmail = !1),
              k.authenticated()
                ? (void 0, 'home.register' == m.current.name && m.go('home'))
                : ((k.registerStartTime = Date.now()),
                  p.get('v2_geo_zip') &&
                    (k.auth.zip_code = p.get('v2_geo_zip')),
                  p.get('v2_geo_country') &&
                    (k.auth.country = p.get('v2_geo_country')),
                  k.resetAnimation('graphic'),
                  void 0,
                  country_code &&
                    'XX' != country_code &&
                    (void 0,
                    (k.auth.country_code = country_code),
                    k.checkCountry()),
                  k.auth.type
                    ? (void 0, (k.auth.type = 'register'))
                    : ((k.auth.type = 'register'),
                      c
                        .show({
                          controller: function () {
                            return (
                              k.mobileMargin(),
                              k.user &&
                                k.user.email &&
                                (k.auth.email = k.user.email),
                              k.user &&
                                k.user.display_name &&
                                (k.auth.display_name = k.user.display_name),
                              o ||
                                (k.ga('send', 'pageview', 'signup'),
                                k.ga(
                                  'send',
                                  'event',
                                  'signup',
                                  'began',
                                  k.getIntent(),
                                  k.registerStartTime
                                )),
                              o && 'verify' == o
                                ? ((k.auth.tip =
                                    u('translate')(
                                      'Please enter the confirmation code sent to your email to verify your account'
                                    ) + '.'),
                                  (k.auth.mode = 'verify'),
                                  s(function () {
                                    angular
                                      .element('#verificationCode')
                                      .focus();
                                  }, 1e3))
                                : o && 'linkRegister' == o
                                ? ((k.auth.mode = 'link'),
                                  k.ga(
                                    'send',
                                    'event',
                                    'signup',
                                    'link account',
                                    k.socialProviderLink,
                                    1
                                  ))
                                : (p.get('v2_geo_zip') &&
                                    (k.auth.zip_code = p.get('v2_geo_zip')),
                                  p.get('v2_geo_country') &&
                                    (k.auth.country = p.get('v2_geo_country')),
                                  o &&
                                  [
                                    'resumeRegister',
                                    'completeProfile',
                                    'completeProfileTry',
                                  ].includes(o)
                                    ? ((k.auth.mode = 'complete'),
                                      'resumeRegister' == o
                                        ? (k.auth.tip =
                                            u('translate')(
                                              'Social sign in success'
                                            ) +
                                            '. ' +
                                            u('translate')(
                                              'Please complete the form to complete registration'
                                            ) +
                                            '.')
                                        : 'completeProfile' == o
                                        ? (k.auth.tip =
                                            u('translate')(
                                              'Please complete the form to complete registration'
                                            ) + '.')
                                        : o &&
                                          'completeProfileTry' == o &&
                                          (k.auth.tip =
                                            u('translate')(
                                              'Please complete registration to perform this action'
                                            ) + '.'),
                                      k.mobile ||
                                        k.auth.display_name ||
                                        s(function () {
                                          angular.element('#username').focus();
                                        }, 1e3))
                                    : o && 'errorRegister' == o
                                    ? (k.auth.error = k.errorRegister)
                                    : s(function () {
                                        angular.element('#email').focus();
                                      }, 1e3)),
                              k
                            );
                          },
                          controllerAs: 'maps',
                          templateUrl:
                            'app/main/templates/authenticate.tmpl.html',
                          parent: k.body,
                          targetEvent: e,
                          clickOutsideToClose: !1,
                          escapeToClose: !1,
                        })
                        .then(
                          function (o) {
                            void 0,
                              k.mobilePlannerMargin(),
                              k.authenticated()
                                ? t
                                  ? 'completeRegister' != o ||
                                    'showProfile' != t ||
                                    k.user.vehicles.length
                                    ? k.callbackAction(e, t)
                                    : k.addVehicle(e, !0)
                                  : 'register' == k.auth.type &&
                                    k.addVehicle(e, !0)
                                : k['try'](e, t);
                          },
                          function () {
                            void 0,
                              k.mobilePlannerMargin(),
                              k.auth.mode ||
                                k.ga(
                                  'send',
                                  'event',
                                  'signup',
                                  'cancel',
                                  k.getIntent(),
                                  Date.now() - k.registerStartTime
                                );
                          }
                        )
                        ['finally'](function () {
                          k.authReset(),
                            'home.register' == m.current.name && m.go('home'),
                            p.remove('v2_interaction_callback');
                        })));
          }),
          (k.submitRegister = function () {
            if ((void 0, (k.auth.error = ''), k.markErrors(k.authForm)))
              k.auth.error = 'Please fill out all required fields';
            else {
              void 0, (k.auth.processing = !0);
              var e = {
                email: k.auth.email.trim(),
                password: k.auth.password,
                locale: k.languages[k.language].code,
              };
              w.signUp(e).then(function (e) {
                void 0,
                  e.success && e.data
                    ? w
                        .authenticateUser(k.auth.email, k.auth.password, !0)
                        .then(function (e) {
                          void 0,
                            e.success
                              ? (void 0,
                                w.getSession().then(function (e) {
                                  void 0,
                                    void 0,
                                    e
                                      ? (void 0,
                                        k.setCognitoUser(e, 'register'))
                                      : k.logout(!0);
                                }))
                              : (void 0,
                                (k.auth.error = k.stripError(e.error)),
                                (k.auth.processing = !1),
                                k.update());
                        })
                    : e.error &&
                      (void 0,
                      (k.user = null),
                      'PreSignUp failed with error Email already exists.' ==
                      e.error
                        ? (k.auth.error = 'Email already exists')
                        : (k.auth.error = k.stripError(e.error)),
                      k.ga(
                        'send',
                        'event',
                        'user',
                        'signup_error',
                        k.auth.error,
                        0,
                        null
                      ),
                      k.ga(
                        'send',
                        'event',
                        'signup',
                        'error',
                        k.auth.error,
                        Date.now() - k.registerStartTime
                      ),
                      (k.auth.processing = !1),
                      k.update());
              });
            }
          }),
          (k.submitChangeEmail = function () {
            if ((void 0, (k.auth.error = ''), k.markErrors(k.authForm)))
              k.auth.error = 'Please fill out all required fields';
            else {
              void 0, (k.auth.processing = !0);
              var e = {
                email: k.auth.new_email.trim(),
                password: k.auth.password,
              };
              w.authenticateUser(k.user.email, k.auth.password, null, !0).then(
                function (t) {
                  void 0,
                    t.success
                      ? (void 0,
                        (e.previous_cognito_id = t.data),
                        w.updateEmail(k.user.email, e.email).then(function (e) {
                          e.success
                            ? (k.ga(
                                'send',
                                'event',
                                'user',
                                'change_email',
                                'Submit Change Email',
                                1
                              ),
                              (k.pendingEmail = w.pendingEmail),
                              k.changeEmail())
                            : ((k.auth.error = e.error),
                              (k.auth.processing = !1),
                              k.update());
                        }))
                      : ((k.auth.error = k.stripError(t.error)),
                        (k.auth.processing = !1),
                        k.update());
                }
              );
            }
          }),
          (k.completeRegister = function () {
            if ((void 0, (k.auth.error = ''), k.markErrors(k.authForm)))
              k.auth.error = 'Please fill out all required fields';
            else {
              void 0, (k.auth.processing = !0);
              var e = {
                display_name: k.auth.display_name,
                country_code: k.auth.country_code,
                zip_code: k.auth.zip_code,
                allow_promo_email: k.auth.allow_promo_email,
                setup_complete: !0,
                ad_attribution_data: {},
              };
              k.visits && (e.ad_attribution_data.visit_count = k.visits),
                k.signupReminderCount &&
                  (e.ad_attribution_data.signup_reminder_count =
                    k.signupReminderCount),
                k.intent &&
                  (e.ad_attribution_data.registration_intent = k.intent),
                f.updateProfile(e).then(function (e) {
                  void 0,
                    e.success && e.data
                      ? (k.ga(
                          'send',
                          'event',
                          'user',
                          'edit',
                          'Complete user profile',
                          e.data.id
                        ),
                        (k.user = e.data),
                        c.hide('completeRegister'),
                        (k.auth.processing = !1),
                        k.update(),
                        k.toast('Registration Complete'))
                      : e.error &&
                        (void 0,
                        (k.auth.error = k.stripError(e.error)),
                        (k.auth.processing = !1),
                        k.update());
                });
            }
          }),
          (k.directRegister = function () {
            1 != k.visits && 5 != k.visits
              ? (void 0, k.showRegister())
              : m.go('home');
          }),
          (k.resendConfirmationCode = function () {
            (k.auth.processing = !0),
              (k.auth.tip = ''),
              (k.auth.error = ''),
              w.resendConfirmationCode().then(function (e) {
                void 0,
                  e.success
                    ? (k.ga(
                        'send',
                        'event',
                        'user',
                        'resend',
                        'User resend confirmation code',
                        1
                      ),
                      (k.auth.tip =
                        u('translate')('Email Sent') +
                        '. ' +
                        u('translate')(
                          'Please enter the confirmation code sent to your email to verify your account'
                        ) +
                        '.'),
                      k.toast('Email Sent'))
                    : (k.auth.error = k.stripError(e.error)),
                  (k.auth.processing = !1),
                  k.update();
              });
          }),
          (k.verifyEmail = function () {
            k.auth.verificationCode &&
              ((k.auth.processing = !0),
              (k.auth.tip = ''),
              (k.auth.error = ''),
              w.verify_email(k.auth.verificationCode).then(function (e) {
                void 0,
                  e.success
                    ? k.user.setup_complete
                      ? k.verifyEmailCompleted(k.user.id)
                      : (k.ga(
                          'send',
                          'event',
                          'user',
                          'verify',
                          'User verified email',
                          1
                        ),
                        k.toast(
                          u('translate')('Email successfully verified'),
                          1e4
                        ),
                        (k.unverified = !1),
                        (k.auth.mode = 'complete'),
                        (k.auth.tip =
                          u('translate')('Email successfully verified') +
                          '. ' +
                          u('translate')(
                            'Please finish your profile details to complete registration'
                          ) +
                          '.'),
                        (k.auth.error = ''),
                        (k.auth.processing = !1),
                        k.update())
                    : ((k.auth.error = k.stripError(e.error)),
                      (k.auth.processing = !1),
                      k.update());
              }));
          }),
          (k.verifyEmailCompleted = function (e, t) {
            w.checkRefreshTokenPromise(!0).then(function () {
              f.getUser(e).then(function (e) {
                void 0,
                  e.success &&
                    e.user &&
                    (t && k.showChangeEmail(null, 'complete'),
                    (k.user = e.user),
                    k.ga(
                      'send',
                      'event',
                      'user',
                      'verify',
                      'User verified email change',
                      1
                    ),
                    k.toast(u('translate')('Email successfully verified'), 1e4),
                    (k.unverified = !1),
                    (k.pendingEmail = null),
                    (k.auth.new_email = k.user.email),
                    void 0,
                    (k.auth.mode = 'complete'),
                    (k.auth.error = '')),
                  (k.auth.processing = !1),
                  k.update();
              });
            });
          }),
          (k.verificationCodeCheck = function () {
            void 0;
            var e = 6;
            k.auth.verificationCode &&
              k.auth.verificationCode.length > e &&
              ((k.auth.verificationCode = k.auth.verificationCode.slice(0, e)),
              k.update());
          }),
          (k.directRegister = function () {
            1 != k.visits && 5 != k.visits
              ? (void 0, k.showRegister())
              : m.go('home');
          }),
          (k.socialSignIn = function (e) {
            k.auth.processing ||
              (void 0,
              k.ga('send', 'event', 'user', 'socialSignIn start', e, 1),
              k.setCookie('v2_social_provider', e, 'essential'),
              k.intent &&
                k.setCookie('v2_social_auth_intent', k.intent, 'essential'),
              w.socialSignIn(e));
          }),
          (k.closeAuth = function () {
            void 0, (k.intent = null), k.cancel();
          }),
          (k.logout = function (t, o) {
            (!e.tripPlanner ||
              (e.tripPlanner &&
                confirm(
                  'Are you sure you want to logout? Any unsaved changes to Trip Planner will be lost'
                ))) &&
              (w.signOut(),
              (k.user = null),
              o && (k.intent = null),
              (k.socialProvider = null),
              f.logout(),
              k.latestBookmarks(),
              k.latestTrips(),
              k.location && k.checkAccess(),
              p.remove('v2_plugshare_email'),
              p.remove('v2_plugshare_password'),
              p.remove('v2_social_provider'),
              p.remove('v2_active_vehicle_id'),
              p.remove('v2_active_payment_source'),
              p.remove('v2_active_charge_session_id'),
              (k.activeChargeSessionId = null),
              t || k.toast('Successfully Logged Out'),
              e.tripPlanner && k.closePlanner(),
              (k.unverified = !1),
              (k.pendingEmail = null),
              (k.allCheckins = !1));
          }),
          (k.showChangeEmail = function (e, t) {
            c.show({
              controller: function () {
                return (
                  k.ga('send', 'pageview', 'change_email'),
                  k.mobileMargin(),
                  (k.auth.type = 'change'),
                  (k.auth.mode = 'request_change'),
                  t && 'verify' == t
                    ? ((k.auth.mode = 'verify'),
                      k.pendingEmail && (k.auth.new_email = k.pendingEmail),
                      s(function () {
                        angular.element('#verificationCode').focus();
                      }, 1e3))
                    : t &&
                      'complete' == t &&
                      ((k.auth.new_email = k.user.email),
                      void 0,
                      (k.auth.mode = 'complete'),
                      (k.auth.error = '')),
                  k
                );
              },
              controllerAs: 'maps',
              templateUrl: 'app/main/templates/authenticate.tmpl.html',
              parent: k.body,
              targetEvent: e,
              clickOutsideToClose: !1,
              escapeToClose: !1,
            })
              .then(
                function (e) {
                  void 0, k.mobilePlannerMargin();
                },
                function () {
                  void 0, k.mobilePlannerMargin();
                }
              )
              ['finally'](function () {
                k.authReset();
              });
          }),
          (k.changeEmail = function () {
            (k.auth.tip = u('translate')(
              'Until you confirm this new email, you must continue to log in with your existing email and password'
            )),
              (k.auth.mode = 'verify'),
              (k.auth.processing = !1),
              k.update(),
              s(function () {
                angular.element('#verificationCode').focus();
              }, 10);
          }),
          (k.cancelChangeEmail = function () {
            confirm('Are you sure you want to cancel changing your email?') &&
              w.deleteUpdateEmail().then(function (e) {
                void 0,
                  e.success &&
                    (k.ga(
                      'send',
                      'event',
                      'user',
                      'change_email',
                      'Cancel Change Email',
                      0
                    ),
                    k.toast('Email Change Canceled'),
                    (k.pendingEmail = null));
              });
          }),
          (k.showChangePassword = function (e) {
            c.show({
              controller: function () {
                return (
                  k.ga('send', 'pageview', 'change_password'),
                  k.mobileMargin(),
                  (k.auth.type = 'change_password'),
                  (k.auth.mode = 'change_password'),
                  (k.auth.old_password = ''),
                  (k.auth.new_password = ''),
                  (k.auth.repeat_new_password = ''),
                  (k.auth.reset_show_forgot = !1),
                  k
                );
              },
              controllerAs: 'maps',
              templateUrl: 'app/main/templates/authenticate.tmpl.html',
              parent: k.body,
              targetEvent: e,
              clickOutsideToClose: !1,
              escapeToClose: !1,
            })
              .then(
                function (e) {
                  void 0, k.mobilePlannerMargin();
                },
                function () {
                  void 0, k.mobilePlannerMargin();
                }
              )
              ['finally'](function () {
                k.authReset();
              });
          }),
          (k.submitChangePassword = function () {
            void 0,
              (k.auth.error = ''),
              k.markErrors(k.authForm)
                ? (k.auth.error = 'Please fill out all required fields')
                : (void 0,
                  (k.auth.processing = !0),
                  w
                    .changePassword(
                      k.auth.current_password,
                      k.auth.new_password
                    )
                    .then(function (e) {
                      void 0,
                        e.success
                          ? (k.ga(
                              'send',
                              'event',
                              'user',
                              'change_password',
                              'Submit Change Password',
                              1
                            ),
                            k.toast(
                              u('translate')('Password successfully updated')
                            ),
                            c.hide('Password successfully updated'))
                          : (k.ga(
                              'send',
                              'event',
                              'user',
                              'change_password',
                              'Submit Change Password Fail',
                              0
                            ),
                            (k.auth.error = e.error),
                            'Incorrect username or password.' == k.auth.error &&
                              (k.auth.error = 'Incorrect password')),
                        (k.auth.processing = !1),
                        k.update();
                    }));
          }),
          (k.showDeleteAccount = function (e) {
            c.show({
              controller: function () {
                return (
                  k.ga('send', 'pageview', 'delete_account'),
                  k.mobileMargin(),
                  (k.auth.type = 'delete_account'),
                  (k.auth.mode = 'delete_account'),
                  k
                );
              },
              controllerAs: 'maps',
              templateUrl: 'app/main/templates/authenticate.tmpl.html',
              parent: k.body,
              targetEvent: e,
              clickOutsideToClose: !1,
              escapeToClose: !1,
            })
              .then(
                function (e) {
                  void 0, k.mobilePlannerMargin();
                },
                function () {
                  void 0, k.mobilePlannerMargin();
                }
              )
              ['finally'](function () {
                k.authReset();
              });
          }),
          (k.submitDeleteAccount = function () {
            void 0,
              (k.auth.error = ''),
              k.markErrors(k.authForm)
                ? (k.auth.error = 'Please fill out all required fields')
                : (void 0,
                  (k.auth.processing = !0),
                  k.socialProvider
                    ? (k.ga(
                        'send',
                        'event',
                        'user',
                        'delete_account',
                        'Submit Delete Social Account',
                        1
                      ),
                      k.deletePlugshareAccount())
                    : confirm(
                        u('translate')(
                          'Are you sure you want to delete your PlugShare account'
                        ) +
                          '? ' +
                          u('translate')('This action cannot be undone')
                      )
                    ? (k.ga(
                        'send',
                        'event',
                        'user',
                        'delete_account',
                        'Submit Delete Account',
                        1
                      ),
                      w
                        .authenticateUser(k.user.email, k.auth.password)
                        .then(function (e) {
                          void 0,
                            e.success
                              ? k.deletePlugshareAccount()
                              : e.error &&
                                ((k.auth.error = e.error),
                                'Incorrect username or password.' ==
                                  k.auth.error &&
                                  (k.auth.error = 'Incorrect password'),
                                (k.auth.processing = !1),
                                k.update());
                        }))
                    : (k.ga(
                        'send',
                        'event',
                        'user',
                        'delete_account',
                        'Canceled Submit Delete Account',
                        0
                      ),
                      (k.auth.processing = !1),
                      k.update()));
          }),
          (k.deletePlugshareAccount = function () {
            (k.auth.processing = !0),
              f.deleteAccount().then(function (e) {
                void 0,
                  e.success
                    ? (k.ga(
                        'send',
                        'event',
                        'user',
                        'delete_account',
                        'Account successfully deleted',
                        1
                      ),
                      k.logout(!0),
                      k.toast(
                        u('translate')('Account successfully deleted'),
                        1e4
                      ),
                      c.hide('Account successfully deleted'))
                    : e.error && (k.auth.error = e.error),
                  (k.auth.processing = !1),
                  k.update();
              });
          }),
          (k.promo_email_touched = !1),
          (k.checkCountry = function () {
            k.auth.country_code &&
              k.localization &&
              k.localization.allow_promo_email_enabled_countries &&
              (-1 !==
              k.localization.allow_promo_email_enabled_countries.indexOf(
                k.auth.country_code
              )
                ? (k.auth.allow_promo_email = !0)
                : (k.auth.allow_promo_email = !1),
              k.update());
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.ForgotController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.forgot = {}),
          (k.forgotReset = function (e) {
            e || k.cancel('forgotReset'),
              (k.forgot = {
                email: '',
                verificationCode: '',
                newPassword: '',
                error: '',
                tip: '',
                reset: !1,
                processing: !1,
              });
          }),
          k.forgotReset(!0),
          (k.showForgotPassword = function (e, t, o) {
            k.forgotReset(),
              (k.passwordHint = !0),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'forgot_password'),
                      k.mobileMargin(),
                      t
                        ? ((k.forgot.email = w.forgotEmail),
                          (k.forgot.verificationCode = t),
                          (k.forgot.reset = !0),
                          k.update(),
                          k.mobile ||
                            s(function () {
                              angular.element('#newPassword').focus();
                            }, 1e3))
                        : k.mobile ||
                          s(function () {
                            angular.element('#forgotEmail').focus();
                          }, 1e3),
                      o &&
                        ((k.forgot.email = w.forgotEmail),
                        (k.forgot.tip =
                          'Our updated security measures require you to reset your password. Please check your email and enter the reset code below'),
                        (k.forgot.reset = !0),
                        k.update(),
                        k.mobile ||
                          s(function () {
                            angular.element('#verificationCode').focus();
                          }, 1e3)),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/forgot.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.cognitoForgotPassword = function () {
            (k.forgot.processing = !0),
              k.forgot.reset
                ? ((k.forgot.tip = ''),
                  w
                    .updatePassword(
                      k.forgot.verificationCode,
                      k.forgot.newPassword
                    )
                    .then(function (e) {
                      void 0,
                        void 0,
                        e.success
                          ? (c.hide('success'),
                            k.toast(
                              u('translate')('Password successfully updated')
                            ),
                            k.user ||
                              w
                                .authenticateUser(
                                  w.forgotEmail,
                                  k.forgot.newPassword
                                )
                                .then(function (e) {
                                  void 0,
                                    e.success
                                      ? (void 0,
                                        w.getSession().then(function (e) {
                                          void 0,
                                            void 0,
                                            e
                                              ? (void 0,
                                                k.setCognitoUser(e, 'login'))
                                              : k.logout(!0);
                                        }))
                                      : k.showLogin();
                                }))
                          : ((k.forgot.processing = !1),
                            (k.forgot.error = e.error),
                            k.update());
                    }))
                : ((w.forgotEmail = k.forgot.email),
                  w.forgotPassword().then(function (e) {
                    void 0,
                      void 0,
                      e.success
                        ? (k.ga(
                            'send',
                            'event',
                            'user',
                            'reset',
                            'User reset password',
                            0
                          ),
                          (k.forgot.reset = !0),
                          (k.forgot.tip = 'Reset code sent to email'),
                          s(function () {
                            angular.element('#verificationCode').focus();
                          }, 100))
                        : (k.forgot.error = e.error),
                      (k.forgot.processing = !1),
                      k.update();
                  }));
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.ProfileController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.profile = {}),
          (k.profileReset = function (e) {
            e || k.cancel('profileReset'),
              (k.profile = {
                error: '',
                loading: !1,
                processing: !1,
                touched: !1,
                edit: !1,
                display_name: null,
                activeModel: null,
                vehicle_plugs: [],
                view: 'recent',
                views: [],
                myViewsPage: 1,
                moreMyViews: !0,
                activities: [],
                myActivityPage: 1,
                moreMyActivity: !0,
              });
          }),
          k.profileReset(!0),
          (k.showProfile = function (e, t) {
            k.profileReset(),
              k.refetchProfile(),
              k.getStatistics(),
              (k.profile.charger_default =
                0 === k.profile.charger_type || null == k.profile.charger_type);
            var o = _.findKey(k.countryList, { code: k.profile.country_code });
            void 0 != o && (k.profile.country_name = k.countryList[o].name),
              t && (k.profile.edit = !0),
              (k.profile.loading = !0),
              k.getRecentlyViewed(),
              k.getUserActivities(),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'profile'), k.mobileMargin(), k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/profile.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.submitProfile = function () {
            if ((void 0, (k.profile.error = ''), k.markErrors(k.profileForm)))
              k.profile.error = 'Please fill out all required fields';
            else {
              void 0, (k.profile.processing = !0);
              var e = {
                email: k.profile.email.trim(),
                display_name: k.profile.display_name,
                phone: k.profile.phone,
                country_code: k.profile.country_code,
                zip_code: k.profile.zip_code,
                charger_type: parseInt(k.profile.charger_type),
                about: k.profile.about,
                allow_promo_email: k.profile.allow_promo_email,
              };
              f.updateProfile(e).then(function (t) {
                void 0,
                  t.success && t.data
                    ? (k.ga(
                        'send',
                        'event',
                        'user',
                        'edit',
                        'Edit user profile',
                        t.data.id
                      ),
                      t.data.email &&
                        k.setCookie('v2_plugshare_email', e.email, 'essential'),
                      (k.user = t.data),
                      c.hide(k.user.id + ': ' + k.user.display_name),
                      (k.profile.processing = !1),
                      k.update(),
                      k.toast('Profile Updated'))
                    : t.error &&
                      (void 0,
                      (k.profile.error = t.error),
                      (k.profile.processing = !1),
                      k.update());
              });
            }
          }),
          (k.profileShowTab = function (e) {
            k.ga(
              'send',
              'event',
              'profile',
              'view',
              'User view profile tab: ' + e,
              1
            ),
              (k.profile.view = e),
              k.update();
          }),
          (k.getRecentlyViewed = function (e) {
            k.profile.loading = !0;
            var t = {};
            e &&
              (k.ga(
                'send',
                'event',
                'profile',
                'view',
                'get more recently viewed locations',
                1
              ),
              (k.profile.myViewsPage = k.profile.myViewsPage + 1),
              (t.page = k.profile.myViewsPage)),
              f.getRecentlyViewed(t).then(function (t) {
                void 0,
                  t.length < 10 && (k.profile.moreMyViews = !1),
                  e || 0 != t.length || (k.profile.view = 'activity'),
                  (k.profile.views = k.profile.views.concat(t)),
                  'recent' == k.profile.view && (k.profile.loading = !1),
                  k.update();
              });
          }),
          (k.getUserActivities = function (e) {
            k.profile.loading = !0;
            var t = {};
            e &&
              (k.ga(
                'send',
                'event',
                'profile',
                'view',
                'get more user activities',
                1
              ),
              (k.profile.myActivityPage = k.profile.myActivityPage + 1),
              (t.page = k.profile.myActivityPage)),
              f.getUserActivities(t).then(function (e) {
                void 0,
                  e.length < 10 && (k.profile.moreMyActivity = !1),
                  (k.profile.activities = k.profile.activities.concat(e)),
                  'activity' == k.profile.view && (k.profile.loading = !1),
                  k.update();
              });
          }),
          (k.getStatistics = function () {
            f.getStatistics().then(function (e) {
              (k.statistics = e), k.update();
            });
          }),
          (k.updateEmail = function (e) {
            k.socialProvider
              ? (k.ga(
                  'send',
                  'event',
                  'user',
                  'change_email',
                  'Clicked Change Email with Social Auth',
                  0
                ),
                k.toast("Can't change email if logged in via Social Sign In"))
              : (k.ga(
                  'send',
                  'event',
                  'user',
                  'change_email',
                  'Clicked Change Email',
                  1
                ),
                k.showChangeEmail(e));
          }),
          (k.updatePassword = function (e) {
            k.socialProvider
              ? (k.ga(
                  'send',
                  'event',
                  'user',
                  'change_password',
                  'Clicked Change Password with Social Auth',
                  0
                ),
                k.toast(
                  "Can't change password if logged in via Social Sign In"
                ))
              : (k.ga(
                  'send',
                  'event',
                  'user',
                  'change_password',
                  'Clicked Change Password',
                  1
                ),
                k.showChangePassword(e));
          }),
          (k.deleteAccount = function (e) {
            k.ga(
              'send',
              'event',
              'user',
              'change_password',
              'Clicked Delete Account',
              1
            ),
              k.showDeleteAccount(e);
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.ReportController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.report = {}),
          (k.reportReset = function (e) {
            e || k.cancel('reportReset'),
              (k.report = { message: '', error: '', processing: !1 });
          }),
          k.reportReset(!0),
          (k.showReport = function (e, t) {
            k.reportReset(),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'flag_location'),
                      k.mobileMargin(),
                      t && (k.report.message = t),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/report.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.submitReport = function () {
            void 0,
              (k.report.error = ''),
              k.markErrors(k.reportForm)
                ? (k.report.error = 'Please fill out all required fields')
                : (void 0,
                  (k.report.processing = !0),
                  f
                    .reportLocation(k.location.id, k.report.message)
                    .then(function (e) {
                      void 0,
                        e.success && e.data
                          ? (k.ga(
                              'send',
                              'event',
                              'contribute',
                              'flag_location',
                              'Flagged location',
                              k.location.id
                            ),
                            c.hide(e.data),
                            k.reportReset(),
                            k.toast('Location Reported'))
                          : e.error &&
                            (void 0,
                            (k.report.error = e.error),
                            (k.report.processing = !1),
                            k.update());
                    }));
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.CookiesController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.cookieManagement = {}),
          (k.cookiesReset = function () {
            k.cookieManagement = {
              error: '',
              processing: !1,
              essential: !0,
              analytical: k.cookiePolicy.analytical,
              marketing: k.cookiePolicy.marketing,
            };
          }),
          k.cookiesReset(),
          (k.showCookies = function (e) {
            k.cookiesReset(),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'cookies'), k.mobileMargin(), k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/cookies.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !1,
                  escapeToClose: !1,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          }),
          (k.acceptCookies = function () {
            var e = '';
            k.cookieManagement.essential &&
              ((k.cookiePolicy.essential = !0), (e = e += 'e')),
              k.cookieManagement.analytical
                ? ((k.cookiePolicy.analytical = !0),
                  (e = e += 'a'),
                  (window['ga-disable-UA-21850385-1'] = !1),
                  k.loadAnalyticsScripts())
                : ((k.cookiePolicy.analytical = !1),
                  (window['ga-disable-UA-21850385-1'] = !0),
                  k.removeCookiesBy('_g')),
              k.cookieManagement.marketing
                ? ((k.cookiePolicy.marketing = !0),
                  (e = e += 'm'),
                  k.loadMarketingScripts())
                : (k.cookiePolicy.marketing = !1),
              f
                .cookieLog(
                  k.cookiePolicy.analytical,
                  k.cookiePolicy.marketing,
                  k.browser
                )
                .then(function (t) {
                  void 0,
                    void 0,
                    k.ga('send', 'event', 'cookies', 'acceptCookies', e, 1),
                    p.put('v2_cookiePolicy', e),
                    (k.showPolicy = !1),
                    c.hide(e),
                    k.toast('Cookie settings updated.');
                });
          }),
          (k.acceptAllCookies = function (e) {
            (k.cookiePolicy.essential = !0),
              (k.cookiePolicy.analytical = !0),
              (k.cookiePolicy.marketing = !0),
              f
                .cookieLog(
                  k.cookiePolicy.analytical,
                  k.cookiePolicy.marketing,
                  k.browser
                )
                .then(function (t) {
                  void 0,
                    void 0,
                    k.ga(
                      'send',
                      'event',
                      'cookies',
                      'acceptAllCookies',
                      'eam - ' + e,
                      1
                    ),
                    p.put('v2_cookiePolicy', 'eam'),
                    (k.showPolicy = !1),
                    (window['ga-disable-UA-21850385-1'] = !1),
                    k.ga(
                      'set',
                      'userId',
                      k.user && k.user.id ? k.user.id : null
                    ),
                    k.loadAnalyticsScripts(),
                    k.loadMarketingScripts(),
                    c.hide('eam'),
                    k.toast('Cookie settings updated.');
                });
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.BookmarkController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.isBookmarked = function () {
          return k.user &&
            k.location &&
            void 0 != _.findKey(f.bookmarks, { location_id: k.location.id })
            ? !0
            : !1;
        }),
          (k.latestBookmarks = function () {
            return f.bookmarks;
          }),
          (k.getBookmarks = function () {
            k.user &&
              !k.unverified &&
              k.user.setup_complete &&
              f.getBookmarks().then(function (e) {
                return void 0, e;
              });
          }),
          (k.addBookmark = function () {
            k.user &&
              k.location &&
              f.addBookmark(k.location.id).then(function (e) {
                e &&
                  (k.ga(
                    'send',
                    'event',
                    'location',
                    'add_bookmark',
                    'Add bookmark',
                    k.location.id
                  ),
                  k.toast('Bookmark Added'));
              });
          }),
          (k.removeBookmark = function (e, t) {
            t
              ? confirm('Are you sure you want to remove this bookmark?') &&
                f.removeBookmark(t).then(function (e) {
                  e &&
                    (k.ga(
                      'send',
                      'event',
                      'location',
                      'delete_bookmark',
                      'Delete bookmark',
                      k.location.id
                    ),
                    k.toast('Bookmark Removed'));
                })
              : k.location.id &&
                f.removeBookmark(k.location.id).then(function (e) {
                  e &&
                    (k.ga(
                      'send',
                      'event',
                      'location',
                      'delete_bookmark',
                      'Delete bookmark',
                      k.location.id
                    ),
                    k.toast('Bookmark Removed'));
                });
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.SettingsController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.showSettings = function (t) {
          c.show({
            controller: function () {
              return (
                k.ga('send', 'pageview', 'settings'),
                k.mobileMargin(),
                (k.metricSettings = k.metric ? !0 : !1),
                (k.embed = e.embed),
                k
              );
            },
            controllerAs: 'maps',
            templateUrl: 'app/main/templates/settings.tmpl.html',
            parent: k.body,
            targetEvent: t,
            clickOutsideToClose: !0,
            escapeToClose: !0,
          }).then(
            function (e) {
              void 0, k.mobilePlannerMargin();
            },
            function () {
              void 0, k.mobilePlannerMargin();
            }
          );
        }),
          (k.setUnits = function () {
            var t = k.metricSettings ? !0 : !1;
            void 0,
              (k.metric = t),
              k.setCookie('v2_trip_metric', t, 'essential'),
              k.ga(
                'send',
                'event',
                'units',
                'set_units',
                'Updated display units to ' +
                  (k.metric ? 'Metric' : 'Imperial'),
                1
              ),
              e.tripPlanner && k.updateRoute();
          }),
          (k.toggleUnits = function () {
            (k.metric = !k.metric),
              k.setCookie('v2_trip_metric', k.metric, 'essential'),
              k.setMapUnits(),
              k.ga(
                'send',
                'event',
                'units',
                'toggle_units',
                'Updated display units to ' +
                  (k.metric ? 'Metric' : 'Imperial'),
                1
              ),
              e.tripPlanner && k.updateRoute();
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.ChangelogController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        k.showChangeLog = function (e) {
          c.show({
            controller: function () {
              return k.ga('send', 'pageview', 'changelog'), k.mobileMargin(), k;
            },
            controllerAs: 'maps',
            templateUrl: 'app/main/templates/changelog.tmpl.html',
            parent: k.body,
            targetEvent: e,
            clickOutsideToClose: !0,
            escapeToClose: !0,
          }).then(
            function (e) {
              void 0, k.mobilePlannerMargin();
            },
            function () {
              void 0, k.mobilePlannerMargin();
            }
          );
        };
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.ReviewsController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        (k.checkinType = 1),
          (k.toggleMyCheckins = function () {
            k.checkinType = 1 == k.checkinType ? 2 : 1;
          }),
          (k.viewMyCheckins = function (e) {
            k.ga('send', 'event', 'user', 'checkins', 'Show user checkins', 1),
              (k.checkinType = 2),
              k.showReviews(e);
          }),
          (k.showReviews = function (e, t) {
            void 0,
              k.cancel('showReviews'),
              (k.singleReview = !1),
              c
                .show({
                  controller: function () {
                    return (
                      k.ga('send', 'pageview', 'reviews'),
                      k.mobileMargin(),
                      t
                        ? ((k.all_reviews = f.getReview(k.location.reviews, t)),
                          1 == k.all_reviews.length
                            ? (k.singleReview = !0)
                            : (k.all_reviews = f.getReviews(
                                k.location.reviews
                              )))
                        : (k.all_reviews = f.getReviews(k.location.reviews)),
                      k
                    );
                  },
                  controllerAs: 'maps',
                  templateUrl: 'app/main/templates/reviews.tmpl.html',
                  parent: k.body,
                  targetEvent: e,
                  clickOutsideToClose: !0,
                  escapeToClose: !0,
                })
                .then(
                  function (e) {
                    void 0, k.mobilePlannerMargin();
                  },
                  function () {
                    void 0, k.mobilePlannerMargin();
                  }
                );
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.StationsController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        k.showStations = function (e) {
          k.cancel('showStations'),
            c
              .show({
                controller: function () {
                  return (
                    k.ga('send', 'pageview', 'stations'), k.mobileMargin(), k
                  );
                },
                controllerAs: 'maps',
                templateUrl: 'app/main/templates/stations.tmpl.html',
                parent: k.body,
                targetEvent: e,
                clickOutsideToClose: !0,
                escapeToClose: !0,
              })
              .then(
                function (e) {
                  void 0, k.mobilePlannerMargin();
                },
                function () {
                  void 0, k.mobilePlannerMargin();
                }
              );
        };
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.PhotosController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        k.showPhotos = function (e, t) {
          void 0,
            k.cancel('showPhotos'),
            (k.featuredPhoto = null),
            c
              .show({
                controller: function () {
                  return (
                    k.ga('send', 'pageview', 'photos'),
                    k.mobileMargin(),
                    t && (k.featuredPhoto = f.getPhoto(k.location.photos, t)),
                    k
                  );
                },
                controllerAs: 'maps',
                templateUrl: 'app/main/templates/photos.tmpl.html',
                parent: k.body,
                targetEvent: e,
                clickOutsideToClose: !0,
                escapeToClose: !0,
              })
              .then(
                function (e) {
                  void 0, k.mobilePlannerMargin();
                },
                function () {
                  void 0, k.mobilePlannerMargin();
                }
              );
        };
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.AdController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b) {
        'ngInject';
        o(this, a), void 0;
        var k = t.$parent.maps;
        void 0,
          void 0,
          void 0,
          (k.side_ad_loaded = !1),
          (k.mobile_ad_loaded = !1),
          (k.ldv_ad_loaded = !1),
          (k.before_side_ad_loaded = !0),
          (k.before_mobile_ad_loaded = !0),
          (k.before_ldv_ad_loaded = !0),
          (k.refreshSlot = null),
          (k.initializedAds = !1),
          (k.ldvAdQueue = !1),
          (k.displayAd = !0),
          void 0,
          -1 !== document.referrer.indexOf('admin.plugshare.com') &&
            (k.displayAd = !1),
          void 0,
          (k.closeAd = function (e) {
            (k.displayAd = !1), k.ga('send', 'event', 'ad', 'close_ad', e);
          }),
          (k.loadAds = function () {
            void 0,
              (k.initializedAds = !0),
              !k.mobile &&
                k.displayAd &&
                (void 0,
                googletag.cmd.push(function () {
                  if (
                    (googletag.pubads().collapseEmptyDivs(!0),
                    (slots.side_ad = googletag
                      .defineSlot(
                        '/8438769/plugshare_web_map_banner',
                        [
                          [234, 60],
                          [160, 600],
                        ],
                        'div-gpt-ad-1511821471177-0'
                      )
                      .addService(googletag.pubads())),
                    googletag.pubads().enableSingleRequest(),
                    k.user && k.user.vehicles && k.user.vehicles.length)
                  ) {
                    var e = k.getVehicle();
                    e.make &&
                      googletag.pubads().setTargeting('vehicle_make', e.make);
                  }
                  googletag.enableServices(),
                    googletag.display('div-gpt-ad-1511821471177-0'),
                    googletag
                      .pubads()
                      .addEventListener('slotRenderEnded', function (e) {
                        null !==
                          document.getElementById('div-gpt-ad-1511821471177-0')
                            .offsetParent &&
                          document.getElementById('div-gpt-ad-1511821471177-0')
                            .offsetHeight &&
                          ((k.side_ad_loaded = !0),
                          (k.before_side_ad_loaded = !1),
                          k.update());
                      });
                })),
              k.mobile &&
                k.displayAd &&
                (void 0,
                googletag.cmd.push(function () {
                  if (
                    ((slots.mobile_ad = googletag
                      .defineSlot(
                        '/8438769/plugshare_app_sponsor',
                        [
                          [320, 50],
                          [300, 50],
                        ],
                        'div-gpt-ad-1605565412227-0'
                      )
                      .addService(googletag.pubads())),
                    googletag.pubads().enableSingleRequest(),
                    k.user && k.user.vehicles && k.user.vehicles.length)
                  ) {
                    var e = k.getVehicle();
                    e.make &&
                      googletag.pubads().setTargeting('vehicle_make', e.make);
                  }
                  googletag.enableServices(),
                    googletag.display('div-gpt-ad-1605565412227-0'),
                    googletag
                      .pubads()
                      .addEventListener('slotRenderEnded', function (e) {
                        null !==
                          document.getElementById('div-gpt-ad-1605565412227-0')
                            .offsetParent &&
                          document.getElementById('div-gpt-ad-1605565412227-0')
                            .offsetHeight &&
                          ((k.mobile_ad_loaded = !0),
                          (k.before_mobile_ad_loaded = !1),
                          k.update());
                      });
                })),
              k.ldvAdQueue &&
                (void 0,
                k.ldvAdQueueNetwork
                  ? k.loadLDVad(k.ldvAdQueueNetwork)
                  : k.loadLDVad(),
                (k.ldvAdQueue = null),
                (k.ldvAdQueueNetwork = null));
          }),
          (k.ldvInitialized = !1),
          (k.initLDVad = function (e) {
            (k.ldvInitialized = !0),
              void 0,
              googletag.cmd.push(function () {
                if (
                  ((slots.ldv = googletag
                    .defineSlot(
                      '/8438769/plugshare_LDV_sponsor',
                      [
                        [320, 100],
                        [320, 50],
                      ],
                      'div-gpt-ad-1605562608548-0'
                    )
                    .addService(googletag.pubads())),
                  googletag.pubads().enableSingleRequest(),
                  e
                    ? (void 0,
                      googletag
                        .pubads()
                        .setTargeting('network_id', e.toString()))
                    : (void 0,
                      googletag.pubads().setTargeting('network_id', '')),
                  k.user && k.user.vehicles && k.user.vehicles.length)
                ) {
                  var t = k.getVehicle();
                  t.make &&
                    googletag.pubads().setTargeting('vehicle_make', t.make);
                }
                googletag.enableServices(),
                  googletag.display('div-gpt-ad-1605562608548-0'),
                  googletag
                    .pubads()
                    .addEventListener('slotRenderEnded', function (e) {
                      void 0,
                        void 0,
                        void 0,
                        null !==
                          document.getElementById('div-gpt-ad-1605562608548-0')
                            .offsetParent &&
                        document.getElementById('div-gpt-ad-1605562608548-0')
                          .offsetHeight
                          ? (void 0,
                            (k.ldv_ad_loaded = !0),
                            (k.before_ldv_ad_loaded = !1))
                          : (void 0, (k.ldv_ad_loaded = !1)),
                        (k.refreshSlot = e.slot),
                        k.update();
                    }),
                  googletag
                    .pubads()
                    .addEventListener('impressionViewable', function (e) {
                      void 0;
                    }),
                  googletag
                    .pubads()
                    .addEventListener('slotOnload', function (e) {
                      void 0;
                    }),
                  googletag
                    .pubads()
                    .addEventListener('slotRequested', function (e) {
                      void 0;
                    }),
                  googletag
                    .pubads()
                    .addEventListener('slotResponseReceived', function (e) {
                      void 0;
                    }),
                  googletag
                    .pubads()
                    .addEventListener('slotVisibilityChanged', function (e) {
                      void 0, void 0;
                    });
              });
          }),
          (k.loadLDVad = function (e) {
            k.initializedAds
              ? (!k.ldvInitialized && k.displayAd && k.initLDVad(e),
                k.displayAd &&
                  (void 0,
                  e
                    ? (void 0,
                      slots.ldv.setTargeting('network_id', e.toString()))
                    : (void 0, slots.ldv.setTargeting('network_id', '')),
                  k.user &&
                    k.user.vehicles &&
                    k.user.vehicles.length &&
                    k.user.vehicles.make &&
                    slots.ldv.setTargeting(
                      'vehicle_make',
                      k.user.vehicles.make
                    ),
                  k.refreshSlot &&
                    ((k.ldv_ad_loaded = !1),
                    (k.before_ldv_ad_loaded = !0),
                    googletag.pubads().refresh([k.refreshSlot]))))
              : (void 0, (k.ldvAdQueue = !0), e && (k.ldvAdQueueNetwork = e));
          });
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.PricingController = [
      '$rootScope',
      '$scope',
      '$timeout',
      '$interval',
      '$q',
      '$log',
      '$http',
      '$mdDialog',
      '$mdToast',
      '$cookies',
      '$filter',
      '$state',
      '$window',
      '$document',
      '$location',
      'RestangularFactory',
      'CognitoFactory',
      'PreloaderFactory',
      '$translate',
      '$sce',
      function a(e, t, s, n, i, l, r, c, d, p, u, m, g, h, v, f, w, y, b, k) {
        'ngInject';
        o(this, a), void 0;
        var _ = t.$parent.maps;
        _.showDetailedPricing = function (e, t, o) {
          _.mobile || (t += '?desktop=true'),
            o && (_.pricingStationName = o + ' '),
            (_.pricingLink = k.trustAsResourceUrl(t)),
            c
              .show({
                controller: function () {
                  return (
                    _.ga('send', 'pageview', 'show_pricing_widget'),
                    _.ga(
                      'send',
                      'event',
                      'pricing',
                      'show pricing widget',
                      t,
                      1
                    ),
                    (_.resizeModalContentFrameFullHeader = !0),
                    _.mobileMargin(),
                    _
                  );
                },
                controllerAs: 'maps',
                templateUrl: 'app/main/templates/pricing.tmpl.html',
                parent: _.body,
                targetEvent: e,
                clickOutsideToClose: !1,
                escapeToClose: !1,
              })
              .then(
                function (e) {
                  void 0,
                    _.mobilePlannerMargin(),
                    (_.resizeModalContentFrameFullHeader = !1);
                },
                function () {
                  void 0,
                    _.mobilePlannerMargin(),
                    (_.resizeModalContentFrameFullHeader = !1);
                }
              );
        };
      },
    ];
  },
  function (e, t) {
    'use strict';
    function o(e, t, o, a, s, n, i, l, r, c) {
      'ngInject';
      return {
        restrict: 'CA',
        scope: { mapId: '@id', callbackFn: '&', drag: '=', control: '=' },
        link: function (n, d, p) {
          function u() {
            function s(e) {
              var t = null;
              return (
                e.place_id
                  ? (t = { placeId: e.place_id })
                  : e.coords
                  ? (t = new google.maps.LatLng(e.coords[0], e.coords[1]))
                  : e.address
                  ? (t = e.address)
                  : e.location && (t = e.location),
                void 0,
                t
              );
            }
            function p(t, o, a) {
              void 0, void 0;
              var i = [];
              if (a.waypoints.length > 0)
                for (var l = 0; l < a.waypoints.length; l++) {
                  var r = s(a.waypoints[l]);
                  r && i.push({ location: r, stopover: !0 });
                }
              var c = {
                origin: s(a.origin),
                destination: s(a.destination),
                waypoints: i,
                travelMode: 'DRIVING',
              };
              a.metric && (c.unitSystem = google.maps.UnitSystem.METRIC),
                a.tolls && (c.avoidTolls = !0),
                a.highways && (c.avoidHighways = !0),
                a.ferries && (c.avoidFerries = !0),
                e.directionsCount++,
                t.route(c, function (t, s) {
                  if ('OK' === s) {
                    if (
                      (void 0,
                      void 0,
                      o.setMap(g),
                      !e.tripComplete,
                      o.setDirections(t),
                      (a.resize || !e.directions) &&
                        (void 0,
                        a.pane
                          ? (void 0,
                            q(t.routes[0].bounds, {
                              left: 450,
                              right: 30,
                              top: 20,
                              bottom: 20,
                            }),
                            google.maps.event.addListenerOnce(
                              g,
                              'idle',
                              function () {
                                void 0,
                                  n.callbackFn({
                                    fn: 'checkCallbackQueue',
                                    data: 'fitbounds',
                                  });
                              }
                            ))
                          : (void 0,
                            g.fitBounds(t.routes[0].bounds, 50),
                            google.maps.event.addListenerOnce(
                              g,
                              'idle',
                              function () {
                                void 0,
                                  n.callbackFn({
                                    fn: 'checkCallbackQueue',
                                    data: 'fitbounds',
                                  });
                              }
                            ))),
                      n.callbackFn({ fn: 'routingResponse', data: t }),
                      (_ = t.routes),
                      (P = a.radius),
                      !e.tripComplete)
                    ) {
                      (S = []), (x = []), N(a.origin);
                      for (var i = 0; i < a.waypoints.length; i++)
                        N(a.waypoints[i]);
                      N(a.destination), void 0, void 0, void 0, U();
                    }
                  } else ee(), void 0, 'NOT_FOUND' == s ? n.callbackFn({ fn: 'toast', data: 'Location(s) not found. Please clarify search input' }) : 'ZERO_RESULTS' == s ? n.callbackFn({ fn: 'toast', data: 'Route could not be determined' }) : 'MAX_ROUTE_LENGTH_EXCEEDED' == s ? n.callbackFn({ fn: 'toast', data: 'Max route length exceeded' }) : n.callbackFn({ fn: 'toast', data: 'Directions not found. Please try again later' }), n.callbackFn({ fn: 'resetRouteLoading' });
                });
            }
            function u(e) {
              void 0, Pe.getElevationAlongPath({ path: e, samples: 256 }, O);
            }
            function O(e, t) {
              return (
                void 0,
                'OK' !== t
                  ? void n.callbackFn({
                      fn: 'toast',
                      data:
                        'Cannot show elevation: request failed because ' + t,
                    })
                  : void n.callbackFn({ fn: 'drawElevation', data: e })
              );
            }
            function N(e) {
              void 0 != e.location_id && S.push(e.location_id),
                void 0 != e.place_id && x.push(e.place_id);
            }
            function q(e, t) {
              var o = g.getProjection();
              if (o) {
                $.isPlainObject(t) || (t = { x: 0, y: 0 });
                var a = { top: 0, right: 0, bottom: 0, left: 0 };
                t.left
                  ? (a.left = t.left)
                  : t.x && ((a.left = t.x), (a.right = t.x)),
                  t.right && (a.right = t.right),
                  t.top
                    ? (a.top = t.top)
                    : t.y && ((a.top = t.y), (a.bottom = t.y)),
                  t.bottom && (a.bottom = t.bottom),
                  (e = new google.maps.LatLngBounds(
                    e.getSouthWest(),
                    e.getNorthEast()
                  ));
                var s = o.fromLatLngToPoint(e.getSouthWest());
                g.fitBounds(e);
                var n = new google.maps.Point(
                    ('number' == typeof a.left ? a.left : 0) /
                      Math.pow(2, g.getZoom()) || 0,
                    ('number' == typeof a.bottom ? a.bottom : 0) /
                      Math.pow(2, g.getZoom()) || 0
                  ),
                  i = o.fromPointToLatLng(
                    new google.maps.Point(s.x - n.x, s.y + n.y)
                  );
                e.extend(i),
                  (s = o.fromLatLngToPoint(e.getNorthEast())),
                  (n = new google.maps.Point(
                    ('number' == typeof a.right ? a.right : 0) /
                      Math.pow(2, g.getZoom()) || 0,
                    ('number' == typeof a.top ? a.top : 0) /
                      Math.pow(2, g.getZoom()) || 0
                  )),
                  (i = o.fromPointToLatLng(
                    new google.maps.Point(s.x + n.x, s.y - n.y)
                  )),
                  e.extend(i),
                  g.fitBounds(e);
              }
            }
            function U() {
              if (
                ((C = []),
                (!e.tripPlanner || !e.tripComplete) &&
                  e.showAlongRoute &&
                  _.length > 0)
              ) {
                void 0, void 0;
                for (
                  var t = _[e.routeIndex].overview_path, o = 0;
                  o < t.length;
                  o++
                )
                  C.push(t[o].lat()), C.push(t[o].lng());
                (A = !0), X();
              }
            }
            function D(t) {
              if ((ve(), t.placeId)) e.tripPlanner && t.stop(), j(t.placeId);
              else if (e.tripPlanner && !e.tripComplete) {
                var o = { lat: t.latLng.lat(), lng: t.latLng.lng() };
                e.geocoderCount++,
                  _e.geocode({ location: o }, function (e, t) {
                    'OK' === t && (void 0, j(e[0].place_id));
                  });
              }
            }
            function j(t) {
              e.tripPlanner &&
                !e.tripComplete &&
                (e.placesCount++,
                Ae.getDetails(
                  {
                    placeId: t,
                    fields: [
                      'address_component',
                      'formatted_address',
                      'geometry',
                      'id',
                      'name',
                      'place_id',
                      'url',
                    ],
                  },
                  function (e, t) {
                    if ('OK' === t) {
                      void 0;
                      var o = {
                        type: 'poi',
                        place_id: e.place_id,
                        display: e.name,
                        address: e.formatted_address,
                        coords: [
                          e.geometry.location.lat(),
                          e.geometry.location.lng(),
                        ],
                      };
                      he(o, null, !0),
                        n.callbackFn({ fn: 'setAssistant', data: o });
                    }
                  }
                ));
            }
            function H(e, t) {
              if (f) void 0, f.setPosition(new google.maps.LatLng(e, t));
              else {
                void 0;
                var o = {
                    url: 'https://assets.plugshare.com/assets/me.png',
                    size: new google.maps.Size(23, 23),
                    anchor: new google.maps.Point(11.5, 11.5),
                    scaledSize: new google.maps.Size(23, 23),
                  },
                  a = new google.maps.LatLng(e, t);
                f = new google.maps.Marker({
                  position: a,
                  map: g,
                  icon: o,
                  zIndex: 1,
                });
              }
            }
            function B(e) {
              var t = parseFloat(o.get('v2_geo_lat')),
                a = parseFloat(o.get('v2_geo_lng')),
                s = parseInt(o.get('v2_geo_time')),
                i = new Date().getTime(),
                l = !1;
              if ((void 0, t && a && s && 36e5 > i - s)) {
                var r = { lat: t, lng: a };
                g.panTo(r),
                  g.getZoom() < 12 && g.setZoom(16),
                  k &&
                    !g.getBounds().contains(k.getPosition()) &&
                    n.callbackFn({ fn: 'showPane' });
              } else e || (l = !0);
              navigator.geolocation
                ? navigator.geolocation.getCurrentPosition(
                    function (e) {
                      var t = {
                        lat: e.coords.latitude,
                        lng: e.coords.longitude,
                      };
                      H(t.lat, t.lng),
                        l &&
                          (g.panTo(t),
                          g.getZoom() < 12 && g.setZoom(16),
                          k &&
                            !g.getBounds().contains(k.getPosition()) &&
                            n.callbackFn({ fn: 'showPane' })),
                        n.callbackFn({
                          fn: 'mapSetCookie',
                          data: ['v2_geo_lat', e.coords.latitude, 'essential'],
                        }),
                        n.callbackFn({
                          fn: 'mapSetCookie',
                          data: ['v2_geo_lng', e.coords.longitude, 'essential'],
                        }),
                        n.callbackFn({
                          fn: 'mapSetCookie',
                          data: ['v2_geo_time', i, 'essential'],
                        });
                    },
                    function (e) {
                      l
                        ? (Y(e),
                          n.callbackFn({
                            fn: 'mapSetCookie',
                            data: ['v2_geo_time', i, 'essential'],
                          }),
                          o.get('v2_geo_time') && B(!0))
                        : void 0;
                    },
                    { timeout: 1e4 }
                  )
                : n.callbackFn({
                    fn: 'toast',
                    data: "Your browser doesn't support geolocation",
                  });
            }
            function W() {
              if (navigator.geolocation) {
                var e = new Date().getTime();
                navigator.geolocation.getCurrentPosition(
                  function (t) {
                    var o = { lat: t.coords.latitude, lng: t.coords.longitude };
                    H(o.lat, o.lng),
                      n.callbackFn({
                        fn: 'mapSetCookie',
                        data: ['v2_geo_lat', t.coords.latitude, 'essential'],
                      }),
                      n.callbackFn({
                        fn: 'mapSetCookie',
                        data: ['v2_geo_lng', t.coords.longitude, 'essential'],
                      }),
                      n.callbackFn({
                        fn: 'mapSetCookie',
                        data: ['v2_geo_time', e, 'essential'],
                      });
                  },
                  function (e) {
                    Y(e);
                  },
                  { timeout: 1e4 }
                );
              } else
                n.callbackFn({
                  fn: 'toast',
                  data: "Your browser doesn't support geolocation",
                });
            }
            function G() {
              void 0,
                navigator.geolocation &&
                  navigator.geolocation.getCurrentPosition(
                    function (e) {
                      var t = {
                        lat: e.coords.latitude,
                        lng: e.coords.longitude,
                      };
                      H(t.lat, t.lng),
                        void 0,
                        n.callbackFn({
                          fn: 'setUserCheckinLocation',
                          data: [t.lat, t.lng],
                        });
                    },
                    function (e) {
                      void 0;
                    },
                    { timeout: 1e4 }
                  );
            }
            function K() {
              if (
                (void 0,
                navigator &&
                  navigator.permissions &&
                  navigator.permissions.query)
              )
                navigator.permissions
                  .query({ name: 'geolocation' })
                  .then(function (e) {
                    if ((void 0, 'granted' === e.state))
                      if (navigator.geolocation) {
                        var t = new Date().getTime();
                        navigator.geolocation.getCurrentPosition(
                          function (e) {
                            void 0,
                              n.callbackFn({
                                fn: 'mapSetCookie',
                                data: [
                                  'v2_geo_lat',
                                  e.coords.latitude,
                                  'essential',
                                ],
                              }),
                              n.callbackFn({
                                fn: 'mapSetCookie',
                                data: [
                                  'v2_geo_lng',
                                  e.coords.longitude,
                                  'essential',
                                ],
                              }),
                              n.callbackFn({
                                fn: 'mapSetCookie',
                                data: ['v2_geo_time', t, 'essential'],
                              }),
                              n.callbackFn({
                                fn: 'recordAppearance',
                                data: [e.coords.latitude, e.coords.longitude],
                              });
                          },
                          function (e) {
                            void 0,
                              n.callbackFn({
                                fn: 'recordAppearance',
                                data: '',
                              });
                          },
                          { timeout: 1e4 }
                        );
                      } else
                        void 0,
                          n.callbackFn({ fn: 'recordAppearance', data: '' });
                    else
                      'prompt' === e.state ||
                        (void 0,
                        void 0,
                        n.callbackFn({ fn: 'recordAppearance', data: '' }));
                  });
              else {
                void 0;
                var e = parseFloat(o.get('v2_geo_lat')),
                  t = parseFloat(o.get('v2_geo_lng')),
                  a = parseFloat(o.get('v2_geo_time')),
                  s = new Date().getTime();
                void 0,
                  e && t && a && 36e5 > s - a
                    ? n.callbackFn({ fn: 'recordAppearance', data: [e, t] })
                    : (void 0,
                      n.callbackFn({ fn: 'recordAppearance', data: '' }));
              }
            }
            function Y(e) {
              switch ((void 0, void 0, e.code)) {
                case e.PERMISSION_DENIED:
                  n.callbackFn({
                    fn: 'toast',
                    data: 'Please enable browser geolocation settings to use location services',
                  });
                  break;
                case e.POSITION_UNAVAILABLE:
                  n.callbackFn({
                    fn: 'toast',
                    data: 'Location information is unavailable',
                  });
                  break;
                case e.TIMEOUT:
                  n.callbackFn({
                    fn: 'toast',
                    data: 'The request to get your location timed out',
                  });
                  break;
                case e.UNKNOWN_ERROR:
                  n.callbackFn({
                    fn: 'toast',
                    data: 'An unknown error occurred',
                  });
              }
            }
            function X() {
              var o = g.getCenter();
              o = new google.maps.LatLng(o.lat(), o.lng(), !1);
              var a = o.lat(),
                s = o.lng();
              if (
                (n.callbackFn({
                  fn: 'mapSetCookie',
                  data: ['v2_plugshare_lat', a, 'essential'],
                }),
                n.callbackFn({
                  fn: 'mapSetCookie',
                  data: ['v2_plugshare_lng', s, 'essential'],
                }),
                (!e.tripPlanner || !e.tripComplete) && g && g.getBounds())
              ) {
                var i = g.getBounds(),
                  l = i.toSpan().lat(),
                  r = i.toSpan().lng(),
                  c = i.getNorthEast(),
                  d = i.getSouthWest();
                void 0,
                  e.directions && e.showAlongRoute
                    ? C.length > 0 &&
                      (void 0,
                      t.getPolyline(C, 1609 * P, a, s, l, r).then(function (t) {
                        !t ||
                          e.tripComplete ||
                          e.mobilePlanner ||
                          (A && (Q(), (A = !1)),
                          oe(t),
                          Z(),
                          n.callbackFn({
                            fn: 'checkCallbackQueue',
                            data: 'polyline',
                          }));
                      }))
                    : (void 0,
                      t.region(500, a, s, l, r).then(function (e) {
                        e && (oe(e), Z());
                      }));
              }
            }
            function Z() {
              for (var e = 0, t = 0; t < Ee.length; t++)
                g.getBounds().contains(v[t].getPosition()) && e++;
              n.callbackFn({ fn: 'displayCount', data: e });
            }
            function J(t) {
              void 0;
              for (var o = !1, a = 0; a < v.length; a++)
                w && k == v[a] ? (void 0, (o = !0)) : v[a].setMap(null);
              if (
                ((v = []),
                (Ee = []),
                o && (v.push(k), Ee.push(k.location.id)),
                !e.tripPlanner || t)
              ) {
                for (var s = 0; s < Re.length; s++) Re[s].setMap(null);
                (Re = []), ($e = []);
              }
              me();
            }
            function Q() {
              void 0;
              for (var e = [], t = [], o = !1, a = 0; a < v.length; a++)
                -1 == S.indexOf(v[a].location.id)
                  ? w && k == v[a]
                    ? (void 0, (o = !0))
                    : v[a].setMap(null)
                  : (v[a].setZIndex(99),
                    e.push(v[a]),
                    t.push(v[a].location.id));
              (v = e), (Ee = t), o && (v.push(k), Ee.push(k.location.id));
              for (var s = [], n = [], i = 0; i < Re.length; i++)
                -1 == x.indexOf(Re[i].location.id)
                  ? Re[i].setMap(null)
                  : (Re[i].setZIndex(99),
                    s.push(Re[i]),
                    n.push(Re[i].location.id));
              (Re = s), ($e = n);
            }
            function ee(e) {
              (C = []),
                xe.setMap(null),
                xe.set('directions', null),
                e ? ((A = !0), X()) : J(),
                n.callbackFn({ fn: 'routingResponse', data: !1 });
            }
            function te() {
              google.maps.event.trigger(g, 'resize');
            }
            function oe(t) {
              if (!e.tripComplete) {
                void 0, void 0;
                var o = t.length + Ee.length;
                if ((void 0, o > 1e3))
                  for (var a = 0; a < Ee.length; a++)
                    g.getBounds().contains(v[a].getPosition()) ||
                      (v[a].setMap(null), v.splice(a, 1), Ee.splice(a, 1));
                for (var s = 0; s < t.length; s++) ie(t[s]);
              }
            }
            function ae(t) {
              k = null;
              var o = 0;
              (Me = []),
                (Ie = []),
                J(!0),
                r(function () {
                  for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    if (s.location)
                      ie(s.location, e.mobilePlanner ? !1 : !0, 99), o++;
                    else {
                      var i = {
                        type: 'poi',
                        place_id: s.place_id,
                        display: s.display,
                        address: s.address,
                        coords: s.coords,
                      };
                      he(i, null, e.mobilePlanner ? !1 : !0, 99);
                    }
                  }
                  n.callbackFn({ fn: 'displayCount', data: o });
                }, 0);
            }
            function se(e) {
              void 0,
                r(function () {
                  for (var t = 0; t < e.length; t++) {
                    var o = e[t];
                    if (o.location) ie(o.location, !1, 99);
                    else {
                      var a = {
                        type: 'poi',
                        place_id: o.place_id,
                        display: o.display,
                        address: o.address,
                        coords: o.coords,
                      };
                      he(a, null, !1, 99);
                    }
                  }
                }, 0);
            }
            function ne(e) {
              for (var t = 0; t < e.length; t++) {
                var o = e[t];
                if (!o.location) {
                  var a = {
                    type: 'poi',
                    place_id: o.place_id,
                    display: o.display,
                    address: o.address,
                    coords: o.coords,
                  };
                  he(a, null, !1, 99);
                }
              }
            }
            function ie(o, a, s) {
              var n = Ee.indexOf(o.id);
              if (-1 == n) {
                o.display_name = t.getDisplayName(o);
                var i = 4,
                  l = 0;
                switch (o.icon_type) {
                  case 'A':
                    l = 1;
                    break;
                  case 'AR':
                    l = 5;
                    break;
                  case 'B':
                    (l = 2), (i = 3);
                    break;
                  case 'BR':
                    (l = 3), (i = 3);
                    break;
                  case 'G':
                    l = 0;
                    break;
                  case 'GR':
                    l = 6;
                    break;
                  case 'H':
                    l = 7;
                    break;
                  case 'Y':
                    (l = 9), (i = 5);
                    break;
                  case 'YR':
                    l = 10;
                    break;
                  case 'R':
                }
                s && (i = s);
                var r = {
                    url: 'https://assets.plugshare.com/assets/markers2.png?10252021',
                    size: new google.maps.Size(32, 44),
                    origin: new google.maps.Point(32 * l, 0),
                    scaledSize: new google.maps.Size(352, 44),
                  },
                  c = [o.latitude, o.longitude],
                  d = new google.maps.LatLng(c[0], c[1]),
                  p = new google.maps.Marker({
                    position: d,
                    map: g,
                    icon: r,
                    zIndex: i,
                    location: o,
                  });
                v.push(p),
                  p.addListener('click', function () {
                    e.tripComplete && !e.mobilePlanner ? re(this) : ue(this);
                  }),
                  a && (void 0, e.tripComplete ? re(p) : ue(p, !0)),
                  p.addListener('mouseover', function () {
                    if (
                      (void 0,
                      (!w || (w && p.location.id != w.id)) &&
                        L.parent().width() > 420)
                    ) {
                      var e = '';
                      p.location.thumbnail_url &&
                        (e +=
                          '<div class="infobrand"><img src="' +
                          p.location.thumbnail_url +
                          '"></div>'),
                        (e += '<div class="infowindow">'),
                        p.location.score &&
                          (e +=
                            p.location.score < 5
                              ? '<div class="plugscore lowscore" title="A station\'s PlugScore reflects the experience of its most recent users">' +
                                p.location.score +
                                '</div>'
                              : '<div class="plugscore" title="A station\'s PlugScore reflects the experience of its most recent users">' +
                                p.location.score +
                                '</div>'),
                        (e +=
                          '<div class="name">' +
                          p.location.display_name +
                          '</div>'),
                        p.location.address &&
                          (e +=
                            '<div class="address">' +
                            le(p.location.address) +
                            '</div>'),
                        (e += '</div>'),
                        (y = new google.maps.InfoWindow({ content: e })),
                        y.open(g, this),
                        y.setZIndex(9999);
                    }
                  }),
                  p.addListener('mouseout', function () {
                    y && y.close();
                  }),
                  Ee.push(o.id);
              } else void 0, a && (void 0, ue(v[n], !0));
            }
            function le(e) {
              if (e) {
                var t = e.indexOf(',');
                return t
                  ? e.substr(0, t + 1).trim() + '<br>' + e.substr(t + 1).trim()
                  : e;
              }
              return '';
            }
            function re(e) {
              var t = e.location.id ? e.location.id : e.data.place_id;
              if ((y && y.close(), -1 == Ie.indexOf(t))) {
                if (L.parent().width() > 420) {
                  var o = '';
                  e.location.thumbnail_url &&
                    (o +=
                      '<div class="infobrand"><img src="' +
                      e.location.thumbnail_url +
                      '"></div>'),
                    (o += '<div class="infowindow">'),
                    e.location.score &&
                      (o +=
                        e.location.score < 5
                          ? '<div class="plugscore lowscore" title="A station\'s PlugScore reflects the experience of its most recent users">' +
                            e.location.score +
                            '</div>'
                          : '<div class="plugscore" title="A station\'s PlugScore reflects the experience of its most recent users">' +
                            e.location.score +
                            '</div>'),
                    e.location && e.location.display_name
                      ? (o +=
                          '<div class="title name">' +
                          e.location.display_name +
                          '</div>')
                      : e.data &&
                        e.data.display &&
                        (o +=
                          '<div class="title">' + e.data.display + '</div>');
                  var a = e.location.address
                    ? e.location.address
                    : e.data
                    ? e.data.address
                    : null;
                  a && (o += '<div class="address">' + le(a) + '</div>'),
                    (o += '</div>'),
                    (w = new google.maps.InfoWindow({ content: o, id: t })),
                    Me.push(w),
                    Ie.push(t),
                    void 0,
                    w.open(g, e),
                    w.setZIndex(1e4),
                    google.maps.event.addListener(w, 'closeclick', function () {
                      void 0, (w = null);
                      var e = Ie.indexOf(t);
                      Ie.splice(e, 1), n.callbackFn({ fn: 'showPane' });
                    });
                }
              } else void 0;
            }
            function ce(e) {
              var t = Ee.indexOf(e);
              -1 != t && (v[t].setMap(null), v.splice(t, 1), Ee.splice(t, 1));
            }
            function de(e) {
              var t = $e.indexOf(e);
              -1 != t && (Re[t].setMap(null), Re.splice(t, 1), $e.splice(t, 1));
            }
            function pe(e, t, o, a) {
              var s = g.getBounds().getSouthWest(),
                n = g.getBounds().getNorthEast(),
                i = g.getProjection().fromLatLngToPoint(n),
                l = g.getProjection().fromLatLngToPoint(s),
                r = Math.pow(2, g.getZoom()),
                c = g.getProjection().fromLatLngToPoint(s),
                d = new google.maps.Point(
                  (c.x - l.x) * r + a,
                  (c.y - i.y) * r - t
                ),
                p = new google.maps.Point(d.x / r + l.x, d.y / r + i.y),
                u = g.getProjection().fromPointToLatLng(p),
                m = g.getProjection().fromLatLngToPoint(n),
                h = new google.maps.Point(
                  (m.x - l.x) * r - o,
                  (m.y - i.y) * r + e
                ),
                v = new google.maps.Point(h.x / r + l.x, h.y / r + i.y),
                f = g.getProjection().fromPointToLatLng(v);
              return new google.maps.LatLngBounds(u, f);
            }
            function ue(o, s) {
              (k = o),
                !w ||
                  (e.tripComplete && !e.mobilePlanner) ||
                  (void 0, w.close()),
                y && y.close();
              var i = new google.maps.LatLng(
                o.location.latitude,
                o.location.longitude
              );
              if (L.parent().width() > 420) {
                var c = '';
                o.location.thumbnail_url &&
                  (c +=
                    '<div class="infobrand"><img src="' +
                    o.location.thumbnail_url +
                    '"></div>'),
                  (c += '<div class="infowindow">'),
                  o.location.score &&
                    (c +=
                      o.location.score < 5
                        ? '<div class="plugscore lowscore" title="A station\'s PlugScore reflects the experience of its most recent users">' +
                          o.location.score +
                          '</div>'
                        : '<div class="plugscore" title="A station\'s PlugScore reflects the experience of its most recent users">' +
                          o.location.score +
                          '</div>'),
                  (c +=
                    '<div class="name">' + o.location.display_name + '</div>'),
                  o.location.address &&
                    (c +=
                      '<div class="address">' +
                      le(o.location.address) +
                      '</div>'),
                  !e.tripPlanner ||
                    e.tripComplete ||
                    e.mobilePlanner ||
                    (c +=
                      '<div class="actions"><div class="action placeholder"></div><div class="action add hoverpulse" ng-click="add()" ng-cloak>' +
                      a('translate')('Add to Trip') +
                      '</div><div class="action remove" ng-click="remove()" ng-cloak>' +
                      a('translate')('Remove from Trip') +
                      '</div></div>'),
                  (c += '</div>'),
                  e.tripPlanner && !e.tripComplete && (c = l(c)(n)[0]),
                  (w = new google.maps.InfoWindow({
                    content: c,
                    id: o.location.id,
                  })),
                  e.initializeEvents.locationShownEvent
                    ? (void 0,
                      n.callbackFn({
                        fn: 'mapTrackGA',
                        data: [
                          'send',
                          'event',
                          'location',
                          'shown',
                          o.location.id,
                          { nonInteraction: 1 },
                        ],
                      }),
                      (e.initializeEvents.locationShownEvent = !1))
                    : n.callbackFn({
                        fn: 'mapTrackGA',
                        data: [
                          'send',
                          'event',
                          'location',
                          'shown',
                          o.location.id,
                        ],
                      }),
                  void 0,
                  (!e.tripComplete || e.mobilePlanner) && w.open(g, o),
                  r(function () {
                    e.tripPlanner &&
                      n.callbackFn({ fn: 'checkInTrip', data: o.location.id });
                  }, 10),
                  google.maps.event.addListener(w, 'closeclick', function () {
                    void 0, (w = null), n.callbackFn({ fn: 'showPane' });
                  });
                var d = !pe(0, 0, 0, 450).contains(o.getPosition());
                (d || (s && !e.tripPlanner)) &&
                  (void 0,
                  e.tripPlanner
                    ? g.panTo(i)
                    : g.panToWithOffset(i, (-1 * L.width()) / 2, 0));
              } else g.panToWithOffset(i, 0, L.parent().height() / 2 - 170);
              e.initializeEvents.locationSkipLoad
                ? (void 0, (e.initializeEvents.locationSkipLoad = !1))
                : t.getLocation(o.location.id).then(function (e) {
                    n.callbackFn({ fn: 'showPane', data: e });
                  });
            }
            function me() {
              T && T.setMap(null);
            }
            function ge() {
              if (
                (me(), e.range.visible && !e.tripComplete && e.range.coords)
              ) {
                var t = new google.maps.LatLng(
                  e.range.coords[0],
                  e.range.coords[1]
                );
                T = new google.maps.Circle({
                  strokeColor: '#3ec654',
                  strokeOpacity: 1,
                  strokeWeight: 2,
                  fillColor: '#3ec654',
                  fillOpacity: 0.2,
                  map: g,
                  center: t,
                  radius: 1609 * e.range.max,
                  clickable: !1,
                });
              }
            }
            function he(t, o, s, c) {
              void 0;
              var d = $e.indexOf(t.place_id);
              if (-1 == d) {
                var p = new google.maps.LatLng(t.coords[0], t.coords[1]),
                  u = {
                    url: 'https://assets.plugshare.com/assets/markers2.png?10252021',
                    size: new google.maps.Size(32, 44),
                    origin: new google.maps.Point(256, 0),
                    scaledSize: new google.maps.Size(352, 44),
                  },
                  m = new google.maps.Marker({
                    position: p,
                    map: g,
                    icon: u,
                    zIndex: c ? c : 2,
                    location: { id: t.place_id },
                    type: 'search',
                    data: t,
                  });
                if (
                  (Re.push(m),
                  $e.push(t.place_id),
                  m.addListener('click', function () {
                    if (e.tripComplete && !e.mobilePlanner) re(this);
                    else {
                      if (
                        (n.callbackFn({ fn: 'showPane' }),
                        e.tripPlanner &&
                          n.callbackFn({ fn: 'setAssistant', data: t }),
                        !w ||
                          (e.tripComplete && !e.mobilePlanner) ||
                          (void 0, w.close()),
                        y && y.close(),
                        L.parent().width() > 420)
                      ) {
                        if (e.tripPlanner) {
                          var o =
                            '<div class="infowindow"><div class="title">' +
                            t.display +
                            '</div>';
                          t.address &&
                            (o +=
                              '<div class="address">' +
                              le(t.address) +
                              '</div>'),
                            e.mobilePlanner ||
                              (o +=
                                '<div class="actions"><div class="action placeholder"></div><div class="action add hoverpulse" ng-click="add()" ng-cloak>' +
                                a('translate')('Add to Trip') +
                                '</div><div class="action remove" ng-click="remove()" ng-cloak>' +
                                a('translate')('Remove from Trip') +
                                '</div></div></div>');
                          var s = l(o)(n);
                          w = new google.maps.InfoWindow({
                            content: s[0],
                            id: t.place_id,
                            search: !0,
                          });
                        } else
                          w = new google.maps.InfoWindow({
                            content:
                              '<div class="infowindow">' + t.display + '</div>',
                            id: t.place_id,
                            search: !0,
                          });
                        void 0,
                          (!e.tripComplete || e.mobilePlanner) && w.open(g, m),
                          n.callbackFn({
                            fn: 'mapTrackGA',
                            data: ['send', 'event', 'poi', 'shown', t.place_id],
                          }),
                          r(function () {
                            e.tripPlanner &&
                              n.callbackFn({
                                fn: 'checkInTrip',
                                data: m.location.id,
                              });
                          }, 10),
                          google.maps.event.addListener(
                            w,
                            'closeclick',
                            function () {
                              void 0,
                                (w = null),
                                n.callbackFn({
                                  fn: 'checkSearchRemove',
                                  data: t.place_id,
                                });
                            }
                          );
                      }
                      i.innerWidth < 600 && g.panTo(p);
                    }
                  }),
                  s &&
                    (e.tripComplete
                      ? re(m)
                      : google.maps.event.trigger(m, 'click')),
                  m.addListener('mouseover', function () {
                    if (
                      (!w || (w && m.location.id != w.id)) &&
                      L.parent().width() > 420
                    ) {
                      var e =
                        '<div class="infowindow"><div class="title">' +
                        t.display +
                        '</div>';
                      t.address &&
                        (e +=
                          '<div class="address">' + le(t.address) + '</div>'),
                        (e += '</div>'),
                        (y = new google.maps.InfoWindow({
                          content: e,
                          search: !0,
                        })),
                        y.open(g, m),
                        y.setZIndex(9999);
                    }
                  }),
                  m.addListener('mouseout', function () {
                    y && y.close();
                  }),
                  o)
                ) {
                  var h = new google.maps.LatLng(o.swLat, o.swLng),
                    v = new google.maps.LatLng(o.neLat, o.neLng),
                    f = new google.maps.LatLngBounds(h, v);
                  g.fitBounds(f);
                }
              } else void 0;
            }
            function ve() {
              void 0,
                void 0,
                !w || (w.search && !e.tripPlanner) || (w.close(), (w = null)),
                y && y.close();
            }
            function fe() {
              void 0, (k = null);
              for (var e = 0; e < Me.length; e++) Me[e].close(), (Me[e] = null);
              (Me = []), (Ie = []);
            }
            function we(e) {
              void 0, ye(), be(e);
            }
            function ye() {
              if (Fe) {
                void 0;
                for (var e = 0; e < Fe.length; e++) g.data.remove(Fe[e]);
              }
            }
            function be(e) {
              void 0;
              var t = {
                type: 'Feature',
                geometry: e,
                properties: { strokeColor: '#003ca6' },
              };
              Fe = g.data.addGeoJson(t);
            }
            function ke(e, t, o) {
              e instanceof google.maps.LatLng
                ? t.call(o, e)
                : e instanceof google.maps.Data.Point
                ? t.call(o, e.get())
                : e.getArray().forEach(function (e) {
                    ke(e, t, o);
                  });
            }
            void 0,
              void 0,
              (m = new google.maps.LatLng(z, V)),
              (h = {
                center: m,
                zoom: F,
                minZoom: window != window.top ? 1 : 4,
                zoomControl: !1,
                rotateControl: !1,
                mapTypeControl: !1,
                scaleControl: !0,
                fullscreenControl: !1,
                gestureHandling: 'greedy',
                streetViewControl: !0,
                streetViewControlOptions: {
                  position: google.maps.ControlPosition.LEFT_BOTTOM,
                },
                styles: e.mapStyle,
                keyboardShortcuts: !1,
              });
            var _e = new google.maps.Geocoder();
            (g = new google.maps.Map(d[0], h)),
              google.maps.event.addListener(
                g.getStreetView(),
                'visible_changed',
                function () {
                  n.callbackFn({
                    fn: 'streetViewStatus',
                    data: this.getVisible(),
                  });
                }
              );
            var Ce = new google.maps.InfoWindow({ zIndex: 1e4 }),
              Pe = new google.maps.ElevationService(),
              Se = new google.maps.DirectionsService(),
              xe = new google.maps.DirectionsRenderer({
                preserveViewport: !0,
                map: g,
                markerOptions: { zIndex: 5 },
                infoWindow: Ce,
                suppressMarkers: !0,
              }),
              Ae = new google.maps.places.PlacesService(g),
              Te = c(function () {
                for (
                  var e = angular.element('.gm-style-cc'), t = 0;
                  t < e.length;
                  t++
                )
                  if ('89px' == i.getComputedStyle(e[t]).bottom) {
                    angular.element('.gm-style-cc').eq(t).hide(),
                      void 0,
                      c.cancel(Te);
                    break;
                  }
              }, 100);
            r(function () {
              c.cancel(Te);
            }, 1e4),
              g.addListener('click', function (e) {
                void 0, n.callbackFn({ fn: 'checkPane', data: e });
              });
            var Le = new google.maps.TrafficLayer();
            a('isTrue')(o.get('v2_traffic_layer')) && Le.setMap(g),
              o.get('v2_map_type') && g.setMapTypeId(o.get('v2_map_type')),
              E && R && (void 0, H(E, R)),
              r(function () {
                2 != b &&
                  (navigator.geolocation
                    ? navigator.geolocation.getCurrentPosition(
                        function (t) {
                          var o = {
                            lat: t.coords.latitude,
                            lng: t.coords.longitude,
                          };
                          void 0,
                            void 0,
                            H(t.coords.latitude, t.coords.longitude),
                            (M && I) ||
                              (b || (g.setCenter(o), g.setZoom(16)),
                              void 0,
                              void 0,
                              e.geocoderCount++,
                              _e.geocode({ location: o }, function (e, t) {
                                if ((void 0, 'OK' === t))
                                  if (e[0])
                                    for (
                                      var o = 0;
                                      o < e[0].address_components.length;
                                      o++
                                    ) {
                                      var a = e[0].address_components[o];
                                      'postal_code' == a.types[0] &&
                                        (void 0,
                                        n.callbackFn({
                                          fn: 'mapSetCookie',
                                          data: [
                                            'v2_geo_zip',
                                            a.long_name,
                                            'essential',
                                          ],
                                        })),
                                        'country' != a.types[0] ||
                                          b ||
                                          (void 0,
                                          n.callbackFn({
                                            fn: 'setLocale',
                                            data: a.short_name,
                                          }));
                                    }
                                  else void 0;
                                else void 0;
                              }));
                          var a = new Date().getTime();
                          n.callbackFn({
                            fn: 'mapSetCookie',
                            data: [
                              'v2_geo_lat',
                              t.coords.latitude,
                              'essential',
                            ],
                          }),
                            n.callbackFn({
                              fn: 'mapSetCookie',
                              data: [
                                'v2_geo_lng',
                                t.coords.longitude,
                                'essential',
                              ],
                            }),
                            n.callbackFn({
                              fn: 'mapSetCookie',
                              data: ['v2_geo_time', a, 'essential'],
                            });
                        },
                        function (e) {
                          void 0;
                        },
                        { timeout: 1e4 }
                      )
                    : n.callbackFn({
                        fn: 'toast',
                        data: "Your browser doesn't support geolocation",
                      }));
              }, e.geolocationDelay),
              (google.maps.Map.prototype.panToWithOffset = function (e, t, o) {
                var a = this,
                  s = new google.maps.OverlayView();
                (s.onAdd = function () {
                  var s = this.getProjection(),
                    n = s.fromLatLngToContainerPixel(e);
                  (n.x = n.x + t),
                    (n.y = n.y + o),
                    a.panTo(s.fromContainerPixelToLatLng(n));
                }),
                  (s.draw = function () {}),
                  s.setMap(this);
              });
            var Me = [],
              Ie = [],
              Ee = [];
            (n.add = function () {
              n.callbackFn({ fn: 'addToTrip' }),
                n.callbackFn({ fn: 'checkInTrip' });
            }),
              (n.remove = function () {
                n.callbackFn({ fn: 'removeFromTrip' }),
                  n.callbackFn({ fn: 'checkInTrip' });
              });
            var Re = [],
              $e = [];
            g.data.setStyle(function (e) {
              var t = e.getProperty('strokeColor');
              return {
                strokeColor: t,
                strokeOpacity: 1,
                strokeWeight: 1,
                fillColor: t,
                fillOpacity: 0.1,
              };
            });
            var Fe = null;
            g.data.addListener('addfeature', function (e) {
              var t = new google.maps.LatLngBounds();
              ke(e.feature.getGeometry(), t.extend, t), g.fitBounds(t, 0);
            }),
              g.addListener('zoom_changed', function () {
                void 0,
                  n.callbackFn({
                    fn: 'mapSetCookie',
                    data: ['v2_plugshare_zoom', g.getZoom(), 'essential'],
                  });
              }),
              google.maps.event.addListener(g, 'idle', function () {
                void 0, X();
              }),
              google.maps.event.addListener(g, 'dragstart', function () {
                L.parent().width() > 420
                  ? (n.drag = !0)
                  : n.callbackFn({ fn: 'showPane' }),
                  n.$apply();
              }),
              google.maps.event.addListener(g, 'dragend', function () {
                (n.drag = !1), n.$apply();
              }),
              google.maps.event.addListenerOnce(g, 'tilesloaded', function () {
                void 0, n.callbackFn({ fn: 'mapsLoaded' });
              }),
              (n.mapControl = n.control || {}),
              (n.mapControl.checkMarkerExists = function (e) {
                for (var t = 0; t < v.length; t++)
                  if (v[t].location.id === e) return !0;
                return !1;
              }),
              (n.mapControl.goToMarker = function (e) {
                for (var t = 0; t < v.length; t++)
                  if (v[t].location.id === e) {
                    google.maps.event.trigger(v[t], 'click');
                    break;
                  }
              }),
              (n.mapControl.goToNewMarker = function (e, t) {
                void 0, ie(e, !0, t);
              }),
              (n.mapControl.goTo = function (e, t, o) {
                w && (void 0, w.close()), y && y.close();
                var a = new google.maps.LatLng(e, t);
                g.panToWithOffset(a, (-1 * L.width()) / 2, 0),
                  'auto' == o
                    ? g.getZoom() < 12 && g.setZoom(16)
                    : o && g.setZoom(o);
              }),
              (n.mapControl.goToSearch = function (e, t, o) {
                var a = $e.indexOf(e.place_id);
                -1 == a
                  ? he(e, t, !0, o)
                  : google.maps.event.trigger(Re[a], 'click');
              }),
              (n.mapControl.createSearchMarker = function (e, t, o) {
                he(e, t, !1, o);
              }),
              (n.mapControl.panTo = function (e) {
                var t = { lat: e[0], lng: e[1] };
                g.panTo(t);
              }),
              (n.mapControl.fitBounds = function (e, t, o, a) {
                var s = new google.maps.LatLngBounds(
                  new google.maps.LatLng(e - o / 2, t - a / 2),
                  new google.maps.LatLng(e + o / 2, t + a / 2)
                );
                g.fitBounds(s);
              }),
              (n.mapControl.closeInfoWindows = function (t) {
                (!e.tripPlanner || t) && ve();
              }),
              (n.mapControl.closeTags = function () {
                fe();
              }),
              (n.mapControl.clearMap = function (e) {
                J(e);
              }),
              (n.mapControl.cleanMap = function () {
                Q();
              }),
              (n.mapControl.clearRoute = function (e) {
                ee(e);
              }),
              (n.mapControl.generateMapMarkers = function (e) {
                ne(e);
              }),
              (n.mapControl.tripLocations = function (e) {
                ae(e);
              }),
              (n.mapControl.loadTripLocations = function (e) {
                se(e);
              }),
              (n.mapControl.closePlanner = function () {
                (k = null),
                  ee(!0),
                  r(function () {
                    te(), J(), (A = !0), X();
                  }, 100);
              }),
              (n.mapControl.reloadMarkers = function () {
                e.tripPlanner ? Q() : J(), (A = !0), X();
              }),
              (n.mapControl.refreshMarker = function (e, t) {
                ce(e.id), ie(e, t ? !1 : !0);
              }),
              (n.mapControl.removeMarker = function (e) {
                ce(e);
              }),
              (n.mapControl.removeSearch = function (e) {
                de(e);
              }),
              (n.mapControl.getPosition = function () {
                var e = g.getCenter();
                return [e.lat() % 90, e.lng() % 180];
              }),
              (n.mapControl.toggleTraffic = function () {
                null == Le.getMap()
                  ? (Le.setMap(g),
                    n.callbackFn({
                      fn: 'mapSetCookie',
                      data: ['v2_traffic_layer', !0, 'essential'],
                    }))
                  : (Le.setMap(null),
                    n.callbackFn({
                      fn: 'mapSetCookie',
                      data: ['v2_traffic_layer', !1, 'essential'],
                    }));
              }),
              (n.mapControl.setMap = function (e) {
                g.setMapTypeId(e),
                  n.callbackFn({
                    fn: 'mapSetCookie',
                    data: ['v2_map_type', e, 'essential'],
                  });
              }),
              (n.mapControl.zoomIn = function () {
                g.setZoom(g.getZoom() + 1);
              }),
              (n.mapControl.zoomOut = function () {
                g.setZoom(g.getZoom() - 1);
              }),
              (n.mapControl.centerMap = function () {
                B();
              }),
              (n.mapControl.resizeMap = function () {
                te();
              }),
              (n.mapControl.zoom = function (e) {
                g.setZoom(e);
              }),
              (n.mapControl.skipGeolocation = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
                void 0, (b = e);
              }),
              (n.mapControl.routeTrip = function (e) {
                p(Se, xe, e);
              }),
              (n.mapControl.getPolyline = function (e) {
                (P = e), U();
              }),
              (n.mapControl.updateMyPin = function () {
                W();
              }),
              (n.mapControl.mapClick = function (e) {
                D(e);
              }),
              (n.mapControl.hoverMarkerOn = function (e, t) {
                if ('marker' == t) {
                  var o = Ee.indexOf(e);
                  -1 != o &&
                    g.getBounds().contains(v[o].getPosition()) &&
                    (y && y.close(),
                    google.maps.event.trigger(v[o], 'mouseover'));
                } else if ('search' == t) {
                  var a = $e.indexOf(e);
                  -1 != a &&
                    g.getBounds().contains(Re[a].getPosition()) &&
                    (y && y.close(),
                    google.maps.event.trigger(Re[a], 'mouseover'));
                }
              }),
              (n.mapControl.hoverMarkerOff = function () {
                y && y.close();
              }),
              (n.mapControl.redrawRange = function () {
                ge();
              }),
              (n.mapControl.clearRange = function () {
                me();
              }),
              (n.mapControl.getPathElevation = function (e) {
                u(e);
              }),
              (n.mapControl.getPlacesService = function () {
                return Ae;
              }),
              (n.mapControl.focusArea = function (e) {
                we(e);
              }),
              (n.mapControl.clearShapes = function () {
                ye();
              }),
              (n.mapControl.getUserPosition = function () {
                G();
              }),
              (n.mapControl.checkUserAppearance = function () {
                K();
              });
          }
          void 0;
          var m = null,
            g = null,
            h = null,
            v = [],
            f = null,
            w = null,
            y = null,
            b = (i.ga, 0),
            k = null,
            _ = [],
            C = [],
            P = 2,
            S = [],
            x = [],
            A = !1,
            T = null,
            L = angular.element(s[0].querySelector('#pane')),
            M = parseFloat(o.get('v2_plugshare_lat')),
            I = parseFloat(o.get('v2_plugshare_lng')),
            E = parseFloat(o.get('v2_geo_lat')),
            R = parseFloat(o.get('v2_geo_lng')),
            F = 4,
            z = 39.5,
            V = -98.35;
          M && I && ((z = M), (V = I), (F = 16));
          var O = parseInt(o.get('v2_plugshare_zoom'));
          O && (F = O), u();
        },
      };
    }
    (o.$inject = [
      '$rootScope',
      'RestangularFactory',
      '$cookies',
      '$filter',
      '$document',
      'ngMeta',
      '$window',
      '$compile',
      '$timeout',
      '$interval',
    ]),
      Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.PlugshareMapDirective = o);
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      'ngInject';
      return {
        restrict: 'CA',
        scope: { mapId: '@id', callbackFn: '&', control: '=' },
        link: function (o, a, s) {
          function n() {
            function s(t) {
              void 0,
                (o.simpleControl.coords = [t.lat(), t.lng()]),
                e.$apply(),
                o.callbackFn();
            }
            void 0,
              (o.simpleControl = o.control || {}),
              (o.simpleControl.goToLocation = function (e) {
                l.setCenter(e), u.setPosition(e), s(u.getPosition());
              });
            var n = [],
              c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            (o.simpleControl.addNearbyMarkers = function (e) {
              for (var t = 0; t < n.length; t++) n[t].setMap(null);
              n = [];
              for (var o = 0, a = 0; a < e.length; a++) {
                var s = [e[a].latitude, e[a].longitude],
                  i = new google.maps.LatLng(s[0], s[1]),
                  r = new google.maps.Marker({
                    position: i,
                    map: l,
                    label: c[o++ % c.length],
                    zIndex: 20 - a,
                  });
                n.push(r);
              }
            }),
              o.$watch(
                function () {
                  return o.simpleControl.open;
                },
                function (e, o) {
                  void 0,
                    t(function () {
                      google.maps.event.trigger(l, 'resize'),
                        l.setCenter(u.getPosition());
                    }, 1e3);
                }
              );
            var d = [33.9923633, -118.47218529999998];
            o.simpleControl.coords && (d = o.simpleControl.coords),
              void 0,
              void 0,
              (i = new google.maps.LatLng(d[0], d[1])),
              (r = {
                center: i,
                zoom: 16,
                minZoom: 4,
                zoomControl: !0,
                zoomControlOptions: {
                  position: google.maps.ControlPosition.RIGHT_CENTER,
                },
                mapTypeControl: !0,
                mapTypeControlOptions: {
                  style: google.maps.MapTypeControlStyle.DEFAULT,
                  position: google.maps.ControlPosition.RIGHT_BOTTOM,
                  mapTypeIds: ['roadmap', 'hybrid'],
                },
                scaleControl: !0,
                fullscreenControl: !1,
                gestureHandling: 'greedy',
                streetViewControl: !0,
                streetViewControlOptions: {
                  position: google.maps.ControlPosition.LEFT_BOTTOM,
                },
                styles: e.mapStyle,
                clickableIcons: !1,
                keyboardShortcuts: !1,
              }),
              (l = new google.maps.Map(a[0], r));
            var p = {
                url: 'https://assets.plugshare.com/assets/markers2.png?10252021',
                size: new google.maps.Size(32, 44),
                origin: new google.maps.Point(128, 0),
                scaledSize: new google.maps.Size(352, 44),
              },
              u = new google.maps.Marker({
                position: i,
                map: l,
                icon: p,
                zIndex: 25,
                draggable: !0,
              });
            google.maps.event.addListenerOnce(l, 'idle', function () {
              void 0,
                t(function () {
                  angular.element('#simple').css('height', '299px');
                }, 10),
                t(function () {
                  google.maps.event.trigger(l, 'resize'),
                    angular.element('#simple').css('height', '300px'),
                    l.setCenter(u.getPosition());
                }, 1e3);
            }),
              google.maps.event.addListener(l, 'click', function (e) {
                u.setPosition(e.latLng), s(u.getPosition());
              }),
              google.maps.event.addListener(u, 'dragend', function () {
                s(u.getPosition());
              }),
              google.maps.event.addDomListener(window, 'resize', function () {
                void 0, l.setCenter(u.getPosition());
              });
          }
          var i = null,
            l = null,
            r = null;
          void 0, n();
        },
      };
    }
    (o.$inject = ['$rootScope', '$timeout']),
      Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.SimpleMapDirective = o);
  },
  function (e, t) {
    'use strict';
    function o() {
      'ngInject';
      return {
        scope: { fileRead: '=' },
        link: function (e, t, o) {
          t.bind('change', function (t) {
            e.$apply(function () {
              (e.fileRead = t.target.files[0]), void 0;
            });
          });
        },
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.FileReadDirective = o);
  },
  function (e, t) {
    'use strict';
    function o() {
      'ngInject';
      return {
        restrict: 'A',
        link: function (e, t, o) {
          var a = e.$eval(o.fileDetails);
          t.bind('change', a);
        },
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.FileDetailsDirective = o);
  },
  function (e, t) {
    'use strict';
    function o(e) {
      'ngInject';
      return {
        restrict: 'A',
        link: function (t, o, a) {
          o.error(function () {
            if ((void 0, void 0, void 0, 'true' == o.attr('image-error'))) {
              o.attr('image-error', !1);
              var t = o.attr('src');
              o.attr('src', 'https://www.plugshare.com/images/loading.gif'),
                e(function () {
                  void 0, o.attr('src', t);
                }, 5e3);
            }
          });
        },
      };
    }
    (o.$inject = ['$timeout']),
      Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.ImageErrorDirective = o);
  },
  function (e, t) {
    'use strict';
    function o() {
      'ngInject';
      return {
        restrict: 'A',
        link: function (e, t, o) {
          t.load(function () {
            void 0, void 0, void 0;
            var e = t[0].width,
              a = t[0].height,
              s = e / a;
            void 0;
            var n = t.parent().parent(),
              i = n[0].clientWidth,
              l = n[0].clientHeight,
              r = i / l;
            if ((void 0, s > r)) {
              var c = (s / r) * 100 + '%';
              void 0, t.css('width', c);
            } else i > e && t.css('width', '100%');
          });
        },
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.ImageFitDirective = o);
  },
  function (e, t, o) {
    'use strict';
    angular.module('CognitoFactory', []),
      angular.module('CognitoFactory').factory('CognitoFactory', [
        '$cookies',
        function (e) {
          var t = {};
          (t.verifyEmailCode = null),
            (t.verifyEmailStatus = null),
            (t.forgotEmail = null),
            (t.changeEmailPlugshareId = null),
            (t.pendingEmail = null);
          var a = null,
            s = null,
            n = 15;
          void 0;
          var i =
              (AmazonCognitoIdentity.CognitoUserPool,
              AmazonCognitoIdentity.ICognitoUserPoolData,
              AmazonCognitoIdentity.ICognitoUserData,
              AmazonCognitoIdentity.CognitoUser),
            l = AmazonCognitoIdentity.CognitoUserSession,
            r = AmazonCognitoIdentity.CognitoIdToken,
            c = AmazonCognitoIdentity.CognitoRefreshToken,
            d = AmazonCognitoIdentity.CognitoAccessToken,
            p =
              'undefined' != typeof environment
                ? environment.awsDomain
                : 'auth-staging.plugshare.com',
            u =
              'undefined' != typeof environment
                ? environment.awsUserPoolWebClientId
                : '3v1e3qt0i6ih8c5h2l90qvr1ve',
            m =
              'undefined' != typeof environment
                ? environment.awsUserPoolId
                : 'us-east-1_IyeqyvxHB',
            g =
              'undefined' != typeof environment
                ? environment.oauthRedirectUri
                : 'https://staging.plugshare.com/oauth',
            h = { UserPoolId: m, ClientId: u },
            v = new AmazonCognitoIdentity.CognitoUserPool(h);
          void 0,
            (t.getSession = function (e) {
              return (
                void 0,
                (a = v.getCurrentUser()),
                void 0,
                new Promise(function (o, n) {
                  null != a
                    ? a.getSession(function (n, i) {
                        n && (void 0, void 0, o(!1)),
                          i ? (void 0, (s = i)) : void 0,
                          a.getUserAttributes(function (e, a) {
                            if (e) o(!1);
                            else {
                              void 0, void 0;
                              for (
                                var s = null, n = null, i = 0;
                                i < a.length;
                                i++
                              )
                                'custom:plugshare_id' == a[i].Name &&
                                  (s = a[i].Value),
                                  'custom:pending_email' == a[i].Name &&
                                    (n = a[i].Value);
                              s && (t.changeEmailPlugshareId = s),
                                (t.pendingEmail = n),
                                o(a);
                            }
                          }),
                          t.verifyEmailCode &&
                            t.verify_email(t.verifyEmailCode),
                          e && t.checkRefreshToken(!0);
                      })
                    : (void 0, o(!1));
                })
              );
            }),
            (t.checkRefreshToken = function (e) {
              if (s) {
                var t = s.getRefreshToken(),
                  o = s.getIdToken().decodePayload().exp;
                void 0,
                  e || (o && Date.now() > 1e3 * (o - n))
                    ? (void 0,
                      a.refreshSession(t, function (e, t) {
                        e ? void 0 : (void 0, void 0, (s = t));
                      }))
                    : void 0;
              }
            }),
            (t.checkRefreshTokenPromise = function (e) {
              return new Promise(function (t, o) {
                if (s) {
                  var i = s.getRefreshToken(),
                    l = s.getIdToken().decodePayload().exp;
                  void 0,
                    e || (l && Date.now() > 1e3 * (l - n))
                      ? (void 0,
                        a.refreshSession(i, function (e, o) {
                          e
                            ? (void 0, t(!1))
                            : (void 0, void 0, (s = o), t(!0));
                        }))
                      : (void 0, t(!1));
                }
              });
            }),
            (t.tokenCheck = function () {
              return (
                void 0,
                new Promise(function (e, t) {
                  if (s) {
                    var o = s.getRefreshToken(),
                      i = s.getIdToken().decodePayload().exp;
                    void 0,
                      i && Date.now() > 1e3 * (i - n)
                        ? (void 0,
                          a.refreshSession(o, function (t, o) {
                            t
                              ? (void 0, e(!1))
                              : (void 0, void 0, (s = o), e(!0));
                          }))
                        : (void 0, e(!1));
                  } else e(!1);
                })
              );
            }),
            (t.getJwtToken = function () {
              return s ? s.getIdToken().getJwtToken() : null;
            }),
            (t.signUp = function (e) {
              return (
                void 0,
                new Promise(function (t, o) {
                  var s = [],
                    n = { Name: 'email', Value: e.email },
                    i = { Name: 'locale', Value: e.locale },
                    l = new AmazonCognitoIdentity.CognitoUserAttribute(n),
                    r = new AmazonCognitoIdentity.CognitoUserAttribute(i);
                  if ((s.push(l), s.push(r), e.previous_cognito_id)) {
                    var c = {
                        Name: 'custom:prior_cognito_id',
                        Value: e.previous_cognito_id,
                      },
                      d = new AmazonCognitoIdentity.CognitoUserAttribute(c);
                    s.push(d);
                  }
                  var p = {};
                  v.signUp(
                    e.email,
                    e.password,
                    s,
                    null,
                    function (e, o) {
                      e
                        ? t({ success: !1, error: e.message })
                        : (void 0,
                          (a = o.user),
                          void 0,
                          void 0,
                          t({ success: !0, data: o }));
                    },
                    p
                  );
                })
              );
            }),
            (t.authenticateUser = function (e, o, s, n) {
              return (
                void 0,
                new Promise(function (i, l) {
                  var r = { Username: e, Password: o },
                    c = new AmazonCognitoIdentity.AuthenticationDetails(r),
                    d = { Username: e, Pool: v };
                  (a = new AmazonCognitoIdentity.CognitoUser(d)),
                    a.setAuthenticationFlowType('USER_PASSWORD_AUTH'),
                    a.authenticateUser(c, {
                      onSuccess: function (e) {
                        void 0;
                        var t = e.getIdToken().getJwtToken();
                        void 0,
                          s
                            ? a.getAttributeVerificationCode('email', {
                                onSuccess: function (e) {
                                  void 0, i({ success: !0, data: e });
                                },
                                onFailure: function (e) {
                                  i({ success: !1, error: e.message });
                                },
                              })
                            : i(
                                n
                                  ? {
                                      success: !0,
                                      data: e.accessToken.payload.username,
                                    }
                                  : { success: !0, data: t }
                              );
                      },
                      onFailure: function (o) {
                        void 0,
                          'PasswordResetRequiredException' == o.code &&
                            ((t.forgotEmail = e), t.forgotPassword()),
                          i({ success: !1, error: o.message });
                      },
                    });
                })
              );
            }),
            (t.resendConfirmationCode = function () {
              return (
                void 0,
                new Promise(function (e, t) {
                  null != a
                    ? a.getAttributeVerificationCode('email', {
                        onSuccess: function (t) {
                          void 0, e({ success: !0, data: t });
                        },
                        onFailure: function (t) {
                          void 0,
                            e(
                              'CustomMessage failed with error trigger email change resend.' ==
                                t.message
                                ? { success: !0, data: t }
                                : { success: !1, error: t.message }
                            );
                        },
                      })
                    : (void 0, e({ success: !1, error: 'Not logged in' }));
                })
              );
            }),
            (t.forgotPassword = function () {
              void 0;
              var e = { Username: t.forgotEmail, Pool: v };
              return (
                (a = new AmazonCognitoIdentity.CognitoUser(e)),
                new Promise(function (e, t) {
                  a.forgotPassword({
                    onSuccess: function (t) {
                      void 0, e({ success: !0 });
                    },
                    onFailure: function (t) {
                      void 0, e({ success: !1, error: t.message });
                    },
                  });
                })
              );
            }),
            (t.changePassword = function (e, t) {
              return new Promise(function (o, s) {
                a.changePassword(e, t, function (e, t) {
                  if (e) {
                    var a = !1;
                    e.message &&
                      -1 !==
                        e.message.indexOf(
                          "Value at 'previousPassword' failed to satisfy constraint: Member must have length greater than or equal to 6"
                        ) &&
                      (e.message =
                        'If you are using a legacy password that does not meet our current requirements, please logout use the Forgot Password button to reset your password.'),
                      o({ success: !1, error: e.message, forgot: a });
                  } else o({ success: !0 });
                  void 0;
                });
              });
            }),
            (t.updatePassword = function (e, o) {
              var s = { Username: t.forgotEmail, Pool: v };
              return (
                (a = new AmazonCognitoIdentity.CognitoUser(s)),
                new Promise(function (t, s) {
                  a.confirmPassword(e, o, {
                    onSuccess: function () {
                      void 0, t({ success: !0 });
                    },
                    onFailure: function (e) {
                      void 0, t({ success: !1, error: e.message });
                    },
                  });
                })
              );
            }),
            (t.signOut = function () {
              void 0,
                a &&
                  (a.signOut(),
                  (t.verifyEmailCode = null),
                  (t.verifyEmailStatus = null),
                  (t.forgotEmail = null),
                  (t.changeEmailPlugshareId = null),
                  (t.pendingEmail = null),
                  (a = null),
                  (s = null));
            }),
            (t.updateEmail = function (e, o) {
              return new Promise(function (s, n) {
                var i = [],
                  l = { Name: 'custom:verified_email', Value: e },
                  r = new AmazonCognitoIdentity.CognitoUserAttribute(l);
                i.push(r);
                var c = { Name: 'email', Value: o },
                  d = new AmazonCognitoIdentity.CognitoUserAttribute(c);
                i.push(d),
                  a.updateAttributes(i, function (e, a) {
                    e
                      ? 'CustomMessage failed with error Purposely fail sending code.' ==
                        e.message
                        ? ((t.pendingEmail = o), s({ success: !0 }))
                        : (void 0, s({ success: !1, error: e.message }))
                      : ((t.pendingEmail = o), s({ success: !0 })),
                      void 0;
                  });
              });
            }),
            (t.deleteUpdateEmail = function () {
              return (
                void 0,
                a
                  ? new Promise(function (e, t) {
                      var o = [];
                      o.push('custom:pending_email'),
                        o.push('custom:verified_email'),
                        a.deleteAttributes(o, function (t, o) {
                          t ? (void 0, e(!1)) : e({ success: !0 }), void 0;
                        });
                    })
                  : void 0
              );
            }),
            (t.verify_email = function (e) {
              return (
                void 0,
                a
                  ? new Promise(function (o, s) {
                      a.verifyAttribute('email', e.toString(), {
                        onSuccess: function (e) {
                          void 0,
                            (t.verifyEmailStatus = e),
                            t.checkRefreshToken(!0),
                            o({ success: !0 });
                        },
                        onFailure: function (e) {
                          void 0,
                            (t.verifyEmailStatus = e.message),
                            o({ success: !1, error: e.message });
                        },
                      });
                    })
                  : void 0
              );
            });
          var f = o(40),
            w = new f({
              clientId: u,
              accessTokenUri: 'https://' + p + '/oauth2/token',
              authorizationUri: 'https://' + p + '/oauth2/authorize',
              redirectUri: g,
              query: {
                scopes:
                  'phone,email,profile,openid,aws.cognito.signin.user.admin',
              },
            });
          return (
            (t.socialSignIn = function (e) {
              w.options.query.identity_provider = e;
              var t = w.code.getUri();
              window.open(t, '_self');
            }),
            (t.getToken = function () {
              return new Promise(function (e, o) {
                var s = window.location.href;
                void 0,
                  w.code.getToken(s).then(function (o) {
                    void 0,
                      (a = t.convertToCognitoSession(o)),
                      void 0,
                      e({ success: !0, data: a });
                  });
              });
            }),
            (t.convertToCognitoSession = function (e) {
              void 0;
              var o = new l({
                  IdToken: new r({ IdToken: e.data.id_token }),
                  RefreshToken: new c({ RefreshToken: e.data.refresh_token }),
                  AccessToken: new d({ AccessToken: e.data.access_token }),
                }),
                a = e.data.id_token;
              void 0, void 0;
              var s = t.createCognitoUser(
                o.getIdToken().decodePayload()['cognito:username']
              );
              return s.setSignInUserSession(o), s;
            }),
            (t.createCognitoUser = function (e) {
              var t = { Username: e, Pool: v },
                o = new i(t);
              return o;
            }),
            t
          );
        },
      ]);
  },
  function (e, t, o) {
    function a(e) {
      return b.from(e).toString('base64');
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        if (null == e[o]) throw new TypeError('Expected "' + o + '" to exist');
      }
    }
    function n(e) {
      var t = S[e.error] || e.error_description || e.error;
      if (t) {
        var o = new Error(t);
        return (o.body = e), (o.code = 'EAUTH'), o;
      }
    }
    function i(e) {
      try {
        return JSON.parse(e);
      } catch (t) {
        return k.parse(e);
      }
    }
    function l(e) {
      return Array.isArray(e) ? e.join(' ') : d(e);
    }
    function r(e, t) {
      return (
        s(e, 'clientId', 'authorizationUri'),
        e.authorizationUri +
          '?' +
          k.stringify(
            Object.assign(
              {
                client_id: e.clientId,
                redirect_uri: e.redirectUri,
                scope: l(e.scopes),
                response_type: t,
                state: e.state,
              },
              e.query
            )
          )
      );
    }
    function c(e, t) {
      return 'Basic ' + y(d(e) + ':' + d(t));
    }
    function d(e) {
      return null == e ? '' : String(e);
    }
    function p(e, t) {
      return {
        url: e.url,
        method: e.method,
        body: Object.assign({}, e.body, t.body),
        query: Object.assign({}, e.query, t.query),
        headers: Object.assign({}, e.headers, t.headers),
      };
    }
    function u(e, t) {
      (this.options = e),
        (this.request = t || C),
        (this.code = new f(this)),
        (this.token = new h(this)),
        (this.owner = new g(this)),
        (this.credentials = new v(this)),
        (this.jwt = new w(this));
    }
    function m(e, t) {
      (this.client = e),
        (this.data = t),
        (this.tokenType = t.token_type && t.token_type.toLowerCase()),
        (this.accessToken = t.access_token),
        (this.refreshToken = t.refresh_token),
        this.expiresIn(Number(t.expires_in));
    }
    function g(e) {
      this.client = e;
    }
    function h(e) {
      this.client = e;
    }
    function v(e) {
      this.client = e;
    }
    function f(e) {
      this.client = e;
    }
    function w(e) {
      this.client = e;
    }
    var y,
      b = o(41).Buffer,
      k = o(42),
      _ = o(45),
      C = o(48);
    (y = 'function' == typeof b ? a : window.btoa), (e.exports = u);
    var P = {
        Accept: 'application/json, application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      S = {
        invalid_request: [
          'The request is missing a required parameter, includes an',
          'invalid parameter value, includes a parameter more than',
          'once, or is otherwise malformed.',
        ].join(' '),
        invalid_client: [
          'Client authentication failed (e.g., unknown client, no',
          'client authentication included, or unsupported',
          'authentication method).',
        ].join(' '),
        invalid_grant: [
          'The provided authorization grant (e.g., authorization',
          'code, resource owner credentials) or refresh token is',
          'invalid, expired, revoked, does not match the redirection',
          'URI used in the authorization request, or was issued to',
          'another client.',
        ].join(' '),
        unauthorized_client: [
          'The client is not authorized to request an authorization',
          'code using this method.',
        ].join(' '),
        unsupported_grant_type: [
          'The authorization grant type is not supported by the',
          'authorization server.',
        ].join(' '),
        access_denied: [
          'The resource owner or authorization server denied the request.',
        ].join(' '),
        unsupported_response_type: [
          'The authorization server does not support obtaining',
          'an authorization code using this method.',
        ].join(' '),
        invalid_scope: [
          'The requested scope is invalid, unknown, or malformed.',
        ].join(' '),
        server_error: [
          'The authorization server encountered an unexpected',
          'condition that prevented it from fulfilling the request.',
          '(This error code is needed because a 500 Internal Server',
          'Error HTTP status code cannot be returned to the client',
          'via an HTTP redirect.)',
        ].join(' '),
        temporarily_unavailable: [
          'The authorization server is currently unable to handle',
          'the request due to a temporary overloading or maintenance',
          'of the server.',
        ].join(' '),
      };
    (u.Token = m),
      (u.prototype.createToken = function (e, t, o, a) {
        var s = Object.assign(
          {},
          a,
          'string' == typeof e ? { access_token: e } : e,
          'string' == typeof t ? { refresh_token: t } : t,
          'string' == typeof o ? { token_type: o } : o
        );
        return new u.Token(this, s);
      }),
      (u.prototype._request = function (e) {
        var t = e.url,
          o = k.stringify(e.body),
          a = k.stringify(e.query);
        return (
          a && (t += (-1 === t.indexOf('?') ? '?' : '&') + a),
          this.request(e.method, t, o, e.headers).then(function (e) {
            var t = i(e.body),
              o = n(t);
            if (o) return Promise.reject(o);
            if (e.status < 200 || e.status >= 399) {
              var a = new Error('HTTP status ' + e.status);
              return (
                (a.status = e.status),
                (a.body = e.body),
                (a.code = 'ESTATUS'),
                Promise.reject(a)
              );
            }
            return t;
          })
        );
      }),
      (m.prototype.expiresIn = function (e) {
        if ('number' == typeof e)
          (this.expires = new Date()),
            this.expires.setSeconds(this.expires.getSeconds() + e);
        else {
          if (!(e instanceof Date))
            throw new TypeError('Unknown duration: ' + e);
          this.expires = new Date(e.getTime());
        }
        return this.expires;
      }),
      (m.prototype.sign = function (e) {
        if (!this.accessToken)
          throw new Error('Unable to sign without access token');
        if (((e.headers = e.headers || {}), 'bearer' === this.tokenType))
          e.headers.Authorization = 'Bearer ' + this.accessToken;
        else {
          var t = e.url.split('#'),
            o = 'access_token=' + this.accessToken,
            a = t[0].replace(/[?&]access_token=[^&#]/, ''),
            s = t[1] ? '#' + t[1] : '';
          (e.url = a + (a.indexOf('?') > -1 ? '&' : '?') + o + s),
            (e.headers.Pragma = 'no-store'),
            (e.headers['Cache-Control'] = 'no-store');
        }
        return e;
      }),
      (m.prototype.refresh = function (e) {
        var t = this,
          o = Object.assign({}, this.client.options, e);
        return this.refreshToken
          ? this.client
              ._request(
                p(
                  {
                    url: o.accessTokenUri,
                    method: 'POST',
                    headers: Object.assign({}, P, {
                      Authorization: c(o.clientId, o.clientSecret),
                    }),
                    body: {
                      refresh_token: this.refreshToken,
                      grant_type: 'refresh_token',
                    },
                  },
                  o
                )
              )
              .then(function (e) {
                return t.client.createToken(Object.assign({}, t.data, e));
              })
          : Promise.reject(new Error('No refresh token'));
      }),
      (m.prototype.expired = function () {
        return Date.now() > this.expires.getTime();
      }),
      (g.prototype.getToken = function (e, t, o) {
        var a = this,
          s = Object.assign({}, this.client.options, o);
        return this.client
          ._request(
            p(
              {
                url: s.accessTokenUri,
                method: 'POST',
                headers: Object.assign({}, P, {
                  Authorization: c(s.clientId, s.clientSecret),
                }),
                body: {
                  scope: l(s.scopes),
                  username: e,
                  password: t,
                  grant_type: 'password',
                },
              },
              s
            )
          )
          .then(function (e) {
            return a.client.createToken(e);
          });
      }),
      (h.prototype.getUri = function (e) {
        var t = Object.assign({}, this.client.options, e);
        return r(t, 'token');
      }),
      (h.prototype.getToken = function (e, t) {
        var o = Object.assign({}, this.client.options, t),
          a = 'object' == typeof e ? e : _.parse(e, !0),
          s = _.parse(o.redirectUri);
        if ('string' == typeof a.pathname && a.pathname !== s.pathname)
          return Promise.reject(
            new TypeError(
              'Redirected path should match configured path, but got: ' +
                a.pathname
            )
          );
        if (!a.hash && !a.search)
          return Promise.reject(new TypeError('Unable to process uri: ' + e));
        var i = Object.assign(
            {},
            'string' == typeof a.query ? k.parse(a.query) : a.query || {},
            'string' == typeof a.hash ? k.parse(a.hash.substr(1)) : a.hash || {}
          ),
          l = n(i);
        return l
          ? Promise.reject(l)
          : null != o.state && i.state !== o.state
          ? Promise.reject(new TypeError('Invalid state: ' + i.state))
          : Promise.resolve(this.client.createToken(i));
      }),
      (v.prototype.getToken = function (e) {
        var t = this,
          o = Object.assign({}, this.client.options, e);
        return (
          s(o, 'clientId', 'clientSecret', 'accessTokenUri'),
          this.client
            ._request(
              p(
                {
                  url: o.accessTokenUri,
                  method: 'POST',
                  headers: Object.assign({}, P, {
                    Authorization: c(o.clientId, o.clientSecret),
                  }),
                  body: {
                    scope: l(o.scopes),
                    grant_type: 'client_credentials',
                  },
                },
                o
              )
            )
            .then(function (e) {
              return t.client.createToken(e);
            })
        );
      }),
      (f.prototype.getUri = function (e) {
        var t = Object.assign({}, this.client.options, e);
        return r(t, 'code');
      }),
      (f.prototype.getToken = function (e, t) {
        var o = this,
          a = Object.assign({}, this.client.options, t);
        s(a, 'clientId', 'accessTokenUri');
        var i = 'object' == typeof e ? e : _.parse(e, !0);
        if (
          'string' == typeof a.redirectUri &&
          'string' == typeof i.pathname &&
          i.pathname !== _.parse(a.redirectUri).pathname
        )
          return Promise.reject(
            new TypeError(
              'Redirected path should match configured path, but got: ' +
                i.pathname
            )
          );
        if (!i.query)
          return Promise.reject(new TypeError('Unable to process uri: ' + e));
        var l = 'string' == typeof i.query ? k.parse(i.query) : i.query || {},
          r = n(l);
        if (r) return Promise.reject(r);
        if (null != a.state && l.state !== a.state)
          return Promise.reject(new TypeError('Invalid state: ' + l.state));
        if (!l.code)
          return Promise.reject(
            new TypeError('Missing code, unable to request token')
          );
        var d = Object.assign({}, P),
          u = {
            code: l.code,
            grant_type: 'authorization_code',
            redirect_uri: a.redirectUri,
          };
        return (
          a.clientSecret
            ? (d.Authorization = c(a.clientId, a.clientSecret))
            : (u.client_id = a.clientId),
          this.client
            ._request(
              p(
                { url: a.accessTokenUri, method: 'POST', headers: d, body: u },
                a
              )
            )
            .then(function (e) {
              return o.client.createToken(e);
            })
        );
      }),
      (w.prototype.getToken = function (e, t) {
        var o = this,
          a = Object.assign({}, this.client.options, t),
          n = Object.assign({}, P);
        return (
          s(a, 'accessTokenUri'),
          a.clientId && (n.Authorization = c(a.clientId, a.clientSecret)),
          this.client
            ._request(
              p(
                {
                  url: a.accessTokenUri,
                  method: 'POST',
                  headers: n,
                  body: {
                    scope: l(a.scopes),
                    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    assertion: e,
                  },
                },
                a
              )
            )
            .then(function (e) {
              return o.client.createToken(e);
            })
        );
      });
  },
  function (e, t) {},
  function (e, t, o) {
    'use strict';
    (t.decode = t.parse = o(43)), (t.encode = t.stringify = o(44));
  },
  function (e, t) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    'use strict';
    function o(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function (e, t, a, s) {
      (t = t || '&'), (a = a || '=');
      var n = {};
      if ('string' != typeof e || 0 === e.length) return n;
      var i = /\+/g;
      e = e.split(t);
      var l = 1e3;
      s && 'number' == typeof s.maxKeys && (l = s.maxKeys);
      var r = e.length;
      l > 0 && r > l && (r = l);
      for (var c = 0; r > c; ++c) {
        var d,
          p,
          u,
          m,
          g = e[c].replace(i, '%20'),
          h = g.indexOf(a);
        h >= 0
          ? ((d = g.substr(0, h)), (p = g.substr(h + 1)))
          : ((d = g), (p = '')),
          (u = decodeURIComponent(d)),
          (m = decodeURIComponent(p)),
          o(n, u)
            ? Array.isArray(n[u])
              ? n[u].push(m)
              : (n[u] = [n[u], m])
            : (n[u] = m);
      }
      return n;
    };
  },
  function (e, t) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    'use strict';
    var o = function (e) {
      switch (typeof e) {
        case 'string':
          return e;
        case 'boolean':
          return e ? 'true' : 'false';
        case 'number':
          return isFinite(e) ? e : '';
        default:
          return '';
      }
    };
    e.exports = function (e, t, a, s) {
      return (
        (t = t || '&'),
        (a = a || '='),
        null === e && (e = void 0),
        'object' == typeof e
          ? Object.keys(e)
              .map(function (s) {
                var n = encodeURIComponent(o(s)) + a;
                return Array.isArray(e[s])
                  ? e[s]
                      .map(function (e) {
                        return n + encodeURIComponent(o(e));
                      })
                      .join(t)
                  : n + encodeURIComponent(o(e[s]));
              })
              .join(t)
          : s
          ? encodeURIComponent(o(s)) + a + encodeURIComponent(o(e))
          : ''
      );
    };
  },
  function (e, t, o) {
    function a() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    function s(e, t, o) {
      if (e && c(e) && e instanceof a) return e;
      var s = new a();
      return s.parse(e, t, o), s;
    }
    function n(e) {
      return (
        r(e) && (e = s(e)),
        e instanceof a ? e.format() : a.prototype.format.call(e)
      );
    }
    function i(e, t) {
      return s(e, !1, !0).resolve(t);
    }
    function l(e, t) {
      return e ? s(e, !1, !0).resolveObject(t) : t;
    }
    function r(e) {
      return 'string' == typeof e;
    }
    function c(e) {
      return 'object' == typeof e && null !== e;
    }
    function d(e) {
      return null === e;
    }
    function p(e) {
      return null == e;
    }
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    var u = o(46);
    (t.parse = s),
      (t.resolve = i),
      (t.resolveObject = l),
      (t.format = n),
      (t.Url = a);
    var m = /^([a-z0-9.+-]+:)/i,
      g = /:[0-9]*$/,
      h = ['<', '>', '"', '`', ' ', '\r', '\n', '	'],
      v = ['{', '}', '|', '\\', '^', '`'].concat(h),
      f = ["'"].concat(v),
      w = ['%', '/', '?', ';', '#'].concat(f),
      y = ['/', '?', '#'],
      b = 255,
      k = /^[a-z0-9A-Z_-]{0,63}$/,
      _ = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
      C = { javascript: !0, 'javascript:': !0 },
      P = { javascript: !0, 'javascript:': !0 },
      S = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        'http:': !0,
        'https:': !0,
        'ftp:': !0,
        'gopher:': !0,
        'file:': !0,
      },
      x = o(42);
    (a.prototype.parse = function (e, t, o) {
      if (!r(e))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof e
        );
      var a = e;
      a = a.trim();
      var s = m.exec(a);
      if (s) {
        s = s[0];
        var n = s.toLowerCase();
        (this.protocol = n), (a = a.substr(s.length));
      }
      if (o || s || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var i = '//' === a.substr(0, 2);
        !i || (s && P[s]) || ((a = a.substr(2)), (this.slashes = !0));
      }
      if (!P[s] && (i || (s && !S[s]))) {
        for (var l = -1, c = 0; c < y.length; c++) {
          var d = a.indexOf(y[c]);
          -1 !== d && (-1 === l || l > d) && (l = d);
        }
        var p, g;
        (g = -1 === l ? a.lastIndexOf('@') : a.lastIndexOf('@', l)),
          -1 !== g &&
            ((p = a.slice(0, g)),
            (a = a.slice(g + 1)),
            (this.auth = decodeURIComponent(p))),
          (l = -1);
        for (var c = 0; c < w.length; c++) {
          var d = a.indexOf(w[c]);
          -1 !== d && (-1 === l || l > d) && (l = d);
        }
        -1 === l && (l = a.length),
          (this.host = a.slice(0, l)),
          (a = a.slice(l)),
          this.parseHost(),
          (this.hostname = this.hostname || '');
        var h =
          '[' === this.hostname[0] &&
          ']' === this.hostname[this.hostname.length - 1];
        if (!h)
          for (
            var v = this.hostname.split(/\./), c = 0, A = v.length;
            A > c;
            c++
          ) {
            var T = v[c];
            if (T && !T.match(k)) {
              for (var L = '', M = 0, I = T.length; I > M; M++)
                L += T.charCodeAt(M) > 127 ? 'x' : T[M];
              if (!L.match(k)) {
                var E = v.slice(0, c),
                  R = v.slice(c + 1),
                  $ = T.match(_);
                $ && (E.push($[1]), R.unshift($[2])),
                  R.length && (a = '/' + R.join('.') + a),
                  (this.hostname = E.join('.'));
                break;
              }
            }
          }
        if (
          (this.hostname.length > b
            ? (this.hostname = '')
            : (this.hostname = this.hostname.toLowerCase()),
          !h)
        ) {
          for (
            var F = this.hostname.split('.'), z = [], c = 0;
            c < F.length;
            ++c
          ) {
            var V = F[c];
            z.push(V.match(/[^A-Za-z0-9_-]/) ? 'xn--' + u.encode(V) : V);
          }
          this.hostname = z.join('.');
        }
        var O = this.port ? ':' + this.port : '',
          N = this.hostname || '';
        (this.host = N + O),
          (this.href += this.host),
          h &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            '/' !== a[0] && (a = '/' + a));
      }
      if (!C[n])
        for (var c = 0, A = f.length; A > c; c++) {
          var q = f[c],
            U = encodeURIComponent(q);
          U === q && (U = escape(q)), (a = a.split(q).join(U));
        }
      var D = a.indexOf('#');
      -1 !== D && ((this.hash = a.substr(D)), (a = a.slice(0, D)));
      var j = a.indexOf('?');
      if (
        (-1 !== j
          ? ((this.search = a.substr(j)),
            (this.query = a.substr(j + 1)),
            t && (this.query = x.parse(this.query)),
            (a = a.slice(0, j)))
          : t && ((this.search = ''), (this.query = {})),
        a && (this.pathname = a),
        S[n] && this.hostname && !this.pathname && (this.pathname = '/'),
        this.pathname || this.search)
      ) {
        var O = this.pathname || '',
          V = this.search || '';
        this.path = O + V;
      }
      return (this.href = this.format()), this;
    }),
      (a.prototype.format = function () {
        var e = this.auth || '';
        e &&
          ((e = encodeURIComponent(e)),
          (e = e.replace(/%3A/i, ':')),
          (e += '@'));
        var t = this.protocol || '',
          o = this.pathname || '',
          a = this.hash || '',
          s = !1,
          n = '';
        this.host
          ? (s = e + this.host)
          : this.hostname &&
            ((s =
              e +
              (-1 === this.hostname.indexOf(':')
                ? this.hostname
                : '[' + this.hostname + ']')),
            this.port && (s += ':' + this.port)),
          this.query &&
            c(this.query) &&
            Object.keys(this.query).length &&
            (n = x.stringify(this.query));
        var i = this.search || (n && '?' + n) || '';
        return (
          t && ':' !== t.substr(-1) && (t += ':'),
          this.slashes || ((!t || S[t]) && s !== !1)
            ? ((s = '//' + (s || '')),
              o && '/' !== o.charAt(0) && (o = '/' + o))
            : s || (s = ''),
          a && '#' !== a.charAt(0) && (a = '#' + a),
          i && '?' !== i.charAt(0) && (i = '?' + i),
          (o = o.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e);
          })),
          (i = i.replace('#', '%23')),
          t + s + o + i + a
        );
      }),
      (a.prototype.resolve = function (e) {
        return this.resolveObject(s(e, !1, !0)).format();
      }),
      (a.prototype.resolveObject = function (e) {
        if (r(e)) {
          var t = new a();
          t.parse(e, !1, !0), (e = t);
        }
        var o = new a();
        if (
          (Object.keys(this).forEach(function (e) {
            o[e] = this[e];
          }, this),
          (o.hash = e.hash),
          '' === e.href)
        )
          return (o.href = o.format()), o;
        if (e.slashes && !e.protocol)
          return (
            Object.keys(e).forEach(function (t) {
              'protocol' !== t && (o[t] = e[t]);
            }),
            S[o.protocol] &&
              o.hostname &&
              !o.pathname &&
              (o.path = o.pathname = '/'),
            (o.href = o.format()),
            o
          );
        if (e.protocol && e.protocol !== o.protocol) {
          if (!S[e.protocol])
            return (
              Object.keys(e).forEach(function (t) {
                o[t] = e[t];
              }),
              (o.href = o.format()),
              o
            );
          if (((o.protocol = e.protocol), e.host || P[e.protocol]))
            o.pathname = e.pathname;
          else {
            for (
              var s = (e.pathname || '').split('/');
              s.length && !(e.host = s.shift());

            );
            e.host || (e.host = ''),
              e.hostname || (e.hostname = ''),
              '' !== s[0] && s.unshift(''),
              s.length < 2 && s.unshift(''),
              (o.pathname = s.join('/'));
          }
          if (
            ((o.search = e.search),
            (o.query = e.query),
            (o.host = e.host || ''),
            (o.auth = e.auth),
            (o.hostname = e.hostname || e.host),
            (o.port = e.port),
            o.pathname || o.search)
          ) {
            var n = o.pathname || '',
              i = o.search || '';
            o.path = n + i;
          }
          return (o.slashes = o.slashes || e.slashes), (o.href = o.format()), o;
        }
        var l = o.pathname && '/' === o.pathname.charAt(0),
          c = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
          u = c || l || (o.host && e.pathname),
          m = u,
          g = (o.pathname && o.pathname.split('/')) || [],
          s = (e.pathname && e.pathname.split('/')) || [],
          h = o.protocol && !S[o.protocol];
        if (
          (h &&
            ((o.hostname = ''),
            (o.port = null),
            o.host && ('' === g[0] ? (g[0] = o.host) : g.unshift(o.host)),
            (o.host = ''),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ('' === s[0] ? (s[0] = e.host) : s.unshift(e.host)),
              (e.host = null)),
            (u = u && ('' === s[0] || '' === g[0]))),
          c)
        )
          (o.host = e.host || '' === e.host ? e.host : o.host),
            (o.hostname =
              e.hostname || '' === e.hostname ? e.hostname : o.hostname),
            (o.search = e.search),
            (o.query = e.query),
            (g = s);
        else if (s.length)
          g || (g = []),
            g.pop(),
            (g = g.concat(s)),
            (o.search = e.search),
            (o.query = e.query);
        else if (!p(e.search)) {
          if (h) {
            o.hostname = o.host = g.shift();
            var v = o.host && o.host.indexOf('@') > 0 ? o.host.split('@') : !1;
            v && ((o.auth = v.shift()), (o.host = o.hostname = v.shift()));
          }
          return (
            (o.search = e.search),
            (o.query = e.query),
            (d(o.pathname) && d(o.search)) ||
              (o.path =
                (o.pathname ? o.pathname : '') + (o.search ? o.search : '')),
            (o.href = o.format()),
            o
          );
        }
        if (!g.length)
          return (
            (o.pathname = null),
            o.search ? (o.path = '/' + o.search) : (o.path = null),
            (o.href = o.format()),
            o
          );
        for (
          var f = g.slice(-1)[0],
            w = ((o.host || e.host) && ('.' === f || '..' === f)) || '' === f,
            y = 0,
            b = g.length;
          b >= 0;
          b--
        )
          (f = g[b]),
            '.' == f
              ? g.splice(b, 1)
              : '..' === f
              ? (g.splice(b, 1), y++)
              : y && (g.splice(b, 1), y--);
        if (!u && !m) for (; y--; y) g.unshift('..');
        !u || '' === g[0] || (g[0] && '/' === g[0].charAt(0)) || g.unshift(''),
          w && '/' !== g.join('/').substr(-1) && g.push('');
        var k = '' === g[0] || (g[0] && '/' === g[0].charAt(0));
        if (h) {
          o.hostname = o.host = k ? '' : g.length ? g.shift() : '';
          var v = o.host && o.host.indexOf('@') > 0 ? o.host.split('@') : !1;
          v && ((o.auth = v.shift()), (o.host = o.hostname = v.shift()));
        }
        return (
          (u = u || (o.host && g.length)),
          u && !k && g.unshift(''),
          g.length
            ? (o.pathname = g.join('/'))
            : ((o.pathname = null), (o.path = null)),
          (d(o.pathname) && d(o.search)) ||
            (o.path =
              (o.pathname ? o.pathname : '') + (o.search ? o.search : '')),
          (o.auth = e.auth || o.auth),
          (o.slashes = o.slashes || e.slashes),
          (o.href = o.format()),
          o
        );
      }),
      (a.prototype.parseHost = function () {
        var e = this.host,
          t = g.exec(e);
        t &&
          ((t = t[0]),
          ':' !== t && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e);
      });
  },
  function (e, t, o) {
    var a;
    (function (e, s) {
      !(function (n) {
        function i(e) {
          throw RangeError(E[e]);
        }
        function l(e, t) {
          for (var o = e.length, a = []; o--; ) a[o] = t(e[o]);
          return a;
        }
        function r(e, t) {
          var o = e.split('@'),
            a = '';
          o.length > 1 && ((a = o[0] + '@'), (e = o[1])),
            (e = e.replace(I, '.'));
          var s = e.split('.'),
            n = l(s, t).join('.');
          return a + n;
        }
        function c(e) {
          for (var t, o, a = [], s = 0, n = e.length; n > s; )
            (t = e.charCodeAt(s++)),
              t >= 55296 && 56319 >= t && n > s
                ? ((o = e.charCodeAt(s++)),
                  56320 == (64512 & o)
                    ? a.push(((1023 & t) << 10) + (1023 & o) + 65536)
                    : (a.push(t), s--))
                : a.push(t);
          return a;
        }
        function d(e) {
          return l(e, function (e) {
            var t = '';
            return (
              e > 65535 &&
                ((e -= 65536),
                (t += F(((e >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += F(e))
            );
          }).join('');
        }
        function p(e) {
          return 10 > e - 48
            ? e - 22
            : 26 > e - 65
            ? e - 65
            : 26 > e - 97
            ? e - 97
            : k;
        }
        function u(e, t) {
          return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
        }
        function m(e, t, o) {
          var a = 0;
          for (
            e = o ? $(e / S) : e >> 1, e += $(e / t);
            e > (R * C) >> 1;
            a += k
          )
            e = $(e / R);
          return $(a + ((R + 1) * e) / (e + P));
        }
        function g(e) {
          var t,
            o,
            a,
            s,
            n,
            l,
            r,
            c,
            u,
            g,
            h = [],
            v = e.length,
            f = 0,
            w = A,
            y = x;
          for (o = e.lastIndexOf(T), 0 > o && (o = 0), a = 0; o > a; ++a)
            e.charCodeAt(a) >= 128 && i('not-basic'), h.push(e.charCodeAt(a));
          for (s = o > 0 ? o + 1 : 0; v > s; ) {
            for (
              n = f, l = 1, r = k;
              s >= v && i('invalid-input'),
                (c = p(e.charCodeAt(s++))),
                (c >= k || c > $((b - f) / l)) && i('overflow'),
                (f += c * l),
                (u = y >= r ? _ : r >= y + C ? C : r - y),
                !(u > c);
              r += k
            )
              (g = k - u), l > $(b / g) && i('overflow'), (l *= g);
            (t = h.length + 1),
              (y = m(f - n, t, 0 == n)),
              $(f / t) > b - w && i('overflow'),
              (w += $(f / t)),
              (f %= t),
              h.splice(f++, 0, w);
          }
          return d(h);
        }
        function h(e) {
          var t,
            o,
            a,
            s,
            n,
            l,
            r,
            d,
            p,
            g,
            h,
            v,
            f,
            w,
            y,
            P = [];
          for (e = c(e), v = e.length, t = A, o = 0, n = x, l = 0; v > l; ++l)
            (h = e[l]), 128 > h && P.push(F(h));
          for (a = s = P.length, s && P.push(T); v > a; ) {
            for (r = b, l = 0; v > l; ++l)
              (h = e[l]), h >= t && r > h && (r = h);
            for (
              f = a + 1,
                r - t > $((b - o) / f) && i('overflow'),
                o += (r - t) * f,
                t = r,
                l = 0;
              v > l;
              ++l
            )
              if (((h = e[l]), t > h && ++o > b && i('overflow'), h == t)) {
                for (
                  d = o, p = k;
                  (g = n >= p ? _ : p >= n + C ? C : p - n), !(g > d);
                  p += k
                )
                  (y = d - g),
                    (w = k - g),
                    P.push(F(u(g + (y % w), 0))),
                    (d = $(y / w));
                P.push(F(u(d, 0))), (n = m(o, f, a == s)), (o = 0), ++a;
              }
            ++o, ++t;
          }
          return P.join('');
        }
        function v(e) {
          return r(e, function (e) {
            return L.test(e) ? g(e.slice(4).toLowerCase()) : e;
          });
        }
        function f(e) {
          return r(e, function (e) {
            return M.test(e) ? 'xn--' + h(e) : e;
          });
        }
        var w =
          ('object' == typeof t && t && !t.nodeType && t,
          'object' == typeof e && e && !e.nodeType && e,
          'object' == typeof s && s);
        (w.global === w || w.window === w || w.self === w) && (n = w);
        var y,
          b = 2147483647,
          k = 36,
          _ = 1,
          C = 26,
          P = 38,
          S = 700,
          x = 72,
          A = 128,
          T = '-',
          L = /^xn--/,
          M = /[^\x20-\x7E]/,
          I = /[\x2E\u3002\uFF0E\uFF61]/g,
          E = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          R = k - _,
          $ = Math.floor,
          F = String.fromCharCode;
        (y = {
          version: '1.3.2',
          ucs2: { decode: c, encode: d },
          decode: g,
          encode: h,
          toASCII: f,
          toUnicode: v,
        }),
          (a = function () {
            return y;
          }.call(t, o, t, e)),
          !(void 0 !== a && (e.exports = a));
      })(this);
    }.call(
      t,
      o(47)(e),
      (function () {
        return this;
      })()
    ));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          (e.children = []),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t, o, a) {
      return new Promise(function (s, n) {
        var i = new window.XMLHttpRequest();
        i.open(e, t),
          (i.onload = function () {
            return s({ status: i.status, body: i.responseText });
          }),
          (i.onerror = i.onabort =
            function () {
              return n(new Error(i.statusText || 'XHR aborted: ' + t));
            }),
          Object.keys(a).forEach(function (e) {
            i.setRequestHeader(e, a[e]);
          }),
          i.send(o);
      });
    };
  },
  function (e, t) {
    'use strict';
    function o(e) {
      if (Array.isArray(e)) {
        for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
        return o;
      }
      return Array.from(e);
    }
    angular.module('RestangularFactory', []),
      angular.module('RestangularFactory').factory('RestangularFactory', [
        'Restangular',
        '$q',
        '$cookies',
        'md5',
        'CognitoFactory',
        '$rootScope',
        function (e, t, a, s, n, i) {
          var l = {};
          return (
            (l.locations = []),
            (l.localization = null),
            (l.activeRequests = []),
            (l.user = {}),
            (l.bookmarks = []),
            (l.trips = []),
            (l.paymentSources = []),
            (l.chargeSessions = []),
            (l.moreChargeSessions = !0),
            (l.userCheckins = {}),
            (l.minSupportedPWPSVersion = 2),
            (l.maxSupportedPWPSVersion = 6),
            (l.busy = !1),
            (l.filters = {
              region: 'US',
              outlets: [],
              networks: [],
              other_networks: 1,
              amenities: [],
              filter_cost: !0,
              filter_restricted: !1,
              filter_residential: !1,
              filter_availability: !0,
              filter_soon: !0,
              filter_pwps: !1,
              plugscore: 0,
              area_id: null,
            }),
            (l.resetFilters = function (e) {
              if (
                (e || (l.filters.outlets = []),
                (l.filters.networks = []),
                (l.filters.other_networks = 1),
                (l.filters.amenities = []),
                (l.filters.filter_cost = !0),
                (l.filters.filter_restricted = !1),
                (l.filters.filter_residential = !1),
                (l.filters.filter_availability = !0),
                (l.filters.filter_soon = !0),
                (l.filters.filter_pwps = !1),
                (l.filters.plugscore = 0),
                (l.filters.area_id = null),
                l.localization)
              ) {
                if (!e)
                  for (var t = 0; t < l.localization.outlets_filter.length; t++)
                    1 != l.localization.outlets_filter[t].connector &&
                      l.filters.outlets.push({
                        connector: l.localization.outlets_filter[t].connector,
                        power: l.localization.outlets_filter[t].power,
                      });
                for (
                  var o = 0;
                  o < l.localization.filterable_networks.length;
                  o++
                )
                  l.filters.networks.push(
                    l.localization.filterable_networks[o].id
                  );
              }
            }),
            (l.getHeaders = function (e) {
              var t = {},
                o = n.getJwtToken();
              return (
                o && (t = { 'Cognito-Authorization': o }),
                'upload' == e && (t['Content-Type'] = void 0),
                l.language_code && (t['Accept-Language'] = l.language_code),
                t
              );
            }),
            (l.logout = function () {
              (l.user = {}),
                l.activeRequests.bookmarks &&
                  l.activeRequests.bookmarks.resolve(),
                (l.bookmarks = []),
                l.activeRequests.trips && l.activeRequests.trips.resolve(),
                (l.trips = []);
            }),
            (l.getConfig = function (o, a) {
              void 0,
                void 0,
                l.clearRunningRequests(),
                l.activeRequests.config && l.activeRequests.config.resolve(),
                (l.activeRequests.config = t.defer());
              var s = {};
              return (
                o &&
                  'XX' != o &&
                  ('country' == a && (s.country_code = o),
                  'region' == a && (s.locale = o)),
                n.tokenCheck().then(function () {
                  return e
                    .one('config')
                    .withHttpConfig({
                      timeout: l.activeRequests.config.promise,
                    })
                    .get(s, l.getHeaders())
                    .then(
                      function (e) {
                        (l.filters.outlets = []), (l.filters.networks = []);
                        for (var t = 0; t < e.outlets_filter.length; t++)
                          1 != e.outlets_filter[t].connector &&
                            l.filters.outlets.push({
                              connector: e.outlets_filter[t].connector,
                              power: e.outlets_filter[t].power,
                            });
                        for (var o = 0; o < e.filterable_networks.length; o++)
                          l.filters.networks.push(e.filterable_networks[o].id);
                        e.clean_configurations = [];
                        for (var a = 0; a < e.outlet_configurations.length; a++)
                          e.clean_configurations.push(
                            e.outlet_configurations[a].outlets
                          );
                        return (
                          void 0,
                          void 0,
                          (l.localization = e.plain()),
                          { success: !0, data: e.plain() }
                        );
                      },
                      function () {
                        return void 0, { success: !1 };
                      }
                    );
                })
              );
            }),
            (l.getRegionVehicles = function (t) {
              return (
                void 0,
                void 0,
                l.clearRunningRequests(),
                n.tokenCheck().then(function () {
                  return e
                    .one('vehicles')
                    .get({ locale: t }, l.getHeaders())
                    .then(
                      function (e) {
                        for (var t = [], o = 0; o < e.length; o++) {
                          var a = _.findKey(t, { name: e[o].group });
                          void 0 == a &&
                            t.push({
                              name: e[o].group,
                              image_url: e[o].make_image_url,
                            });
                        }
                        return (
                          (t = _.sortBy(t, 'name')),
                          void 0,
                          (l.localization.makes = t),
                          (l.localization.vehicles = e.plain()),
                          { success: !0, data: l.localization }
                        );
                      },
                      function () {
                        return void 0, { success: !1 };
                      }
                    );
                })
              );
            }),
            (l.clearRunningRequests = function () {
              for (var e in l.activeRequests) l.activeRequests[e].resolve();
            }),
            (l.getOptionalFilters = function () {
              if (l.localization) {
                var e = {},
                  t =
                    i.customMode && i.customMode.filters
                      ? i.customMode.filters
                      : l.filters;
                if (t.outlets.length > 0) {
                  for (var o = [], a = 0; a < t.outlets.length; a++)
                    void 0 !=
                      _.findKey(l.localization.outlets_filter, {
                        connector: t.outlets[a].connector,
                        power: t.outlets[a].power,
                      }) &&
                      o.push({
                        connector: t.outlets[a].connector,
                        power: t.outlets[a].power,
                      });
                  o.length > 0
                    ? (e.outlets = JSON.stringify(o))
                    : (e.outlets = '[{"connector": 0}]');
                } else e.outlets = '[{"connector": 0}]';
                if (
                  ((void 0 !=
                    _.findKey(t.outlets, { connector: 3, power: 0 }) ||
                    void 0 !=
                      _.findKey(t.outlets, { connector: 6, power: 1 }) ||
                    void 0 !=
                      _.findKey(t.outlets, { connector: 13, power: 0 })) &&
                    t.power &&
                    l.localization.power_filter_enabled &&
                    (e.minimum_power = t.power),
                  0 == l.localization.filterable_networks.length)
                );
                else if (t.other_networks) {
                  for (
                    var s = [], n = 0;
                    n < l.localization.filterable_networks.length;
                    n++
                  )
                    (t.networks &&
                      -1 !=
                        t.networks.indexOf(
                          l.localization.filterable_networks[n].id
                        )) ||
                      s.push(l.localization.filterable_networks[n].id);
                  s.length > 0 && (e.exclude_networks = s.join(','));
                } else {
                  for (
                    var r = [], c = 0;
                    c < l.localization.filterable_networks.length;
                    c++
                  )
                    -1 !=
                      t.networks.indexOf(
                        l.localization.filterable_networks[c].id
                      ) && r.push(l.localization.filterable_networks[c].id);
                  r.length > 0
                    ? (e.networks = r.join(','))
                    : (e.networks = '-1');
                }
                if (
                  (t.filter_cost ? (e.cost = 'true') : (e.cost = 'false'),
                  (e.access = '1'),
                  t.filter_restricted && (e.access += ',2'),
                  t.filter_residential && (e.access += ',3'),
                  t.filter_availability || (e.availability = '0,1'),
                  t.filter_soon
                    ? (e.include_coming_soon = 'true')
                    : (e.include_coming_soon = 'false'),
                  t.plugscore && (e.score = t.plugscore),
                  t.amenities.length > 0 &&
                    t.amenities.length < 9 &&
                    (e.amenities = t.amenities.join(',')),
                  t.filter_pwps && l.localization.pwps_filter_enabled)
                ) {
                  for (
                    var d = [], a = l.minSupportedPWPSVersion;
                    a <= l.maxSupportedPWPSVersion;
                    a++
                  )
                    d.push(a);
                  e.pwps_versions = d.join();
                }
                return t.area_id && (e.area_id = t.area_id), e;
              }
              return Promise.resolve(!1);
            }),
            (l.search = function (o, s) {
              if (l.localization) {
                void 0;
                var i = { count: 6, query: o },
                  r = l.getOptionalFilters();
                for (var c in r) i[c] = r[c];
                var d = parseFloat(a.get('v2_geo_lat')),
                  p = parseFloat(a.get('v2_geo_lng'));
                return (
                  d && p && ((i.latitude = d), (i.longitude = p)),
                  l.activeRequests.search && l.activeRequests.search.resolve(),
                  (l.activeRequests.search = t.defer()),
                  n.tokenCheck().then(function () {
                    return e
                      .all('locations/search')
                      .withHttpConfig({
                        timeout: l.activeRequests.search.promise,
                      })
                      .getList(i, l.getHeaders())
                      .then(function (e) {
                        void 0;
                        for (var t = 0; t < e.length; t++)
                          e[t].display_name = l.getDisplayName(e[t]);
                        return void 0, e.plain();
                      });
                  })
                );
              }
              return Promise.resolve(!1);
            }),
            (l.logSearch = function (t) {
              return (
                void 0,
                void 0,
                e
                  .all('usage/location_searches')
                  .post(t, void 0, l.getHeaders())
                  .then(function (e) {
                    return e.success && void 0, e.plain();
                  })
              );
            }),
            (l.logDirectionsRequest = function (t, o) {
              void 0;
              var a = { service: t };
              return (
                void 0,
                e
                  .all('locations/' + o + '/directions_request')
                  .post(a, void 0, l.getHeaders())
                  .then(function (e) {
                    return e.success && void 0, e.plain();
                  })
              );
            }),
            (l.region = function (o, a, s, r, c) {
              if (l.localization) {
                void 0,
                  (l.busy = !0),
                  l.activeRequests.region && l.activeRequests.region.resolve(),
                  (l.activeRequests.region = t.defer());
                var d = {
                  count: o,
                  latitude: a,
                  longitude: s,
                  spanLat: r,
                  spanLng: c,
                };
                d.minimal = 0;
                var p = l.getOptionalFilters();
                for (var u in p) d[u] = p[u];
                return (
                  i.rank && ((d.count = 10), (d.sort = 'rank')),
                  n.tokenCheck().then(function () {
                    return e
                      .all('locations/region')
                      .withHttpConfig({
                        timeout: l.activeRequests.region.promise,
                      })
                      .getList(d, l.getHeaders())
                      .then(
                        function (e) {
                          return (
                            void 0,
                            void 0,
                            (l.locations = e),
                            (l.busy = !1),
                            e.plain()
                          );
                        },
                        function (e) {
                          return void 0, void 0, (l.busy = !1), !1;
                        }
                      );
                  })
                );
              }
              return Promise.resolve(!1);
            }),
            (l.getPolyline = function (o, a, s, i, r, c) {
              if (l.localization) {
                void 0,
                  (l.busy = !0),
                  l.activeRequests.region && l.activeRequests.region.resolve(),
                  (l.activeRequests.region = t.defer());
                var d = {
                    count: 250,
                    polyline: o.join(),
                    distance: a,
                    latitude: s,
                    longitude: i,
                    spanLat: r,
                    spanLng: c,
                  },
                  p = l.getOptionalFilters();
                for (var u in p) d[u] = p[u];
                return n.tokenCheck().then(function () {
                  return e
                    .all('locations/polyline?minimal=1')
                    .withHttpConfig({
                      timeout: l.activeRequests.region.promise,
                    })
                    .post(d, void 0, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          void 0,
                          void 0,
                          (l.locations = e),
                          (l.busy = !1),
                          e.plain()
                        );
                      },
                      function (e) {
                        return void 0, void 0, (l.busy = !1), !1;
                      }
                    );
                });
              }
              return Promise.resolve(!1);
            }),
            (l.getDisplayName = function (e, t) {
              var o = 'Unknown Location';
              if (3 == e.access)
                if (e.owner && e.owner.display_name) {
                  var a = e.owner.display_name;
                  (a = a.charAt(0).toUpperCase() + a.slice(1)),
                    (o = a.trim() + "'s Home Charger");
                } else o = "Anonymous User's Home Charger";
              else e.name ? (o = e.name) : t && e.address && (o = e.address);
              return o;
            }),
            (l.processLocation = function (e) {
              (e.display_name = l.getDisplayName(e)),
                (e.connectors = []),
                (e.networks = []);
              for (var t = 0, o = 0; o < e.stations.length; o++) {
                for (var a = 0; a < e.stations[o].outlets.length; a++) {
                  'UNDER_REPAIR' == e.stations[o].outlets[a].status && (t += 1);
                  var s = _.findKey(e.connectors, {
                    connector: e.stations[o].outlets[a].connector,
                    power: e.stations[o].outlets[a].power,
                  });
                  void 0 == s &&
                    (s =
                      e.connectors.push({
                        connector: e.stations[o].outlets[a].connector,
                        power: e.stations[o].outlets[a].power,
                        numUnknown: [],
                        numAvailable: [],
                        numInUse: [],
                        numUnavailable: [],
                        stationTypes: [],
                        networks: [],
                        plugCount: 0,
                      }) - 1);
                  var n = e.connectors[s];
                  switch (e.stations[o].outlets[a].status) {
                    case null:
                      n.numUnknown.push(o);
                      break;
                    case 'UNKNOWN':
                      n.numUnknown.push(o);
                      break;
                    case 'AVAILABLE':
                      n.numAvailable.push(o);
                      break;
                    case 'CHARGING':
                      n.numInUse.push(o);
                      break;
                    case 'CONNECTED':
                      n.numInUse.push(o);
                      break;
                    default:
                      n.numUnavailable.push(o);
                  }
                  n.plugCount++,
                    -1 == n.stationTypes.indexOf(o) && n.stationTypes.push(o);
                  var i = e.stations[o].outlets[a].kilowatts;
                  i &&
                    ((void 0 == n.kilowatts_low || i < n.kilowatts_low) &&
                      (n.kilowatts_low = i),
                    (void 0 == n.kilowatts_high || i > n.kilowatts_high) &&
                      (n.kilowatts_high = i),
                    n.kilowatts_low == n.kilowatts_high
                      ? (n.kilowatts_string = n.kilowatts_low)
                      : (n.kilowatts_string =
                          n.kilowatts_low + ' - ' + n.kilowatts_high));
                  var r = e.connectors[s].networks;
                  e.stations[o].network &&
                    e.stations[o].network.name &&
                    -1 == r.indexOf(e.stations[o].network.name) &&
                    r.push(e.stations[o].network.name),
                    e.stations[o].network &&
                      e.stations[o].network.name &&
                      -1 == e.networks.indexOf(e.stations[o].network.name) &&
                      e.networks.push(e.stations[o].network.name);
                }
                e.stations[o].pwps_version >= l.minSupportedPWPSVersion &&
                  e.stations[o].pwps_version <= l.maxSupportedPWPSVersion &&
                  (e.show_pwps = !0);
              }
              t &&
                ((e.station_repair = !0),
                t == e.stations.length && (e.under_repair = !0)),
                void 0,
                void 0,
                void 0,
                void 0;
              for (var c = 0; c < e.connectors.length; c++) {
                var d = e.connectors[c].kilowatts_low;
                (void 0 == e.kilowatts_low || d < e.kilowatts_low) &&
                  (e.kilowatts_low = d);
                var p = e.connectors[c].kilowatts_high;
                (void 0 == e.kilowatts_high || p > e.kilowatts_high) &&
                  (e.kilowatts_high = p),
                  e.kilowatts_low == e.kilowatts_high
                    ? (e.kilowatts_string = e.kilowatts_low)
                    : (e.kilowatts_string =
                        e.kilowatts_low + ' - ' + e.kilowatts_high);
              }
              return (
                (e.public_reviews = l.getReviews(e.reviews, 5)),
                void 0,
                (e.hero = null),
                e.photos.length > 0 &&
                  e.photos[0].url &&
                  (e.hero = e.photos[0].url),
                void 0,
                e
              );
            }),
            (l.getLocation = function (o) {
              return (
                void 0,
                l.activeRequests.location &&
                  l.activeRequests.location.resolve(),
                (l.activeRequests.location = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('locations', o)
                    .withHttpConfig({
                      timeout: l.activeRequests.location.promise,
                    })
                    .customGET('', {}, l.getHeaders())
                    .then(
                      function (e) {
                        return void 0, l.processLocation(e.plain());
                      },
                      function () {
                        return void 0, !1;
                      }
                    );
                })
              );
            }),
            (l.getUserLocationCheckins = function (o) {
              if ((void 0, l.user)) {
                var a = { location_id: o };
                return (
                  l.activeRequests.userCheckins &&
                    l.activeRequests.userCheckins.resolve(),
                  (l.activeRequests.userCheckins = t.defer()),
                  n.tokenCheck().then(function () {
                    return e
                      .one('users/reviews')
                      .withHttpConfig({
                        timeout: l.activeRequests.userCheckins.promise,
                      })
                      .get(a, l.getHeaders())
                      .then(
                        function (e) {
                          return (
                            void 0,
                            (l.userCheckins = e),
                            { success: !0, data: e.plain() }
                          );
                        },
                        function (e) {
                          return (
                            void 0,
                            (l.userCheckins = {}),
                            { success: !1, error: e }
                          );
                        }
                      );
                  })
                );
              }
              return Promise.resolve(!1);
            }),
            (l.getNearby = function (o, a, s, i) {
              void 0;
              var r = {
                include_extras: !0,
                latitude: o,
                longitude: a,
                count: 10,
                access: '1,2',
              };
              if ((s && (r.radius = s), i)) {
                var c = l.getOptionalFilters();
                for (var d in c) r[d] = c[d];
              }
              return (
                l.activeRequests.nearby && l.activeRequests.nearby.resolve(),
                (l.activeRequests.nearby = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .all('locations/nearby')
                    .withHttpConfig({
                      timeout: l.activeRequests.nearby.promise,
                    })
                    .getList(r, l.getHeaders())
                    .then(
                      function (e) {
                        void 0;
                        for (var t = 0; t < e.length; t++)
                          e[t].display_name = l.getDisplayName(e[t]);
                        return { success: !0, data: e.plain() };
                      },
                      function (e) {
                        return void 0, { success: !1, error: e };
                      }
                    );
                })
              );
            }),
            (l.getReviews = function (e, t) {
              for (
                var o = [], a = 0;
                a < e.length && (void 0, !(t && a > t - 1));
                a++
              ) {
                var s = e[a];
                o.push(s);
              }
              return o;
            }),
            (l.getReview = function (e, t) {
              void 0;
              var o = _.findKey(e, { id: t });
              if (void 0 != o) {
                var a = e[o];
                return void 0, [a];
              }
              return [];
            }),
            (l.getPhoto = function (e, t) {
              void 0;
              var o = _.findKey(e, { id: t });
              if (void 0 != o) {
                var a = e[o];
                return void 0, a;
              }
              return null;
            }),
            (l.addVehicle = function (o, a) {
              return (
                void 0,
                l.activeRequests.vehicles &&
                  l.activeRequests.vehicles.resolve(),
                (l.activeRequests.vehicles = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.vehicles.promise,
                    })
                    .all('vehicles')
                    .post(o, {}, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          (l.user.vehicles[a] = l.simplifyVehicleNaming(e)),
                          void 0,
                          void 0,
                          { success: !0, data: e.plain() }
                        );
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.updateVehicle = function (o, a) {
              return (
                void 0,
                l.activeRequests.vehicles &&
                  l.activeRequests.vehicles.resolve(),
                (l.activeRequests.vehicles = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.vehicles.promise,
                    })
                    .one('vehicles', l.user.vehicles[a].id)
                    .customPUT(o, void 0, {}, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          (l.user.vehicles[a] = l.simplifyVehicleNaming(e)),
                          void 0,
                          void 0,
                          { success: !0, data: e.plain() }
                        );
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.updateVehicleFilters = function (o, a) {
              return (
                void 0,
                l.activeRequests.vehicleFilters &&
                  l.activeRequests.vehicleFilters.resolve(),
                (l.activeRequests.vehicleFilters = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.vehicleFilters.promise,
                    })
                    .one('vehicles', l.user.vehicles[a].id)
                    .customPUT(o, void 0, {}, l.getHeaders())
                    .then(
                      function (e) {
                        return void 0, void 0, { success: !0, data: e.plain() };
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.deleteVehicle = function (o) {
              return (
                void 0,
                l.activeRequests.vehicles &&
                  l.activeRequests.vehicles.resolve(),
                (l.activeRequests.vehicles = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .one('vehicles', o)
                    .customDELETE('', {}, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          (l.user.vehicles = l.convertVehicles(e)),
                          void 0,
                          void 0,
                          { success: !0, data: e.plain() }
                        );
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.convertVehicles = function (e) {
              if (e && e.length) {
                for (var t = 0; t < e.length; t++)
                  e[t] = l.simplifyVehicleNaming(e[t]);
                return e;
              }
              return [];
            }),
            (l.simplifyVehicleNaming = function (e) {
              return (
                void 0,
                void 0,
                e.vehicle_base_id &&
                  ((e.model_id = e.vehicle_base_id), delete e.vehicle_base_id),
                e.vehicle_variation_id &&
                  ((e.trim_id = e.vehicle_variation_id),
                  delete e.vehicle_variation_id),
                e.vehicle_color_id &&
                  ((e.color_id = e.vehicle_color_id),
                  delete e.vehicle_color_id),
                void 0,
                e
              );
            }),
            (l.getVehicleById = function (e) {
              if (e && l.localization) {
                void 0;
                var t = _.findKey(l.localization.vehicles, { id: parseInt(e) });
                if (void 0 != t) {
                  var o = l.localization.vehicles[t];
                  return o;
                }
                return void 0, '';
              }
              return Promise.resolve(!1);
            }),
            (l.locationsList = function () {
              return l.locations;
            }),
            (l.getUser = function (t) {
              return (
                void 0,
                n.tokenCheck().then(function () {
                  return e
                    .one('users/' + t)
                    .get({}, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          (l.user = e),
                          (l.user.vehicles = l.convertVehicles(
                            l.user.vehicles
                          )),
                          { success: !0, user: e.plain() }
                        );
                      },
                      function (e) {
                        return void 0, void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.appearance = function (o, a) {
              if ((void 0, l.user && l.user.id)) {
                var s = {};
                return (
                  o && (s.latitude = o),
                  a && (s.longitude = a),
                  l.activeRequests.appearances &&
                    l.activeRequests.appearances.resolve(),
                  (l.activeRequests.appearances = t.defer()),
                  e
                    .one('users', l.user.id)
                    .one('appearances')
                    .withHttpConfig({
                      timeout: l.activeRequests.appearances.promise,
                    })
                    .customPOST(s, void 0, {}, l.getHeaders())
                    .then(function (e) {
                      return void 0, e.plain();
                    })
                );
              }
            }),
            (l.acceptPrivacyPolicy = function () {
              return (
                void 0,
                l.activeRequests.privacy && l.activeRequests.privacy.resolve(),
                (l.activeRequests.privacy = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .one('privacy_policy')
                    .withHttpConfig({
                      timeout: l.activeRequests.privacy.promise,
                    })
                    .customPOST({ accepted: !0 }, void 0, {}, l.getHeaders())
                    .then(function (e) {
                      return (l.statistics = e), void 0, e.plain();
                    });
                })
              );
            }),
            (l.updateProfile = function (o) {
              void 0;
              var a = {};
              for (var s in o) a[s] = o[s];
              return (
                l.activeRequests.profile && l.activeRequests.profile.resolve(),
                (l.activeRequests.profile = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.profile.promise,
                    })
                    .customPUT(a, void 0, {}, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          void 0,
                          o.email && (e.email = o.email),
                          { success: !0, data: e.plain() }
                        );
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.getStatistics = function () {
              return (
                void 0,
                l.activeRequests.statistics &&
                  l.activeRequests.statistics.resolve(),
                (l.activeRequests.statistics = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.statistics.promise,
                    })
                    .one('statistics')
                    .customGET('', {}, l.getHeaders())
                    .then(function (e) {
                      return (l.statistics = e), void 0, e.plain();
                    });
                })
              );
            }),
            (l.checkin = function (o) {
              void 0;
              var a = {
                comment: o.comment,
                rating: o.rating,
                user_id: l.user.id,
              };
              return (
                o.waiting && (a.waiting = o.waiting),
                o.kilowatts && (a.kilowatts = o.kilowatts),
                o.problem && (a.problem = o.problem),
                o.user_vehicle_id && (a.user_vehicle_id = o.user_vehicle_id),
                o.connector_type && (a.connector_type = o.connector_type),
                o.latitude && (a.latitude = o.latitude),
                o.longitude && (a.longitude = o.longitude),
                o.station_id && (a.station_id = o.station_id),
                o.station_selection_response &&
                  (a.station_selection_response = o.station_selection_response),
                l.activeRequests.checkin && l.activeRequests.checkin.resolve(),
                (l.activeRequests.checkin = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('locations', o.locationId)
                    .withHttpConfig({
                      timeout: l.activeRequests.checkin.promise,
                    })
                    .all('reviews')
                    .post(a, void 0, l.getHeaders())
                    .then(
                      function (e) {
                        return { success: !0, data: e.plain() };
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.getBookmarks = function () {
              return (
                void 0,
                l.activeRequests.bookmarks &&
                  l.activeRequests.bookmarks.resolve(),
                (l.activeRequests.bookmarks = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.bookmarks.promise,
                    })
                    .getList('bookmarks', void 0, l.getHeaders())
                    .then(function (e) {
                      void 0;
                      for (var t = 0; t < e.length; t++)
                        e[t].location.display_name = l.getDisplayName(
                          e[t].location
                        );
                      return (l.bookmarks = e), void 0, e.plain();
                    });
                })
              );
            }),
            (l.addBookmark = function (o) {
              return (
                void 0,
                l.activeRequests.addBookmark
                  ? Promise.resolve(!1)
                  : ((l.activeRequests.addBookmark = t.defer()),
                    n.tokenCheck().then(function () {
                      return e
                        .one('users', l.user.id)
                        .all('bookmarks')
                        .post({ location_id: o }, void 0, l.getHeaders())
                        .then(function (e) {
                          void 0;
                          var t = _.findKey(l.bookmarks, {
                            location_id: e.location_id,
                          });
                          return void 0 != t
                            ? (delete l.activeRequests.addBookmark,
                              Promise.resolve(!1))
                            : ((e.location.display_name = l.getDisplayName(
                                e.location
                              )),
                              l.bookmarks.push(e),
                              delete l.activeRequests.addBookmark,
                              e.plain());
                        });
                    }))
              );
            }),
            (l.removeBookmark = function (o) {
              void 0;
              var a = _.findKey(l.bookmarks, { location_id: o });
              if (void 0 != a) {
                var s = l.bookmarks.plain()[a].id;
                return l.activeRequests.removeBookmark
                  ? Promise.resolve(!1)
                  : ((l.activeRequests.removeBookmark = t.defer()),
                    n.tokenCheck().then(function () {
                      return e
                        .one('bookmarks', s)
                        .customDELETE('', {}, l.getHeaders())
                        .then(function () {
                          return (
                            l.bookmarks.splice(a, 1),
                            delete l.activeRequests.removeBookmark,
                            void 0,
                            !0
                          );
                        });
                    }));
              }
              void 0;
            }),
            (l.saveTrip = function (o) {
              return (
                void 0,
                l.activeRequests.tripAction &&
                  l.activeRequests.tripAction.resolve(),
                (l.activeRequests.tripAction = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.tripAction.promise,
                    })
                    .all('trips')
                    .post(o, void 0, l.getHeaders())
                    .then(
                      function (e) {
                        void 0;
                        var t = _.findKey(l.trips, { id: e.id });
                        return (
                          void 0 != t ? void 0 : l.trips.unshift(e),
                          { success: !0, data: e.plain() }
                        );
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.updateTrip = function (o, a) {
              void 0,
                void 0,
                l.activeRequests.tripAction &&
                  l.activeRequests.tripAction.resolve(),
                (l.activeRequests.tripAction = t.defer());
              var s = _.findKey(l.trips, { id: a });
              return void 0 != s
                ? n.tokenCheck().then(function () {
                    return e
                      .one('users', l.user.id)
                      .one('trips', a)
                      .withHttpConfig({
                        timeout: l.activeRequests.tripAction.promise,
                      })
                      .customPUT(o, void 0, {}, l.getHeaders())
                      .then(
                        function (e) {
                          var t = _.findKey(l.trips, { id: e.id });
                          return (
                            void 0 != t && l.trips.splice(t, 1),
                            l.trips.unshift(e),
                            { success: !0, data: e.plain() }
                          );
                        },
                        function (e) {
                          return void 0, { success: !1, error: e.data };
                        }
                      );
                  })
                : void void 0;
            }),
            (l.getTrips = function () {
              return (
                void 0,
                l.activeRequests.trips && l.activeRequests.trips.resolve(),
                (l.activeRequests.trips = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .withHttpConfig({ timeout: l.activeRequests.trips.promise })
                    .getList('trips', void 0, l.getHeaders())
                    .then(function (e) {
                      return (l.trips = e), void 0, e.plain();
                    });
                })
              );
            }),
            (l.getTrip = function (o) {
              return (
                void 0,
                l.activeRequests.trip && l.activeRequests.trip.resolve(),
                (l.activeRequests.trip = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', l.user.id)
                    .one('trips', o)
                    .withHttpConfig({ timeout: l.activeRequests.trip.promise })
                    .customGET('', {}, l.getHeaders())
                    .then(function (e) {
                      return e.plain();
                    });
                })
              );
            }),
            (l.deleteTrip = function (o) {
              if ((void 0, l.activeRequests.deleteTrip))
                return Promise.resolve(!1);
              l.activeRequests.deleteTrip = t.defer();
              var a = _.findKey(l.trips, { id: o });
              return void 0 != a
                ? n.tokenCheck().then(function () {
                    return e
                      .one('users', l.user.id)
                      .one('trips', o)
                      .customDELETE('', {}, l.getHeaders())
                      .then(function () {
                        return (
                          l.trips.splice(a, 1),
                          delete l.activeRequests.deleteTrip,
                          void 0,
                          !0
                        );
                      });
                  })
                : void void 0;
            }),
            (l.transformActivities = function (e) {
              for (var t = 0; t < e.length; t++) {
                var o = e[t],
                  a = o.location;
                a &&
                  ((a.display_name = l.getDisplayName(a, !0)),
                  (o.address = a.address),
                  a.reverse_geocoded_address_components &&
                    a.reverse_geocoded_address_components.locality &&
                    a.reverse_geocoded_address_components
                      .administrative_area_1 &&
                    (a.display_area =
                      a.reverse_geocoded_address_components.locality +
                      ', ' +
                      a.reverse_geocoded_address_components
                        .administrative_area_1)),
                  1 == o.action && 1 == o.type
                    ? a && a.owner
                      ? ((o.description = a.owner.display_name + ' shared a'),
                        (o.target = 'new home charger'))
                      : ((o.description = 'New location added at'),
                        (o.target = a.display_name),
                        (o.type = 'new'))
                    : 1 == o.action && 2 == o.type
                    ? 0 == o.review.rating
                      ? ((o.description = 'Left a comment at '),
                        (o.target = a.display_name))
                      : ((o.description = 'Checked in at '),
                        (o.target = a.display_name))
                    : 1 == o.action && 3 == o.type
                    ? ((o.description = 'Added a photo of '),
                      (o.target = a.display_name))
                    : (o.description =
                        'Undefined action ' + o.action + ', type ' + o.type);
              }
              return e;
            }),
            (l.getActivities = function (o) {
              void 0;
              var a = { count: 20, types: '1,2,3' };
              'nearby' == o.filter
                ? ((a.radius = 15),
                  (a.latitude = o.latitude),
                  (a.longitude = o.longitude))
                : 'bookmarks' == o.filter &&
                  ((o.filter = 'user'), (a.user_id = o.userId));
              var s = [];
              return (
                o.locations && s.push(1),
                o.checkins && s.push(2),
                o.photos && s.push(3),
                (a.types = s.join()),
                o.afterDate && (a.after_date = o.afterDate),
                l.activeRequests.activity &&
                  l.activeRequests.activity.resolve(),
                (l.activeRequests.activity = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .all('activity/' + o.filter)
                    .withHttpConfig({
                      timeout: l.activeRequests.activity.promise,
                    })
                    .getList(a, l.getHeaders())
                    .then(function (e) {
                      return void 0, (e = l.transformActivities(e)), e.plain();
                    });
                })
              );
            }),
            (l.getRecentlyViewed = function (o) {
              void 0;
              var a = { count: 10 };
              return (
                o.page && (a.page = o.page),
                l.activeRequests.views && l.activeRequests.views.resolve(),
                (l.activeRequests.views = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .all('users/recent-locations')
                    .withHttpConfig({ timeout: l.activeRequests.views.promise })
                    .getList(a, l.getHeaders())
                    .then(function (e) {
                      return void 0, e.plain();
                    });
                })
              );
            }),
            (l.getUserActivities = function (o) {
              void 0;
              var a = { count: 10 };
              return (
                o.page && (a.page = o.page),
                l.activeRequests.activity &&
                  l.activeRequests.activity.resolve(),
                (l.activeRequests.activity = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .all('users/activity')
                    .withHttpConfig({
                      timeout: l.activeRequests.activity.promise,
                    })
                    .getList(a, l.getHeaders())
                    .then(function (e) {
                      return void 0, (e = l.transformActivities(e)), e.plain();
                    });
                })
              );
            }),
            (l.addLocation = function (o) {
              return (
                void 0,
                l.activeRequests.locationAction &&
                  l.activeRequests.locationAction.resolve(),
                (l.activeRequests.locationAction = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .all('locations')
                    .withHttpConfig({
                      timeout: l.activeRequests.locationAction.promise,
                    })
                    .post(o, void 0, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          (e.display_name = l.getDisplayName(e)),
                          { success: !0, data: e.plain() }
                        );
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.editLocation = function (o) {
              void 0;
              var a = { include_extras: !0 };
              return (
                l.activeRequests.locationAction &&
                  l.activeRequests.locationAction.resolve(),
                (l.activeRequests.locationAction = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('locations', o.id)
                    .withHttpConfig({
                      timeout: l.activeRequests.locationAction.promise,
                    })
                    .customPUT(o, void 0, a, l.getHeaders())
                    .then(
                      function (e) {
                        return (
                          (e.display_name = l.getDisplayName(e)),
                          { success: !0, data: l.processLocation(e.plain()) }
                        );
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.removeLocation = function (o) {
              return (
                void 0,
                l.activeRequests.locationAction &&
                  l.activeRequests.locationAction.resolve(),
                (l.activeRequests.locationAction = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('locations', o)
                    .customDELETE('', {}, l.getHeaders())
                    .then(
                      function (e) {
                        return e.success;
                      },
                      function (e) {
                        return void 0, !1;
                      }
                    );
                })
              );
            }),
            (l.reportLocation = function (o, a) {
              void 0;
              var s = { message: a };
              return (
                l.user && l.user.id && (s.user = l.user.id),
                l.activeRequests.report && l.activeRequests.report.resolve(),
                (l.activeRequests.report = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('locations', o)
                    .withHttpConfig({
                      timeout: l.activeRequests.report.promise,
                    })
                    .all('flag')
                    .post(s, void 0, l.getHeaders())
                    .then(
                      function (e) {
                        return void 0, { success: !0, data: 'success!' };
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.messageOwner = function (o, a, s) {
              void 0;
              var i = { from: o, message: s };
              return (
                l.activeRequests.message && l.activeRequests.message.resolve(),
                (l.activeRequests.message = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .one('users', a)
                    .withHttpConfig({
                      timeout: l.activeRequests.message.promise,
                    })
                    .all('message')
                    .post(i, void 0, l.getHeaders())
                    .then(
                      function (e) {
                        return void 0, { success: !0, data: e.sent_at };
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.uploadPhoto = function (t, o, a, s) {
              void 0;
              var n = new FormData();
              n.append('photo', o);
              var i = 'photos?user_id=' + s;
              return (
                a && (i += '&caption=' + a),
                e
                  .one('locations', t)
                  .withHttpConfig({
                    transformRequest: angular.identity,
                    timeout: 0,
                  })
                  .all(i)
                  .customPOST(n, void 0, {}, l.getHeaders('upload'))
                  .then(
                    function (e) {
                      return { success: !0, data: e.plain() };
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.uploadProfile = function (t, o) {
              void 0;
              var a = new FormData();
              return (
                a.append('photo', t),
                a.append('user_id', o),
                e
                  .one('users', o)
                  .withHttpConfig({
                    transformRequest: angular.identity,
                    timeout: 0,
                  })
                  .all('photos')
                  .customPOST(a, void 0, {}, l.getHeaders('upload'))
                  .then(
                    function (e) {
                      return { success: !0, data: e };
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.getNetworks = function (t) {
              void 0;
              var o = { filterable: !0 };
              return e
                .all('networks')
                .getList(o)
                .then(
                  function (e) {
                    void 0;
                    var o = e.plain();
                    return (
                      t && (l.localization.filterable_networks = o),
                      { success: !0, data: o }
                    );
                  },
                  function (e) {
                    return void 0, { success: !1, error: e.data };
                  }
                );
            }),
            (l.getArea = function (t) {
              return (
                void 0,
                n.tokenCheck().then(function () {
                  return e
                    .one('directories', t)
                    .customGET('', {}, l.getHeaders())
                    .then(
                      function (e) {
                        return void 0, { success: !0, data: e };
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.cookieLog = function (t, o, a) {
              return (
                void 0,
                n.tokenCheck().then(function () {
                  return e
                    .all('cookie-logs')
                    .post(
                      { allow_analytical: t, allow_marketing: o, browser: a },
                      void 0,
                      l.getHeaders()
                    )
                    .then(function (e) {
                      return e.success && void 0, e.plain();
                    });
                })
              );
            }),
            (l.pwpsBaseUrl =
              'undefined' != typeof environment
                ? environment.pwpsApiUrl
                : 'https://api.plugshare.com/pwps/v1'),
            (l.getJit = function (o) {
              return (
                void 0,
                l.activeRequests.jit && l.activeRequests.jit.resolve(),
                (l.activeRequests.jit = t.defer()),
                e
                  .one('locations', o)
                  .withHttpConfig({ timeout: l.activeRequests.jit.promise })
                  .customGET('jit', {}, l.getHeaders())
                  .then(
                    function (e) {
                      void 0;
                      for (var t = 0, o = 0; o < e.length; o++)
                        for (var a = 0; a < e[o].outlets.length; a++)
                          (e[o].outlets[a].stagger = t), t++;
                      return { success: !0, data: e };
                    },
                    function (e) {
                      return void 0, { success: !1, error: e };
                    }
                  )
              );
            }),
            (l.getSources = function () {
              return (
                void 0,
                e
                  .allUrl('pwps', l.pwpsBaseUrl + '/sources')
                  .customGET('', {}, l.getHeaders())
                  .then(
                    function (e) {
                      return (
                        void 0,
                        (l.paymentSources = e.data),
                        { success: !0, data: e }
                      );
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.createSetupIntent = function (t) {
              void 0;
              var o = { type: 'card' };
              return (
                t && (o.payment_method_id = t),
                e
                  .allUrl('pwps', l.pwpsBaseUrl + '/sources')
                  .customPOST(o, void 0, {}, l.getHeaders())
                  .then(
                    function (e) {
                      return void 0, { success: !0, data: e };
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.saveCard = function (t, o, a) {
              void 0;
              var s = {
                type: 'card',
                setup_intent_id: o,
                setup_intent_status: a,
              };
              return e
                .allUrl('pwps', l.pwpsBaseUrl + '/sources/' + t)
                .customPUT(s, void 0, {}, l.getHeaders())
                .then(
                  function (e) {
                    return (
                      void 0,
                      l.paymentSources.push(e.data),
                      { success: !0, data: e }
                    );
                  },
                  function (e) {
                    return void 0, { success: !1, error: e.data };
                  }
                );
            }),
            (l.deleteCard = function (t) {
              return (
                void 0,
                e
                  .allUrl('pwps', l.pwpsBaseUrl + '/sources/' + t)
                  .customDELETE('', {}, l.getHeaders())
                  .then(
                    function (e) {
                      void 0;
                      var o = _.findKey(l.paymentSources, { id: t });
                      return (
                        void 0 != o && l.paymentSources.splice(o, 1),
                        { success: !0, data: e }
                      );
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.preactivate = function (t, o) {
              void 0;
              var a = {
                source_id: t,
                location_id: o.location_id,
                station_id: o.station_id,
                outlet_id: o.outlet_id,
                network_id: o.network_id,
                station_ext_id: o.station_ext_id,
                outlet_ext_id: o.outlet_ext_id,
                connector_name: o.connector_name,
              };
              return e
                .allUrl('pwps', l.pwpsBaseUrl + '/sessions')
                .customPOST(a, void 0, {}, l.getHeaders())
                .then(
                  function (e) {
                    return void 0, { success: !0, data: e };
                  },
                  function (e) {
                    return void 0, { success: !1, error: e.data };
                  }
                );
            }),
            (l.activate = function (t) {
              return (
                void 0,
                e
                  .allUrl(
                    'pwps',
                    l.pwpsBaseUrl + '/sessions/' + t + '/activate'
                  )
                  .customPUT({}, void 0, {}, l.getHeaders())
                  .then(
                    function (e) {
                      return void 0, { success: !0, data: e };
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.stopCharge = function (t) {
              return (
                void 0,
                e
                  .allUrl('pwps', l.pwpsBaseUrl + '/sessions/' + t + '/stop')
                  .customPUT({}, void 0, {}, l.getHeaders())
                  .then(
                    function (e) {
                      return void 0, { success: !0, data: e };
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.getSession = function (o) {
              return (
                void 0,
                l.activeRequests.session && l.activeRequests.session.resolve(),
                (l.activeRequests.session = t.defer()),
                e
                  .allUrl('pwps', l.pwpsBaseUrl + '/sessions/' + o)
                  .withHttpConfig({ timeout: l.activeRequests.session.promise })
                  .customGET('', {}, l.getHeaders())
                  .then(
                    function (e) {
                      return void 0, { success: !0, data: e };
                    },
                    function (e) {
                      return (
                        void 0,
                        {
                          success: !1,
                          error: e.data ? e.data : 'Could not contact server',
                        }
                      );
                    }
                  )
              );
            }),
            (l.getSessions = function (a) {
              void 0;
              var s = '';
              return (
                a && (s = '?offset=' + l.chargeSessions.length),
                l.activeRequests.sessions &&
                  l.activeRequests.sessions.resolve(),
                (l.activeRequests.sessions = t.defer()),
                e
                  .allUrl('pwps', l.pwpsBaseUrl + '/sessions' + s)
                  .withHttpConfig({
                    timeout: l.activeRequests.sessions.promise,
                  })
                  .customGET('', {}, l.getHeaders())
                  .then(
                    function (e) {
                      if ((void 0, a)) {
                        var t;
                        (t = l.chargeSessions).push.apply(t, o(e.data));
                      } else l.chargeSessions = e.data;
                      return (
                        e.data.length < 10
                          ? (l.moreChargeSessions = !1)
                          : (l.moreChargeSessions = !0),
                        { success: !0, data: e }
                      );
                    },
                    function (e) {
                      return void 0, { success: !1, error: e.data };
                    }
                  )
              );
            }),
            (l.getCustomView = function (t) {
              return (
                void 0,
                l.getNetworks().then(function (o) {
                  var a = [];
                  return (
                    o && ((a = o.data), void 0),
                    e
                      .one('maps', t)
                      .customGET('', {}, l.getHeaders())
                      .then(
                        function (e) {
                          if (e) {
                            if (e.filters) {
                              if (e.filters.plugs) {
                                var t = e.filters.plugs,
                                  o = [],
                                  s = [];
                                void 0,
                                  t.forEach(function (e) {
                                    var t = parseInt(e.id),
                                      a = {};
                                    18 == t
                                      ? ((a.connector = 6), (a.power = 1))
                                      : ((a.connector = t), (a.power = 0)),
                                      o.push(a),
                                      s.push(e.name);
                                  }),
                                  (e.filters.outlets = o),
                                  (e.filters.outlet_names = s);
                              }
                              var n = [],
                                i = [],
                                l = [];
                              if (
                                ((n =
                                  e.filters.networks &&
                                  e.filters.networks.length
                                    ? e.filters.networks
                                    : a),
                                void 0,
                                n.forEach(function (e) {
                                  i.push(parseInt(e.id)), l.push(e.name);
                                }),
                                (e.filters.networks = i),
                                (e.filters.network_names = l),
                                e.filters.misc)
                              ) {
                                var r = e.filters.misc;
                                void 0,
                                  r.forEach(function (t) {
                                    e.filters[t] = !0;
                                  });
                              }
                            }
                            return void 0, void 0, e;
                          }
                          return !1;
                        },
                        function () {
                          return void 0, !1;
                        }
                      )
                  );
                })
              );
            }),
            (l.deleteAccount = function (o) {
              return (
                void 0,
                l.activeRequests.deleteAccount &&
                  l.activeRequests.deleteAccount.resolve(),
                (l.activeRequests.deleteAccount = t.defer()),
                n.tokenCheck().then(function () {
                  return e
                    .all('users/me')
                    .customDELETE('', {}, l.getHeaders())
                    .then(
                      function (e) {
                        return void 0, void 0, { success: !0, data: e.plain() };
                      },
                      function (e) {
                        return void 0, { success: !1, error: e.data };
                      }
                    );
                })
              );
            }),
            (l.counter = 0),
            (l.test = function () {
              return l.counter++, l.counter;
            }),
            l
          );
        },
      ]);
  },
  function (e, t) {
    'use strict';
    angular.module('PreloaderFactory', []),
      angular.module('PreloaderFactory').factory('PreloaderFactory', [
        '$q',
        '$rootScope',
        function (e, t) {
          function o(t) {
            (this.imageLocations = t),
              (this.imageCount = this.imageLocations.length),
              (this.loadCount = 0),
              (this.errorCount = 0),
              (this.states = {
                PENDING: 1,
                LOADING: 2,
                RESOLVED: 3,
                REJECTED: 4,
              }),
              (this.state = this.states.PENDING),
              (this.deferred = e.defer()),
              (this.promise = this.deferred.promise);
          }
          return (
            (o.preloadImages = function (e) {
              var t = new o(e);
              return t.load();
            }),
            (o.prototype = {
              constructor: o,
              isInitiated: function () {
                return this.state !== this.states.PENDING;
              },
              isRejected: function () {
                return this.state === this.states.REJECTED;
              },
              isResolved: function () {
                return this.state === this.states.RESOLVED;
              },
              load: function () {
                if (this.isInitiated()) return this.promise;
                this.state = this.states.LOADING;
                for (var e = 0; e < this.imageCount; e++)
                  this.loadImageLocation(this.imageLocations[e]);
                return this.promise;
              },
              handleImageError: function (e) {
                this.errorCount++,
                  this.isRejected() ||
                    ((this.state = this.states.REJECTED),
                    this.deferred.reject(e));
              },
              handleImageLoad: function (e) {
                this.loadCount++,
                  this.isRejected() ||
                    (this.deferred.notify({
                      percent: Math.ceil(
                        (this.loadCount / this.imageCount) * 100
                      ),
                      imageLocation: e,
                    }),
                    this.loadCount === this.imageCount &&
                      ((this.state = this.states.RESOLVED),
                      this.deferred.resolve(this.imageLocations)));
              },
              loadImageLocation: function (e) {
                var o = this,
                  a = angular
                    .element(new Image())
                    .bind('load', function (e) {
                      t.$apply(function () {
                        o.handleImageLoad(e.target.src), (o = a = e = null);
                      });
                    })
                    .bind('error', function (e) {
                      t.$apply(function () {
                        o.handleImageError(e.target.src), (o = a = e = null);
                      });
                    })
                    .attr('src', e);
              },
            }),
            o
          );
        },
      ]);
  },
  function (e, t) {
    'use strict';
    angular.module('Filters', []),
      angular
        .module('Filters')
        .filter('isTrue', function () {
          return function (e) {
            return 'true' == e;
          };
        })
        .filter('ordinal', function () {
          return function (e) {
            if (isNaN(e) || 1 > e) return e;
            var t = e % 10;
            return 1 === t
              ? e + 'st'
              : 2 === t
              ? e + 'nd'
              : 3 === t
              ? e + 'rd'
              : t > 3
              ? e + 'th'
              : void 0;
          };
        })
        .filter('joinBy', function () {
          return function (e, t) {
            return (e || []).join(t || ',');
          };
        })
        .filter('problemName', function () {
          return function (e) {
            return 1 == e
              ? 'Broken Hardware'
              : 2 == e
              ? 'In Use'
              : 3 == e
              ? 'Blocked By Vehicle'
              : 4 == e
              ? 'Could Not Activate'
              : 5 == e
              ? 'Permanently Closed'
              : '';
          };
        })
        .filter('listName', function () {
          return function (e, t, o) {
            if (!(e && e.length > 0)) return !1;
            for (var a = 0; a < e.length; a++)
              if (e[a].connector == t && e[a].power == o)
                return e[a].short_name;
          };
        })
        .filter('connectorIcon', function () {
          return function (e, t) {
            return 1 == e
              ? 'image03'
              : 2 == e
              ? 'image08'
              : 3 == e
              ? 'image04'
              : 4 == e
              ? 'image00'
              : 5 == e
              ? 'image10'
              : 6 == e
              ? 'image05'
              : 7 == e
              ? 'image06'
              : 8 == e
              ? 'image16'
              : 9 == e
              ? 'image09'
              : 10 == e
              ? 'image13'
              : 11 == e
              ? 'image12'
              : 12 == e
              ? 'image01'
              : 13 == e
              ? 'US' == t || 'SA' == t || 'CA' == t
                ? 'image02'
                : 'image24'
              : 14 == e
              ? 'EU' == t
                ? 'image23'
                : 'image14'
              : 15 == e
              ? 'image15'
              : 16 == e
              ? 'image06'
              : 17 == e
              ? 'image17'
              : 24 == e
              ? 'image25'
              : e;
          };
        })
        .filter('dev', function () {
          return function (e) {
            return e
              ? e
                  .replace('NONEXISTENT.BUCKET', 'plugshare.production.photos')
                  .replace(
                    'plugshare.staging.photos',
                    'plugshare.production.photos'
                  )
                  .replace('photos-dev', 'photos')
                  .replace('assets-staging', 'assets')
              : void 0;
          };
        })
        .filter('empty', function () {
          return function (e) {
            return e ? e : '-';
          };
        })
        .filter('tel', function () {
          return function (e) {
            if (!e) return '';
            var t = e.toString().trim().replace(/^\+/, '');
            if (t.match(/[^0-9]/)) return e;
            var o, a, s;
            switch (t.length) {
              case 10:
                (o = 1), (a = t.slice(0, 3)), (s = t.slice(3));
                break;
              case 11:
                (o = t[0]), (a = t.slice(1, 4)), (s = t.slice(4));
                break;
              case 12:
                (o = t.slice(0, 3)), (a = t.slice(3, 5)), (s = t.slice(5));
                break;
              default:
                return e;
            }
            return (
              1 == o && (o = ''),
              (s = s.slice(0, 3) + '-' + s.slice(3)),
              (o + ' (' + a + ') ' + s).trim()
            );
          };
        })
        .filter('ampm', function () {
          return function (e) {
            var t = (e % 12) + ':00';
            return t + (12 > e ? 'AM' : 'PM');
          };
        })
        .filter('miles', function () {
          return function (e) {
            return (e / 1609.34).toFixed(2);
          };
        })
        .filter('spacedash', function () {
          return function (e) {
            return e.split(' ').join('-');
          };
        })
        .filter('translateCut', function () {
          return function (e, t) {
            return e.split('|')[t];
          };
        })
        .filter('splitTime', function () {
          return function (e, t) {
            if (!e) return '00';
            if ('h' == t) {
              var o = Math.floor(e / 3600);
              return 10 > o && (o = '0' + o), o;
            }
            if ('m' == t) {
              var o = Math.floor((e % 3600) / 60);
              return 10 > o && (o = '0' + o), o;
            }
            if ('s' == t) {
              var o = e % 60;
              return 10 > o && (o = '0' + o), o;
            }
          };
        })
        .filter('titleCase', function () {
          return function (e) {
            return e && e.length
              ? e.replace(/\w\S*/g, function (e) {
                  return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                })
              : '';
          };
        })
        .filter('parkingAttribute', function () {
          return function (e, t) {
            if (!(t && t.length > 0)) return '';
            for (var o = 0; o < t.length; o++)
              if (e == t[o].id) return t[o].description;
          };
        })
        .filter('parkingAttributeImageUrl', function () {
          return function (e, t) {
            if (!(t && t.length > 0)) return '';
            for (var o = 0; o < t.length; o++)
              if (e == t[o].id) return t[o].image_url;
          };
        })
        .filter('accessRestriction', function () {
          return function (e, t) {
            if (!(t && t.length > 0)) return '';
            for (var o = 0; o < t.length; o++)
              if (e == t[o].id) return t[o].description;
          };
        });
  },
]),
  angular.module('plugshare').run([
    '$templateCache',
    function (e) {
      e.put(
        'app/main/maps.html',
        '<md-toolbar id="nav" class="md-menu-toolbar"><md-menu-bar><div class="left"><a href="/" ng-show="!embed"><img src="https://assets.plugshare.com/assets/plugshare-web.png" class="logo left" alt="PlugShare"> </a><a href="https://plugshare.com" target="_blank" ng-show="embed" ng-cloak><img src="https://assets.plugshare.com/assets/plugshare-web.png" class="logo left" alt="PlugShare"></a></div><div id="menu-bar"><div class="dropdown" ng-show="embed" ng-cloak><div class="embed-info">Charging Locations from PlugShare</div></div><div class="dropdown embed" ng-show="embed" ng-cloak><button class="menu-item app-icon" ng-click="maps.openLink(\'https://play.google.com/store/apps/details?id=com.xatori.Plugshare&hl=en\', \'app\')"><i class="fa fa-android" aria-hidden="true"></i></button></div><div class="dropdown embed" ng-show="embed" ng-cloak><button class="menu-item app-icon" ng-click="maps.openLink(\'https://itunes.apple.com/us/app/plugshare/id421788217?mt=8\', \'app\')"><i class="fa fa-apple" aria-hidden="true"></i></button></div><div class="dropdown embed cta" ng-show="embed" ng-cloak><div class="embed-info">Get the App</div></div><div class="dropdown permanent" ng-show="maps.initialized" ng-cloak><button class="menu-item language" ng-class="{embed: embed}" ng-click="maps.showSettings($event)" title="Change language settings"><div class="language-button">{{ maps.languages[maps.language].display_code }}</div></button></div><div class="dropdown" ng-show="maps.user && !embed" ng-cloak><button class="menu-item profile" ng-click="maps.mobile ? \'\' : maps.try($event, \'showProfile\')"><img id="profile-photo" ng-src="{{ maps.getProfilePicture() | dev }}" image-error="true"> <span translate="User\'s Profile" translate-value-firstname="{{ maps.user.display_name }}" ng-if="maps.user.display_name"></span> <span ng-if="!maps.user.display_name">{{ "My Profile" | translate }}</span></button><md-menu-content class="dropdown-content left"><md-menu-item><md-button class="profile-drop" ng-click="maps.logout(false, true)">{{ "Logout" | translate }}</md-button></md-menu-item></md-menu-content></div><div class="dropdown" ng-show="maps.user && !embed" ng-cloak><button class="menu-item" ng-click="maps.try($event, \'showVehicle\', false, maps.activeVehicleIndex)"><span ng-if="maps.getVehicle().display_name && maps.getVehicle().display_name != \'None\' && maps.getVehicle().display_name != \'Other\'">{{ maps.getVehicle().display_name }}</span> <span ng-if="!(maps.getVehicle().display_name && maps.getVehicle().display_name != \'None\' && maps.getVehicle().display_name != \'Other\')">{{ "My Vehicle" | translate }}</span></button><md-menu-content class="dropdown-content right-align"><md-menu-item class="vehicle" ng-class="{active: $index == maps.activeVehicleIndex}" ng-repeat="vehicle in maps.user.vehicles track by $index" ng-show="vehicle.display_name"><div class="checked" ng-show="$index == maps.activeVehicleIndex"><md-icon>check</md-icon></div><md-button ng-click="maps.selectVehicle($index)">{{ vehicle.display_name }}</md-button></md-menu-item><md-menu-item class="vehicle"><div class="manage"><md-icon>playlist_add</md-icon></div><md-button ng-click="maps.try($event, \'showVehicle\', false, maps.activeVehicleIndex)">{{ "Manage Vehicles" | translate }}</md-button></md-menu-item></md-menu-content></div><div class="dropdown" ng-show="maps.user && !embed" ng-cloak><button class="menu-item fixed-bookmarks">{{ "Bookmarks" | translate }}</button><md-menu-content class="dropdown-content scrollable right"><md-menu-item class="none" ng-show="maps.latestBookmarks().length == 0" title="Star a location to add it to your bookmarks!">{{ "No Bookmarks" | translate }}</md-menu-item><md-menu-item class="bookmark" ng-repeat="bookmark in maps.latestBookmarks()" ng-cloak><md-button ng-click="maps.mapControl.goToNewMarker(bookmark.location)">{{ bookmark.location.display_name }}</md-button><div class="remove" ng-click="maps.removeBookmark(null, bookmark.location.id)"><md-icon>close</md-icon></div></md-menu-item></md-menu-content></div><div class="dropdown" ng-show="!maps.user && maps.initialized && !embed" ng-cloak><button class="menu-item" ng-click="maps.showLogin($event)">{{ "Login" | translate }}</button></div><div class="dropdown" ng-show="!maps.user && maps.initialized && !embed" ng-cloak><button class="menu-item" ng-click="maps.mobile ? \'\' : maps.showRegister($event)">{{ "Register" | translate }}</button><md-menu-content class="dropdown-content right"><div class="benefits" ng-click="maps.showRegister($event)"><div class="title">{{ "Register with PlugShare for Great Benefits" | translate }}</div><ul><li>{{ "Tailor PlugShare to your vehicle" | translate }}</li><li>{{ "Trip Planner for your longer drives" | translate }}</li><li>{{ "Bookmark your favorite locations" | translate }}</li><li>{{ "Share reviews and help other drivers" | translate }}</li></ul></div></md-menu-content></div></div></md-menu-bar><md-progress-linear ng-show="maps.getMapStatus()" md-mode="indeterminate" id="maps-bar" ng-cloak></md-progress-linear></md-toolbar><div id="toast-container" ng-class="{planner: tripPlanner}"></div><div id="main" ng-class="{instant: maps.ie, locationView: maps.location && !mobilePlanner}"><div ui-view="pane" id="pane" ng-class="{pane: maps.location.id, dragging: maps.location.id && maps.dragging, borderless: maps.borderless, checkin: maps.mobile && maps.location.id && !tripPlanner}" ng-click="maps.clearResults()" xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Organization" ng-show="!maps.bot && !maps.streetViewMode"></div><div class="floating-checkin" ng-class="{visible: maps.mobile && maps.location.id && !tripPlanner && maps.paneView && !maps.unverified && !maps.pendingEmail && (!maps.user || (maps.user && maps.user.setup_complete))}"><div class="fader"></div><md-button ng-click="maps.try($event, \'showCheckin\', false, null, \'floater\')" aria-label="check-in">{{ "Check In" | translate }}</md-button></div><div id="maps"><div id="mobile-mode" ng-show="mobilePlanner && maps.location.id" ng-cloak><div class="action left" ng-click="maps.location = null"><md-icon>arrow_back</md-icon><div class="icon-label">{{ "List" | translate }}</div></div><div class="action right" ng-click="maps.closePlanner()"><div class="icon-label">{{ "Exit" | translate }}</div><md-icon>close</md-icon></div><div class="mode">{{ "Trip Planner Mode" | translate }}</div></div><form ng-submit="$event.preventDefault()" id="search" ng-controller="SearchController" ng-show="!maps.streetViewMode"><md-button id="menu-button" ng-click="maps.toggleMenu(\'menu\')" ng-class="{open: maps.menu.menu}" ng-if="!(maps.search_focused && maps.mobile && maps.searchHistory.length)"><md-icon ng-show="!maps.menu.menu && embed">help_outline</md-icon><md-icon ng-show="!maps.menu.menu && !embed">menu</md-icon><md-icon ng-show="maps.menu.menu">close</md-icon></md-button><md-button id="menu-button" ng-click="maps.searchBlur()" ng-if="maps.search_focused && maps.mobile && maps.searchHistory.length"><md-icon>keyboard_backspace</md-icon></md-button><md-autocomplete id="search-autocomplete" md-delay="750" md-no-cache="true" md-autoselect="false" md-selected-item="maps.selectedItem" md-search-text-change="maps.searchTextChange(maps.searchText)" md-search-text="maps.searchText" md-selected-item-change="maps.selectedItemChange(item)" md-items="item in maps.querySearch(maps.searchText)" md-item-text="item.display" md-min-length="1" placeholder="{{ \'Search for a Charging Location\' | translate }}" autofocus></md-autocomplete><md-icon id="search-button" ng-class="{content: maps.searchText.length > 0}" ng-show="maps.initialized" ng-cloak>search</md-icon></form><div id="primary-search" class="custom-results" ng-show="maps.show_results && maps.search_focused && !maps.streetViewMode" ng-cloak><md-menu-item class="search-result" ng-repeat="item in maps.search_results track by $index" ng-attr-title="{{item.display}} - {{item.address}}" ng-show="maps.search_results.length > 0"><md-button ng-click="maps.selectedItemChange(item)"><div class="sprite marker" ng-show="item.type != \'search\'"><div class="icon-{{ item.icon_type }}"></div></div><div class="recent" ng-show="item.type == \'search\'"><md-icon>history</md-icon></div><div class="details"><div class="display" ng-class="{search: item.type == \'search\'}">{{item.display}}</div><div class="address" ng-show="item.address">{{item.address}}</div></div></md-button></md-menu-item><md-menu-item class="no-result" ng-attr-title=\'No locations matching "{{maps.searchText}}" were found.\' ng-show="maps.searchText && maps.search_results.length === 0 && !maps.selected_answer"><div class="details" translate="No locations matching searchText were found" translate-value-search="{{ maps.searchText }}"></div></md-menu-item><md-menu-item class="search-result clear-history" ng-show="maps.show_results && maps.search_focused && maps.searchHistory.length && maps.search_results[0].history && !embed"><md-button ng-click="maps.clearSearchHistory()">{{ "Clear Search History" | translate }}</md-button></md-menu-item></div><md-menu-content id="menu" class="expandable" ng-class="{dragging: maps.dragging}" ng-show="maps.menu.menu && !maps.streetViewMode" ng-cloak><div class="menu-item loading" ng-show="maps.localizationStatus !== \'success\'"><div class="expandable filters-status"><div ng-show="maps.localizationStatus == \'loading\'">{{ "Loading" | translate }}</div><div ng-show="maps.localizationStatus == \'fail\'"><div class="error">{{ "Plugshare services failed to load" | translate }}</div><div class="error-description">{{ "Please refresh your browser" | translate | translateCut : 0 }} <span class="link" ng-click="maps.showFeedback($event)">{{ "contact us" | translate }}</span> {{ "Please refresh your browser" | translate | translateCut : 2 }}</div></div></div></div><div class="menu-item" ng-if="maps.localizationStatus == \'success\' && customMode.name"><div class="expandable view-filters"><div><h1 class="view-title"><div class="title-label">{{ customMode.name }} {{ "Custom View" | translate }}</div><md-button ng-click="maps.exitCustomViewMode()" class="allcaps md-warn" title="Return to back to your normal filters">{{ "Exit" | translate }}</md-button></h1><h2 class="view-description" ng-bind-html="customMode.description | linky : \'_blank\'" ng-show="customMode.description"></h2><div class="filters"><div class="filter" ng-if="customMode.ui.plugs && customMode.filters.outlet_names.length > 0"><div class="label">{{ "Plugs" | translate }} - {{ customMode.filters.outlet_names.length }}</div><div class="data"><span class="value" ng-repeat="outlet in customMode.filters.outlet_names">{{ outlet }}</span></div></div><div class="filter" ng-if="customMode.ui.networks && (customMode.filters.network_names.length > 0 || customMode.filters.other_networks)"><div class="label">{{ "Networks" | translate }} - {{ customMode.filters.network_names.length }}<span ng-show="customMode.filters.other_networks">+</span></div><div class="data"><span class="value" ng-repeat="network in customMode.filters.network_names">{{ network }}</span> <span class="value" ng-if="customMode.filters.other_networks">{{ "Other Networks" | translate }}</span></div></div><div class="filter" ng-if="customMode.ui.includes && (customMode.filters.filter_cost || customMode.filters.filter_restricted || customMode.filters.filter_residential || customMode.filters.filter_availability || customMode.filters.filter_soon)"><div class="label">{{ "Includes" | translate }}</div><div class="data"><span class="value" ng-if="customMode.filters.filter_cost">{{ "Payment Required" | translate }}</span> <span class="value" ng-if="customMode.filters.filter_restricted">{{ "Restricted" | translate }}</span> <span class="value" ng-if="customMode.filters.filter_residential">{{ "Residential" | translate }}</span> <span class="value" ng-if="customMode.filters.filter_availability">{{ "Currently In-Use" | translate }}</span> <span class="value" ng-if="customMode.filters.filter_soon">{{ "Coming Soon" | translate }}</span></div></div><div class="filter" ng-if="customMode.ui.extras && customMode.filters.filter_pwps"><div class="label">{{ "Extras" | translate }}</div><div class="data"><span class="value" ng-if="customMode.filters.filter_pwps">Pay with PlugShare</span></div></div><div class="filter" ng-if="customMode.ui.amenities && customMode.filters.amenities.length > 0"><div class="label">{{ "Amenities" | translate }}</div><div class="data"><span class="value" ng-repeat="amenity in customMode.filters.amenities">{{ maps.getAmenityName(amenity) | translate }}</span></div></div><div class="filter" ng-if="customMode.ui.plugscore && customMode.filters.plugscore"><div class="label">{{ "Minimum PlugScore" | translate }} - <span translate="XX out of 10" translate-value-number="{{ customMode.filters.plugscore }}"></span></div></div><div class="temp-view">{{ "This is a temporary filtered view" | translate }}</div></div></div></div></div><div class="menu-item legend" ng-show="maps.localizationStatus == \'success\'"><md-menu-item class="default-button" ng-show="!embed"><md-button ng-click="maps.toggleMenu(\'legend\')"><div class="section-title"><md-icon>place</md-icon>{{ "Legend" | translate }}<div class="toggle"><md-icon ng-show="!maps.menu.legend">chevron_left</md-icon><md-icon ng-show="maps.menu.legend">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.legend || embed"><div id="legend"><div class="colors"><div class="color" title="All stations are public"><md-icon style="color: #46af61">place</md-icon><span class="label">{{ "Public" | translate }}</span></div><div class="color" title="Has one or more high powered stations"><md-icon style="color: #f19a40">place</md-icon><span class="label">{{ "High Power" | translate }}</span></div><div class="color" title="All stations are restricted" ng-show="!embed"><md-icon style="color: #a9784c">place</md-icon><span class="label">{{ "Restricted" | translate }}</span></div><div class="color" title="All stations are currently in use"><md-icon style="color: #ababab">place</md-icon><span class="label">{{ "In Use" | translate }}</span></div></div><div class="icons"><div class="icon" title="Has one or more station \'Coming Soon\' or \'Under Repair\'"><div class="sprite legend"><div class="icon-repair-ball"></div></div><span class="label id">{{ "Under Repair" | translate }}</span></div><div class="icon" title="Residential location shared by user" ng-show="!embed"><div class="sprite legend"><div class="icon-home-ball"></div></div><span class="label">{{ "Residential" | translate }}</span></div><div class="icon" title="Google results location"><div class="sprite legend"><div class="icon-map-ball"></div></div><span class="label">{{ "Place" | translate }}</span></div><div class="icon" title="A station\'s PlugScore reflects the experience of its most recent users"><div class="plugscore">10</div><span class="ps label">PlugScore</span></div></div></div></div></div><div class="menu-item filters" ng-show="maps.localizationStatus == \'success\' && !embed && !customMode.name" ng-if="!maps.bot && !maps.location"><md-menu-item class="default-button" title="Note: Locations will only be filtered out if ALL contained stations do not meet the criteria"><md-button ng-click="maps.toggleMenu(\'filters\')"><div class="section-title" ng-class="{inactive: maps.initialized && !maps.menu.filters && ((maps.activeOutletsCount == 0 && maps.localization.outlets_filter.length) || (maps.activeNetworkFilters == 0 && maps.localization.filterable_networks.length))}"><div class="sprite legend"><div class="icon-filter"></div></div><div class="bg-text">{{ "Filters" | translate }}</div><div class="toggle"><md-icon ng-show="!maps.menu.filters">chevron_left</md-icon><md-icon ng-show="maps.menu.filters">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.filters"><div class="country"><div class="select-label">{{ "Showing Filters for" | translate }}</div><div class="reset-filters" ng-click="maps.resetFilters()" ng-show="maps.testing" title="This will reset all filters to website defaults, except plugs if a vehicle is selected">{{ "Reset Filters" | translate }}</div><md-select ng-model="maps.filters.country_code" ng-change="maps.loadLocale(maps.filters.country_code)" class="select" aria-label="country"><md-option value="XX">{{ "Use My Current Location" | translate }}</md-option><md-option ng-repeat="country in maps.countryList" value="{{ country.code }}">{{ country.name }}</md-option></md-select></div><div class="filter outlets"><div class="float-filters-container"><div class="float-filters plug-filters"><div class="vehicle-container"><md-menu-item class="add-vehicle" ng-show="maps.user.vehicles.length == 0" aria-label="vehicle"><md-button ng-click="maps.try($event, \'showVehicle\', false, maps.activeVehicleIndex)"><md-icon style="margin-right: 7px">playlist_add</md-icon><span class="none">{{ "Vehicle Not Selected" | translate }}</span> <span class="add">{{ "Add Vehicle" | translate }}</span></md-button></md-menu-item><md-select ng-model="maps.activeVehicleIndex" ng-change="maps.selectVehicle(null, {{maps.activeVehicleIndex}})" ng-show="maps.user.vehicles.length > 0" class="select" aria-label="vehicle"><md-option ng-repeat="vehicle in maps.user.vehicles track by $index" value="{{ $index }}" ng-show="vehicle.display_name">{{ vehicle.display_name }}{{ (vehicle.display_name == \'Other\' || vehicle.display_name == \'New\') ? \' Vehicle\' : \'\' }}</md-option><md-option value="{{ \'manage\' }}"><md-icon style="margin-right: 7px">playlist_add</md-icon>{{ "Manage Vehicles" | translate }}</md-option></md-select><div class="saved-filters" ng-show="maps.user.vehicles.length == 0">{{ "Show only relevant plugs by adding a vehicle" | translate }}</div><div class="saved-filters" ng-show="maps.user.vehicles.length > 0">{{ "These plug filters are saved to your vehicle" | translate }}</div></div><md-menu-item class="nested default-button" ng-show="maps.user.vehicles.length && maps.user.vehicles[maps.activeVehicleIndex].display_name != \'Other\' && maps.user.vehicles[maps.activeVehicleIndex].display_name != \'New\'"><md-button ng-click="maps.autoFilters(maps.activeVehicleIndex)"><div class="match-title"><span class="match" ng-show="!maps.filtersMatch"><md-icon>refresh</md-icon><span>{{ "Reset plugs to match vehicle defaults" | translate }}</span> </span><span class="match" ng-show="maps.filtersMatch"><md-icon>done</md-icon><span>{{ "Plug filters match my vehicle defaults" | translate }}</span></span></div></md-button></md-menu-item><md-menu-item class="default-button no-button" title="Show locations with at least one station containing any of the selected plugs"><div class="section-title" ng-class="{inactive: maps.initialized && maps.activeOutletsCount == 0 && maps.localization.outlets_filter.length}"><div class="left"><span class="title-label">{{ "Plugs" | translate }} (<span translate="X of XX" translate-value-quantity="{{ maps.activeOutletsCount }}" translate-value-max="{{ maps.localization.outlets_filter.length }}"></span>)</span></div><md-icon ng-show="maps.initialized && maps.activeOutletsCount == 0" class="error" title="{{ maps.outletWarning }}">error</md-icon></div><div class="toggle-all" ng-click="maps.toggleOutlets()" ng-show="maps.localization.outlets_filter.length > 4" title="Toggle all plugs on/off">{{ "Toggle All" | translate }}</div></md-menu-item><div class="expandable"><div class="plug-section" ng-show="maps.initialized"><div class="outlet-filters"><md-container ng-repeat="outlet in maps.localization.outlets_filter" ng-if="!maps.user || !maps.user.vehicles.length || maps.user.vehicles[maps.activeVehicleIndex].display_name == \'Other\' || maps.user.vehicles[maps.activeVehicleIndex].display_name == \'New\' || (_.findKey(maps.user.vehicles[maps.activeVehicleIndex].compatible_outlets, { \'connector\': outlet.connector, \'power\': outlet.power }) != undefined)"><input type="checkbox" ng-checked="maps.findOutletFilter(outlet.connector, outlet.power) != undefined" ng-click="maps.toggleOutlet(outlet.connector, outlet.power)" id="outlet{{$index+1}}"><label for="outlet{{$index+1}}" class="filter-label" ng-attr-title="{{ maps.localization.outlets_all | listName : outlet.connector : outlet.power }}"><div class="sprite outlet"><div class="icon-{{ outlet.connector | connectorIcon : maps.localization.name }}"></div></div><div class="label">{{ maps.localization.outlets_all | listName : outlet.connector : outlet.power }}</div></label></md-container></div></div><div class="plug-section bottom-fix" ng-show="maps.initialized && maps.user && maps.user.vehicles.length && maps.user.vehicles[maps.activeVehicleIndex].display_name != \'Other\' && maps.user.vehicles[maps.activeVehicleIndex].display_name != \'New\'"><md-menu-item class="default-button"><md-button class="compatibility" ng-click="maps.toggleIncompatibleOutlets()"><span class="plug-section-title">{{ "Incompatible plugs" | translate }}</span><div class="toggle"><md-icon ng-show="!maps.showIncompatible">chevron_left</md-icon><md-icon ng-show="maps.showIncompatible">expand_more</md-icon></div></md-button></md-menu-item><div class="outlet-filters"><md-container ng-repeat="outlet in maps.localization.outlets_filter" ng-show="(!maps.user || !maps.user.vehicles.length || maps.showIncompatible || maps.findOutletFilter(outlet.connector, outlet.power) != undefined) && (_.findKey(maps.user.vehicles[maps.activeVehicleIndex].compatible_outlets, { \'connector\': outlet.connector, \'power\': outlet.power }) == undefined)"><input type="checkbox" ng-checked="maps.findOutletFilter(outlet.connector, outlet.power) != undefined" ng-click="maps.toggleOutlet(outlet.connector, outlet.power)" id="outlet{{$index+1}}"><label for="outlet{{$index+1}}" class="filter-label" ng-attr-title="{{ maps.localization.outlets_all | listName : outlet.connector : outlet.power }}"><div class="sprite outlet"><div class="icon-{{ outlet.connector | connectorIcon : maps.localization.name }}"></div></div><div class="label">{{ maps.localization.outlets_all | listName : outlet.connector : outlet.power }}</div></label></md-container></div></div></div></div></div></div><div class="filter include"><div class="float-filters-container"><div class="float-filters"><md-menu-item class="default-button no-button" title="Include locations with special types/restrictions"><div class="section-title"><span class="title-label">{{ "Location Filters" | translate }} (<span translate="X of XX" translate-value-quantity="{{ maps.getActiveIncludesCount() }}" translate-value-max="5"></span>)</span></div></md-menu-item><div class="expandable"><md-container title="Show/Hide locations with at least one station with required payment. Locations with additional free stations may be filtered out"><input type="checkbox" name="maps.filters.filter_cost" value="true" ng-checked="maps.filters.filter_cost" ng-click="maps.toggleSingle(\'filter_cost\')" id="payment"><label for="payment" class="filter-label line"><div class="label"><div class="cell-center">{{ "Show Locations That Require Payment" | translate }}</div></div></label></md-container><md-container title="Show/Hide locations with all stations Currently In-Use / Unavailable"><input type="checkbox" name="maps.filters.filter_availability" value="true" ng-checked="maps.filters.filter_availability" ng-click="maps.toggleSingle(\'filter_availability\')" id="availability"><label for="availability" class="filter-label line"><div class="label"><div class="cell-center hu">{{ "Show In-Use Locations" | translate }}</div></div></label></md-container><md-container title="Show/Hide locations with restricted access"><input type="checkbox" name="maps.filters.filter_restricted" value="true" ng-checked="maps.filters.filter_restricted" ng-click="maps.toggleSingle(\'filter_restricted\')" id="restricted"><label for="restricted" class="filter-label line"><div class="label"><div class="cell-center">{{ "Show Restricted Locations" | translate }}</div></div></label></md-container><md-container title="Show/Hide Residential locations"><input type="checkbox" name="maps.filters.filter_residential" value="true" ng-checked="maps.filters.filter_residential" ng-click="maps.toggleSingle(\'filter_residential\')" id="residential"><label for="residential" class="filter-label line"><div class="label"><div class="cell-center">{{ "Show Residential Locations" | translate }}</div></div></label></md-container><md-container title="Show/Hide locations with Coming Soon status"><input type="checkbox" name="maps.filters.filter_soon" value="true" ng-checked="maps.filters.filter_soon" ng-click="maps.toggleSingle(\'filter_soon\')" id="soon"><label for="soon" class="filter-label line"><div class="label"><div class="cell-center es-419 pt">{{ "Show Coming Soon Locations" | translate }}</div></div></label></md-container></div></div></div></div><div class="filter power" ng-show="maps.initialized && maps.dcfc() && maps.localization.power_filter_enabled"><div class="float-filters-container"><div class="float-filters"><md-menu-item class="default-button no-button" title="Show locations with a minimum power. Locations with no power data will be filtered out"><div class="section-title"><span class="title-label" title="Show locations with a minimum power. Locations with no power data will be filtered out. Currently for CCS, CHAdeMO, Supercharger only">{{ "Minimum Power" | translate }} ({{ maps.filters.power }} kW)</span></div></md-menu-item><div class="expandable"><md-slider class="levels slider thick green md-primary" ng-model="maps.powerLevel" min="0" max="{{ maps.powerLevels.length - 1 }}" ng-change="maps.updatePower()" aria-label="power-level"></md-slider><div class="steps"><div class="power-level" ng-class="{showable: maps.filters.power <= power}" ng-repeat="power in maps.powerLevels">{{ power }}</div></div><div class="power-tip"><span ng-show="maps.powerLevel == 0">{{ "Locations shown are not being filtered by kilowatts" | translate }}</span> <span class="on" ng-show="maps.powerLevel > 0">{{ "Locations shown are being filtered by kilowatts" | translate }}</span></div></div></div></div></div><div class="filter networks" ng-show="maps.localization.filterable_networks.length > 0"><div class="float-filters-container"><div class="float-filters"><md-menu-item class="default-button" title="Show locations with at least one station containing any of the selected networks"><md-button ng-click="maps.toggleMenu(\'networks\')"><div class="section-title" ng-class="{inactive: maps.initialized && maps.activeNetworkFilters == 0 && maps.localization.filterable_networks.length}"><div class="left"><span class="title-label">{{ "Networks" | translate }} (<span translate="X of XX" translate-value-quantity="{{ maps.activeNetworkFilters }}" translate-value-max="{{ maps.localization.filterable_networks.length + 1 }}"></span>)</span></div><md-icon ng-show="maps.initialized && maps.activeNetworkFilters == 0" class="error" title="{{ maps.networkWarning }}">error</md-icon><div class="toggle"><md-icon ng-show="!maps.menu.networks">chevron_left</md-icon><md-icon ng-show="maps.menu.networks">expand_more</md-icon></div></div></md-button><div class="toggle-all" ng-click="maps.toggleNetworks()" ng-show="maps.menu.networks && maps.localization.filterable_networks.length > 3" title="Toggle all networks on/off">{{ "Toggle All" | translate }}</div></md-menu-item><div class="expandable" ng-show="maps.menu.networks"><md-container ng-repeat="network in maps.localization.filterable_networks"><input type="checkbox" name="maps.filters.networks[]" value="{{network.id}}" ng-checked="maps.filters.networks.indexOf(network.id) > -1" ng-click="maps.toggleNetwork(network.id)" id="network{{$index+1}}"><label for="network{{$index+1}}" class="filter-label" ng-attr-title="{{ network.name }}"><div class="sprite network"><div class="icon-{{ network.name | spacedash }}"></div></div><div class="label">{{ network.name }}</div></label></md-container><md-container><input type="checkbox" name="maps.filters.other_networks" value="1" ng-checked="maps.filters.other_networks" ng-click="maps.toggleSingle(\'other_networks\')" id="other-networks"><label for="other-networks" class="filter-label" ng-attr-title="Other" title="Includes any other networks AND non-networked stations - recommended to leave on for more results"><div class="sprite network"><div class="icon-Other"></div></div><div class="label">{{ "Other" | translate }} *</div></label></md-container><div class="tip-area">{{ "Other includes other networks and non-networked locations (recommended on)" | translate }} **</div></div></div></div></div><div class="filter temporary"><div class="float-filters-container"><div class="float-filters"><md-menu-item class="default-button no-button" title="These filters will not persist through browser refresh"><div class="section-title"><span class="title-label">{{ "Temporary Filters" | translate }} (<span translate="X of XX" translate-value-quantity="{{ maps.filters.amenities.length + (maps.filters.filter_pwps ? 1 : 0) }}" translate-value-max="10"></span>)</span></div></md-menu-item><div class="expandable"><div class="temporary-filters"><md-container ng-show="maps.localization.pwps_filter_enabled"><input type="checkbox" name="maps.filters.filter_pwps" value="true" ng-checked="maps.filters.filter_pwps" ng-click="maps.toggleSingle(\'filter_pwps\')" id="pwps"><label for="pwps" class="filter-label" title="Shows Pay with PlugShare locations"><div class="label"><div class="cell-center">{{ "Accepts Pay with PlugShare" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="1" ng-checked="maps.filters.amenities.indexOf(1) > -1" ng-click="maps.toggleAmenities(1)" id="lodging"><label for="lodging" class="filter-label"><div class="label"><div class="cell-center">{{ "Hotel/Lodging" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="2" ng-checked="maps.filters.amenities.indexOf(2) > -1" ng-click="maps.toggleAmenities(2)" id="dining"><label for="dining" class="filter-label"><div class="label"><div class="cell-center">{{ "Dining" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="3" ng-checked="maps.filters.amenities.indexOf(3) > -1" ng-click="maps.toggleAmenities(3)" id="restroom"><label for="restroom" class="filter-label"><div class="label"><div class="cell-center">{{ "Restroom" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="4" ng-checked="maps.filters.amenities.indexOf(4) > -1" ng-click="maps.toggleAmenities(4)" id="evparking"><label for="evparking" class="filter-label"><div class="label"><div class="cell-center es-419 nl sl">{{ "EV Parking" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="5" ng-checked="maps.filters.amenities.indexOf(5) > -1" ng-click="maps.toggleAmenities(5)" id="valet"><label for="valet" class="filter-label"><div class="label"><div class="cell-center">{{ "Valet" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="6" ng-checked="maps.filters.amenities.indexOf(6) > -1" ng-click="maps.toggleAmenities(6)" id="park"><label for="park" class="filter-label"><div class="label"><div class="cell-center">{{ "Park" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="7" ng-checked="maps.filters.amenities.indexOf(7) > -1" ng-click="maps.toggleAmenities(7)" id="wifi"><label for="wifi" class="filter-label"><div class="label"><div class="cell-center">{{ "WiFi" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="8" ng-checked="maps.filters.amenities.indexOf(8) > -1" ng-click="maps.toggleAmenities(8)" id="shopping"><label for="shopping" class="filter-label"><div class="label"><div class="cell-center">{{ "Shopping" | translate }}</div></div></label></md-container><md-container><input type="checkbox" name="maps.filters.amenities[]" value="9" ng-checked="maps.filters.amenities.indexOf(9) > -1" ng-click="maps.toggleAmenities(9)" id="grocery"><label for="grocery" class="filter-label"><div class="label"><div class="cell-center">{{ "Grocery" | translate }}</div></div></label></md-container></div><div class="tip-area" ng-show="maps.temporaryFiltersTip">{{ "These restrictive filters hide any locations not matching requirements, so they are not saved on refresh" | translate }} **</div></div></div></div></div><div class="filter plugscore"><div class="float-filters-container"><div class="float-filters"><md-menu-item class="default-button no-button"><div class="section-title"><span class="title-label">{{ "Minimum PlugScore" | translate }} ({{ maps.filters.plugscore }})</span></div></md-menu-item><div class="expandable"><md-slider flex class="slider md-primary" md-discrete ng-model="maps.filters.plugscore" step="1" min="0" max="10" ng-change="maps.updatePlugscore()" aria-label="rating"></md-slider><div class="plugscore-tip"><span ng-show="maps.filters.plugscore == 0">{{ "Locations shown are not being filtered by PlugScore" | translate }}</span> <span class="on" ng-show="maps.filters.plugscore > 0">{{ "Locations shown are being filtered by PlugScore" | translate }}</span></div></div></div></div></div><div class="filter rank" ng-show="maps.testing"><div class="float-filters-container"><div class="float-filters"><md-menu-item class="default-button"><md-button ng-click="maps.toggleRank()"><div class="section-title"><div class="left"><span class="title-label">{{ "Toggle Rank" | translate }}</span></div></div></md-button></md-menu-item></div></div></div></div></div><div class="menu-item account" ng-show="maps.localizationStatus == \'success\' && !embed"><md-menu-item class="default-button"><md-button ng-click="maps.toggleMenu(\'account\')"><div class="section-title"><md-icon>account_circle</md-icon>{{ "My Account" | translate }}<div class="toggle"><md-icon ng-show="!maps.menu.account">chevron_left</md-icon><md-icon ng-show="maps.menu.account">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.account"><md-menu-item class="default-button" ng-show="!maps.user && maps.initialized"><md-button ng-click="maps.showLogin($event)">{{ "Login" | translate }}</md-button></md-menu-item><md-menu-item class="default-button" ng-show="!maps.user && maps.initialized"><md-button ng-click="maps.showRegister($event)">{{ "Register" | translate }}</md-button></md-menu-item><md-menu-item class="default-button" ng-show="maps.user"><md-button ng-click="maps.try($event, \'showProfile\')">{{ "My Profile" | translate }}</md-button></md-menu-item><md-menu-item class="default-button" ng-show="maps.user"><md-button ng-click="maps.try($event, \'showVehicle\', false, maps.activeVehicleIndex)">{{ "My Vehicle" | translate }}</md-button></md-menu-item><md-menu-item class="default-button" ng-show="maps.user"><md-button ng-click="maps.logout(false, true)">{{ "Logout" | translate }}</md-button></md-menu-item></div></div><div class="menu-item charge-sessions" ng-show="maps.user && maps.localizationStatus == \'success\' && !embed && !customMode.name" ng-controller="SessionsController"><md-menu-item class="default-button"><md-button ng-click="maps.toggleMenu(\'sessions\')"><div class="section-title"><md-icon>battery_charging_full</md-icon><span class="pwps-history">{{ "Pay with PlugShare History" | translate }}</span><div class="toggle"><md-icon ng-show="!maps.menu.sessions">chevron_left</md-icon><md-icon ng-show="maps.menu.sessions">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.sessions"><div class="none" ng-click="maps.openLink(\'https://pay.plugshare.com/\', \'pwps\')" ng-show="maps.latestChargeSessions().length == 0">{{ "Get started with Pay with PlugShare" | translate }}</div><md-menu-item class="default-button" ng-repeat="session in maps.latestChargeSessions()"><md-button ng-click="maps.showSession($event, session.id)"><div class="details-left"><div class="name">{{ session.location.name ? session.location.name : \'-\' }}</div><div class="date">{{ session.created_at | date: "MMM d, yyyy" }}</div><div class="charge">{{ session.watt_hours/1000 }} kWh</div></div><div class="details-right"><div class="cost" ng-if="session.formatted_cost != \'See station\' && session.formatted_cost != \'Pending\'">{{ session.formatted_cost }}</div><div class="status" ng-class="{error: maps.isSessionError(session.status)}" ng-show="maps.isSessionCharging(session.status) || maps.isSessionError(session.status)">{{ session.status.replace(\'_\', \' \') | titleCase | translate }}</div></div></md-button></md-menu-item><md-menu-item class="default-button load" ng-show="maps.latestChargeSessions().length && maps.moreChargeSessions()"><md-button ng-click="maps.getChargeSessions(true)">{{ "Load More" | translate }}</md-button></md-menu-item></div></div><div class="menu-item bookmarks" ng-show="maps.user && maps.localizationStatus == \'success\' && !embed"><md-menu-item class="default-button"><md-button ng-click="maps.toggleMenu(\'bookmarks\')"><div class="section-title"><md-icon>star</md-icon>{{ "Bookmarks" | translate }}<div class="toggle"><md-icon ng-show="!maps.menu.bookmarks">chevron_left</md-icon><md-icon ng-show="maps.menu.bookmarks">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.bookmarks"><div class="none" ng-show="maps.latestBookmarks().length == 0" title="Star a location to add it to your bookmarks!">{{ "No Bookmarks" | translate }}</div><md-menu-item class="default-button" ng-repeat="bookmark in maps.latestBookmarks()"><md-button ng-click="maps.mapControl.goToNewMarker(bookmark.location)">{{ bookmark.location.display_name }}</md-button><div class="remove" ng-click="maps.removeBookmark(null, bookmark.location.id)"><md-icon>close</md-icon></div></md-menu-item></div></div><div class="menu-item new" ng-show="maps.localizationStatus == \'success\' && !embed && !customMode.name"><md-menu-item class="default-button"><md-button ng-click="maps.toggleMenu(\'new\')"><div class="section-title"><div class="sprite legend"><div class="icon-station"></div></div><div class="bg-text">{{ "Add Station" | translate }}</div><div class="toggle"><md-icon ng-show="!maps.menu.new">chevron_left</md-icon><md-icon ng-show="maps.menu.new">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.new"><md-menu-item class="default-button" ng-show="maps.initialized"><md-button ng-click="maps.try($event, \'addPublicLocation\')">{{ "Add Public Location" | translate }}</md-button></md-menu-item><md-menu-item class="default-button" ng-show="maps.initialized && (!maps.user || maps.user.locations.length == 0)"><md-button ng-click="maps.try($event, \'addResidentialLocation\')">{{ "Share Home Charger" | translate }}</md-button></md-menu-item><md-menu-item class="default-button" ng-show="maps.initialized && maps.user.locations.length > 0"><md-button ng-click="maps.viewHomeCharger()">{{ "View Home Charger" | translate }}</md-button></md-menu-item></div></div><div class="menu-item trip" ng-show="maps.localizationStatus == \'success\' && !embed && !customMode.name"><md-menu-item class="default-button"><md-button ng-click="maps.toggleMenu(\'trip\')"><div class="section-title"><md-icon>directions_car</md-icon>{{ "Trip Planner" | translate }}<div class="toggle"><md-icon ng-show="!maps.menu.trip">chevron_left</md-icon><md-icon ng-show="maps.menu.trip">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.trip"><md-menu-item class="default-button new"><md-button ng-click="maps.showTripWelcome()" ng-show="!maps.user">{{ "Plan a New Trip" | translate }}</md-button><md-button ng-click="maps.showPlanner()" ng-show="maps.user">{{ "Plan a New Trip" | translate }}</md-button></md-menu-item><md-menu-item class="default-button" ng-repeat="trip in maps.latestTrips()" ng-show="maps.user"><md-button ng-click="maps.showPlanner($event, trip.id)" title="{{ trip.name }}"><div class="name">{{ trip.name }}</div><div class="subtitle"><div class="date">{{ trip.updated_at | date: "MMM d, yyyy - h:mm a" }}</div><div class="stops">- <span translate="Leg stops" translate-value-count="{{ trip.trip_leg_count }}"></span></div><div class="distance">- <span ng-show="!maps.metric">{{ (trip.distance / 1609).toFixed(0) }} {{ "mi" | translate }}</span> <span ng-show="maps.metric">{{ (trip.distance / 1000).toFixed(0) }} {{ "km" | translate }}</span></div></div></md-button><div class="remove" ng-click="maps.deleteTrip(trip.id)"><md-icon>close</md-icon></div></md-menu-item></div></div><div class="menu-item activity" ng-show="maps.localizationStatus == \'success\' && !embed" ng-controller="ActivityController"><md-menu-item class="default-button"><md-button ng-click="maps.showActivity($event)"><div class="section-title"><md-icon>history</md-icon>{{ "Recent Activity" | translate }}</div></md-button></md-menu-item></div><div class="menu-item settings" ng-show="!embed" ng-controller="SettingsController"><md-menu-item class="default-button"><md-button ng-click="maps.showSettings($event)"><div class="section-title"><md-icon>settings</md-icon>{{ "Settings" | translate }}</div></md-button></md-menu-item></div><div class="menu-item help" ng-show="!embed" ng-controller="TutorialController"><md-menu-item class="default-button"><md-button ng-click="maps.showTutorial($event)"><div class="section-title"><md-icon>help_outline</md-icon>{{ "Help" | translate }}</div></md-button></md-menu-item></div><div class="menu-item feedback" ng-show="!embed" ng-controller="FeedbackController"><md-menu-item class="default-button"><md-button ng-click="maps.showFeedback($event)"><div class="section-title"><md-icon>message</md-icon>{{ "Submit Feedback" | translate }}</div></md-button></md-menu-item></div><div class="menu-item trip store" ng-show="!embed"><md-menu-item class="default-button"><md-button ng-click="maps.openLink(\'https://store.plugshare.com/\', \'deals\')"><div class="section-title"><md-icon>shopping_cart</md-icon>{{ "PlugShare Store" | translate }}</div></md-button></md-menu-item></div><div class="menu-item app" ng-show="!embed"><md-menu-item class="default-button"><md-button ng-click="maps.getApp()"><div class="section-title"><md-icon>get_app</md-icon>{{ "Get the App" | translate }}<div class="toggle" ng-show="!(maps.iosMobile || maps.android)"><md-icon ng-show="!maps.menu.app">chevron_left</md-icon><md-icon ng-show="maps.menu.app">expand_more</md-icon></div></div></md-button></md-menu-item><div class="expandable" ng-show="maps.menu.app && !(maps.iosMobile || maps.android)"><md-menu-item class="default-button"><md-button ng-click="maps.openLink(\'https://itunes.apple.com/us/app/plugshare/id421788217?mt=8\', \'app\')"><i class="fa fa-apple" aria-hidden="true"></i> {{ "Apple App Store" | translate }}</md-button></md-menu-item><md-menu-item class="default-button"><md-button ng-click="maps.openLink(\'https://play.google.com/store/apps/details?id=com.xatori.Plugshare&hl=en\', \'app\')"><i class="fa fa-android" aria-hidden="true"></i> {{ "Google Play Store" | translate }}</md-button></md-menu-item></div></div></md-menu-content><div id="quick-filters" ng-show="!maps.menu.menu && maps.localizationStatus == \'success\' && !maps.location && !embed && !maps.streetViewMode" ng-cloak><div class="filter custom-view" ng-click="maps.menu.menu = true" title="custom view filters" ng-show="customMode.name">{{ customMode.name }} {{ "Custom View Active" | translate }}</div><div ng-show="!customMode.name"><div class="filter" ng-class="{warning: maps.initialized && maps.activeOutletsCount == 0 && maps.localization.outlets_filter.length}" ng-click="maps.helper(\'quickPlugs\')" title="plug filters">{{ maps.activeOutletsCount }} {{ "Plugs" | translate }}</div><div class="filter power" ng-click="maps.helper(\'quickPower\')" title="minimum power filter (DCFC only)" ng-if="maps.dcfc() && maps.localization.power_filter_enabled && maps.filters.power">{{ "Power" | translate }}: {{ maps.filters.power }}kW+</div><div class="filter" ng-class="{warning: maps.initialized && maps.activeNetworkFilters == 0}" ng-click="maps.helper(\'quickNetworks\')" title="network filters" ng-show="maps.localization.filterable_networks.length > 0">{{ maps.activeNetworkFilters }}{{ maps.filters.other_networks ? \'+\' : \'\' }} {{ "Networks" | translate }}</div><div class="filter plugscore" ng-click="maps.helper(\'quickPlugScore\')" title="minimum PlugScore filter" ng-if="maps.filters.plugscore">PlugScore: {{ maps.filters.plugscore }}+</div><div class="filter" ng-click="maps.helper(\'quickPWPS\')" title="Pay with PlugShare only filter" ng-if="maps.localization.pwps_filter_enabled && maps.filters.filter_pwps">PWPS</div></div></div><div id="active-session" ng-click="maps.showSession($event)" ng-show="maps.user && !maps.menu.menu && maps.localizationStatus == \'success\' && !maps.location && !embed && maps.activeChargeSessionId && !maps.streetViewMode" ng-cloak><md-icon>battery_charging_full</md-icon><span class="view-label">{{ "View Active Charging Session" | translate }}</span></div><div class="mobilead" ng-class="{activeCharging: maps.activeChargeSessionId}" ng-show="(maps.before_mobile_ad_loaded || maps.mobile_ad_loaded) && maps.displayAd && !maps.location && !maps.menu.menu && !mobilePlanner"><div class="thead" ng-class="{adloaded: maps.mobile_ad_loaded}"><div id="div-gpt-ad-1605565412227-0"></div></div><div class="closead" ng-click="maps.closeAd(\'mobile ad\')" ng-show="maps.mobile_ad_loaded"><div class="container"><md-icon aria-hidden="Close ad">close</md-icon></div></div></div><div id="map-ui" ng-class="{planner: tripPlanner}" ng-if="!maps.bot" ng-show="!maps.streetViewMode"><a href="https://plugshare.com" target="_blank" id="embed-logo" ng-if="maps.borderless"><img src="https://assets.plugshare.com/assets/plugshare-logo.png" class="logo" alt="PlugShare"></a><md-button class="md-raised" id="my-location" ng-click="maps.centerMap()" ng-show="!embed" title="Center Map on My Location"><md-icon>my_location</md-icon></md-button><div id="zoom-control"><md-button class="md-raised ui-button" id="zoom-in" ng-click="maps.zoomIn()" title="Zoom In" aria-label="Zoom In"><i class="fa fa-plus"></i></md-button><md-button class="md-raised ui-button" id="zoom-out" ng-click="maps.zoomOut()" title="Zoom Out" aria-label="Zoom Out"><i class="fa fa-minus"></i></md-button></div><div id="extra-controls" ng-show="!embed"><md-button class="md-raised ui-button" ng-class="{mobilePlanner: mobilePlanner}" id="markers" ng-click="maps.openFilters()" title="{{ maps.visibleMarkers ? maps.visibleMarkers : \'0\' }} Charging Locations Visible with Current Filter Settings"><span class="count">{{ maps.visibleMarkers ? maps.visibleMarkers : \'0\' }}</span> {{ "Charging Locations" | translate }}</md-button><md-button class="md-raised ui-button" id="traffic" ng-click="maps.toggleTraffic()" ng-class="{active: maps.traffic}" title="Toggle Traffic">{{ "Traffic" | translate }}</md-button></div><div id="map-types"><md-button class="md-raised ui-button" ng-click="maps.setMap(\'roadmap\')" ng-class="{active: maps.mapType == \'roadmap\' }" title="Show street map">{{ "Map" | translate }}</md-button><md-button class="md-raised ui-button" ng-click="maps.setMap(\'terrain\')" ng-class="{active: maps.mapType == \'terrain\' }" title="Show street map with terrain">{{ "Terrain" | translate }}</md-button><md-button class="md-raised ui-button" ng-click="maps.setMap(\'hybrid\')" ng-class="{active: maps.mapType == \'hybrid\' }" title="Show satellite imagery">{{ "Satellite" | translate }}</md-button></div></div><div id="special-buttons" ng-class="{location: maps.location, activeCharging: maps.activeChargeSessionId, adsActive: maps.displayAd}" ng-show="!embed" ng-cloak><md-button class="md-raised" ng-click="maps.removeArea()" title="Clear Area Filter" ng-show="maps.areaFilter && !customMode.name"><md-icon>vpn_lock</md-icon>Clear Area Filter: {{ maps.areaFilter }}</md-button><md-button class="md-raised" ng-click="maps.clearAmenities()" title="Clear Amenity Filters" ng-show="maps.filters.amenities.length > 0"><md-icon>layers_clear</md-icon>{{ "Clear Amenity Filters" | translate }}</md-button><md-button class="back-trip md-raised" ng-click="maps.location = null" title="Back to Trip" ng-show="mobilePlanner && maps.location.id"><md-icon>list</md-icon>{{ "Back to Trip" | translate }}</md-button></div><div id="load-error" ng-show="maps.showLoadError">Sorry, it looks like PlugShare did not load correctly. Please try a hard refresh or clear your browser cache and try again. <a href="https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache" target="_blank">View How</a></div><div id="map" class="plugshare-map" ng-class="{pane: maps.location.id, planner: tripPlanner && !maps.streetViewMode}" callback-fn="maps.mapCall(fn, data)" drag="maps.dragging" control="maps.mapControl"></div><div id="planner" ng-show="tripPlanner && maps.user && !embed && !maps.streetViewMode" ng-class="{pane: maps.location.id, mobilePlanner: mobilePlanner}" ng-controller="TripController" ng-cloak><form name="maps.plannerForm" id="planner-form" novalidate><div class="header"><div class="title">{{ "Trip Planner" | translate }} <a href="https://help.plugshare.com/hc/en-us/articles/4418958326163-Trip-Planner-Guide-Tips" target="_blank" title="Trip Planner Guide & Tips"><md-icon class="help">help_outline</md-icon></a><span class="readonly" ng-click="maps.readOnlyHelp()" ng-show="mobilePlanner" title="Mobile is read only. Use computer to create and edit trips">{{ "READ ONLY" | translate }}</span></div><md-icon ng-click="maps.closePlanner()" aria-label="cancel" aria-hidden="Close trip planner">close</md-icon></div><div id="loading" ng-show="maps.router.loading"><md-progress-circular md-mode="indeterminate" md-diameter="30px"></md-progress-circular><div class="load">{{ "Loading" | translate }}</div></div><div id="routing" ng-show="!maps.router.loading"><div id="trip-name" ng-class="{mobilePlanner: mobilePlanner}" ng-show="maps.router.showTitle"><md-input-container class="md-block responsive" ng-show="!mobilePlanner" flex-gt-xs><label>{{ "Trip Name" | translate }}</label><input type="text" name="trip_name" ng-model="maps.router.name" placeholder="Untitled Trip" maxlength="100"></md-input-container><md-icon ng-click="maps.reverseTrip()" ng-show="!mobilePlanner" class="reverse" title="Reverse Trip Order">swap_vert</md-icon><div class="mobileTitle" ng-show="mobilePlanner">{{ maps.router.name }}</div></div><div id="path" ng-class="{mobilePlanner: mobilePlanner}"><div class="start">{{ "Start" | translate }}</div><div class="waypoints" ng-class="{mobilePlanner: mobilePlanner}" ui-sortable="sortableOptions" ng-model="maps.router.waypoints"><div class="container" ng-class="{wait: maps.router.wait, directions: maps.router.waypoints[0].selected && maps.router.waypoints[maps.router.waypoints.length - 1].selected}" ng-repeat="waypoint in maps.router.waypoints"><div class="spacer" ng-if="directions && waypoint.index == (maps.router.waypoints.length - 1)"><md-icon ng-hide="maps.pulseActive && maps.getActiveInput() === -1">more_vert</md-icon><div class="signal" ng-show="maps.pulseActive && maps.getActiveInput() === -1">{{ "Insert Stop Here" | translate }}</div></div><div class="destination" ng-if="waypoint.index == (maps.router.waypoints.length - 1)">{{ "Destination" | translate }}</div><div class="waypoint"><md-icon class="search" ng-class="{handle: !mobilePlanner}" ng-show="!waypoint.selected">search</md-icon><div class="circle" ng-show="!tripComplete && range.visible && waypoint.selected && waypoint.index == range.index && !mobilePlanner"></div><div class="sprite marker" ng-class="{handle: !mobilePlanner}" ng-show="waypoint.selected" ng-mouseover="maps.hoverMarkerOn(waypoint.index)" ng-mouseleave="maps.hoverMarkerOff(waypoint.index)"><div class="icon-{{ waypoint.location.icon_type ? waypoint.location.icon_type : \'M\' }}" ng-click="mobilePlanner ? maps.centerCoords(waypoint.coords) : maps.redrawRange(waypoint.index)"></div></div><md-autocomplete id="waypoint{{ waypoint.index }}" index="{{ waypoint.index }}" class="route-autocomplete" ng-class="{special: waypoint.selected == \'My Location\' || waypoint.selected == \'Home\', verified: waypoint.selected, pulse: maps.pulseActive && maps.getActiveInput() === waypoint.index}" md-delay="750" md-no-cache="true" md-selected-item="maps.routeSelectedItem" md-search-text-change="maps.routeSearchTextChange(waypoint)" md-search-text="waypoint.display" md-selected-item-change="maps.routeSelectedItemChange(item, waypoint.index)" md-items="item in maps.routeQuerySearch(waypoint.display)" md-item-text="item.display" md-min-length="2" md-clear-button="false" ng-show="!mobilePlanner" placeholder="{{ (waypoint.index == 0 ? \'Starting Location\' : \'Search address or click on the map\') | translate }}"></md-autocomplete><div class="mobileWaypoint" ng-click="maps.centerCoords(waypoint.coords)" ng-show="mobilePlanner"><div class="display" ng-class="{pad: waypoint.display == waypoint.address}">{{ waypoint.display }}</div><div class="address" ng-show="waypoint.display != waypoint.address">{{ waypoint.address }}</div></div><div class="leg-span" ng-show="directions"><span class="distance" ng-class="{range: range.visible, warning: waypoint.displayDistanceWarning}" ng-click="maps.toggleUnits()" ng-attr-title="{{ waypoint.distanceMessage }}" ng-show="waypoint.distance && waypoint.index != maps.router.waypoints.length - 1"><span>{{ waypoint.distance }}</span> <span ng-show="!maps.metric">{{ "mi" | translate }}</span> <span ng-show="maps.metric">{{ "km" | translate }}</span> </span><span class="duration" ng-show="waypoint.durationMinutes && waypoint.index != maps.router.waypoints.length - 1"><span ng-show="waypoint.durationHours">{{ waypoint.durationHours }} {{ "hours" | translate }}</span> <span ng-show="waypoint.durationMinutes">{{ waypoint.durationMinutes }} {{ "mins" | translate }}</span></span></div><div class="action-icons"><md-icon class="show" ng-show="waypoint.selected" ng-click="maps.showWaypoint(waypoint.index)" aria-label="show" aria-hidden="Show waypoint" title="View location on map" tabindex="-1">info</md-icon><md-icon class="remove" ng-show="!mobilePlanner" ng-click="maps.clearWaypoint(waypoint.index)" aria-label="remove" aria-hidden="Clear waypoint" title="Clear location" tabindex="-1">close</md-icon><md-icon class="copy" ng-show="mobilePlanner" ng-click="maps.copyWaypoint(waypoint.index)" aria-label="copy" aria-hidden="Copy address to clipboard" title="Copy location address" tabindex="-1">content_copy</md-icon><a ng-href="{{ \'https://www.google.com/maps/search/\' + waypoint.address }}" target="_blank" class="gmaps" ng-show="mobilePlanner && waypoint.address" title="View on Google Maps"><md-icon aria-label="directions" aria-hidden="Get directions" tabindex="-1">open_in_new</md-icon></a></div><div class="wait" ng-show="maps.router.wait && waypoint.index != 0 && waypoint.index != maps.router.waypoints.length - 1"><md-icon>access_time</md-icon>{{ "Wait" | translate }} <input type="number" min="0" step="0.5" ng-model="waypoint.wait" ng-change="maps.calculateTotals()" ng-disabled="!waypoint.selected || mobilePlanner"> {{ "hours" | translate }}</div><div class="insert" ng-show="directions && maps.router.waypoints.length < 25 && !mobilePlanner" ng-click="maps.insertWaypointAfter(waypoint.index)" title="Add Stop" tabindex="-1">{{ "Add Stop" | translate }}</div><div class="stepbystep" ng-show="mobilePlanner"></div></div></div></div><div id="total-distance" ng-show="directions"><span class="total distance" ng-click="maps.toggleUnits()" ng-attr-title="{{ maps.router.waypoints[maps.router.waypoints.length - 1].distanceMessage }}"><span>{{ "Total Distance" | translate }}:</span> <span>{{ maps.router.waypoints[maps.router.waypoints.length - 1].distance }}</span> <span ng-show="!maps.metric">{{ "mi" | translate }}</span> <span ng-show="maps.metric">{{ "km" | translate }}</span> </span><span class="duration"><span>{{ "About Duration" | translate }}</span> <span ng-show="maps.router.waypoints[maps.router.waypoints.length - 1].durationHours">{{ maps.router.waypoints[maps.router.waypoints.length - 1].durationHours }} {{ "hours" | translate }}</span> <span ng-show="maps.router.waypoints[maps.router.waypoints.length - 1].durationMinutes">{{ maps.router.waypoints[maps.router.waypoints.length - 1].durationMinutes }} {{ "mins" | translate }}</span></span></div><div id="total-time" ng-show="maps.router.wait && directions"><span class="label">{{ "Total Time Including Waiting" | translate }}:</span> <span>{{ "About Duration" | translate }}</span> <span ng-show="maps.router.totalDurationHours">{{ maps.router.totalDurationHours }} {{ "hours" | translate }}</span> <span ng-show="maps.router.totalDurationMinutes">{{ maps.router.totalDurationMinutes }} {{ "mins" | translate }}</span></div><div class="distance-warning" ng-show="range.visible && maps.router.showWarning && maps.router.dangerousSegments > 0 && directions"><span class="bold">{{ "Warning" | translate }}:</span> <span translate="Segments of your trip" translate-value-number="{{ maps.router.dangerousSegments }}"></span></div><div id="actions" ng-show="directions && !mobilePlanner"><div class="action" ng-click="maps.routeTrip(true)" title="Recenter the map on all your stops"><md-icon>aspect_ratio</md-icon><div class="label cs"><span ng-if="directions">{{ "Center" | translate }}</span> <span ng-if="!directions">{{ "Map" | translate }}</span></div></div><div class="action" ng-click="maps.toggleComplete()" ng-class="{overview: tripComplete}" title="Toggle overview mode of all stops"><md-icon>flag</md-icon><div class="label es ro">{{ "Overview" | translate }}</div></div><div class="action" ng-click="maps.showPath()" title="View elevation data of your trip"><md-icon>landscape</md-icon><div class="label cs hr">{{ "Elevation" | translate }}</div></div><div class="action" ng-click="maps.saveTrip()" title="Save your trip"><md-icon>save</md-icon><div class="label">{{ "Save" | translate }}</div></div></div><div id="directions-panel"></div></div></div><div id="route" ng-show="!directions && !maps.router.loading"><md-button type="submit" class="md-primary md-raised submit" ng-click="maps.routeTrip(true)">{{ "Search" | translate }}</md-button></div><div id="results"><div class="custom-results" ng-show="maps.route_show_results && maps.route_search_focused"><md-menu-item class="search-result" ng-repeat="item in maps.route_search_results track by $index" ng-attr-title="{{item.display}} - {{item.address}}" ng-show="maps.route_search_results.length > 0"><md-button ng-click="maps.routeSelectedItemChange(item, maps.lastActiveId)" class="search"><div class="sprite marker"><div class="icon-{{ item.icon_type }}"></div></div><div class="details"><div class="display">{{item.display}}</div><div class="address" ng-show="item.address">{{item.address}}</div></div></md-button></md-menu-item><md-menu-item class="no-result" ng-attr-title=\'No locations matching "{{maps.route_last_query}}" were found.\' ng-show="maps.route_last_query && maps.route_search_results.length === 0"><div class="details"><span translate="No locations matching searchText were found" translate-value-searcg="{{ maps.route_last_query }}"></span></div></md-menu-item></div></div><div id="directions"><div class="headlink" ng-show="directions"><a ng-href="{{ maps.routeLink }}" target="_blank" ng-show="maps.routeLink" title="View on Google Maps"><img src="https://assets.plugshare.com/assets/GoogleMaps.svg" class="gmaps"><div class="title">{{ "View Directions" | translate }}</div><md-icon>open_in_new</md-icon></a></div></div><div id="options"><div class="title">{{ "Options" | translate }}</div><div class="along"><md-checkbox class="md-primary" ng-model="maps.router.along" ng-change="maps.toggleAlong()" aria-label="Show along route">{{ "Show Along Route Only" | translate }}</md-checkbox><div class="display" ng-class="{inactive: !maps.router.along}"><span class="label">{{ "Search Radius" | translate }}:</span> <span class="toggle" ng-show="!maps.metric" ng-click="maps.toggleUnits()" title="Change units to metric">{{ maps.router.radius }} {{ "miles" | translate }}</span> <span class="toggle" ng-show="maps.metric" ng-click="maps.toggleUnits()" title="Change units to imperial">{{ (maps.router.radius * 1609 / 1000).toFixed(1) }} {{ "kilometers" | translate }}</span> <button class="units" ng-click="maps.toggleUnits()" title="Toggle units between metric and imperial"><span ng-if="maps.metric">{{ "Metric" | translate }}</span> <span ng-if="!maps.metric">{{ "Imperial" | translate }}</span></button></div><md-slider flex id="radius-slider" class="slider md-primary" ng-class="{inactive: !maps.router.along}" ng-model="maps.router.radius" step="1" min="1" max="25" aria-label="search radius"></md-slider></div><div class="range"><md-checkbox class="md-primary" ng-model="range.visible" ng-change="maps.toggleRange()" aria-label="Show range estimator rings">{{ "Show Range Estimate" | translate }}</md-checkbox><div class="main"><div class="display" ng-class="{inactive: !range.visible}"><div><span class="label">{{ "Estimated Max Range" | translate }}:</span> <span class="toggle" ng-show="!maps.metric" ng-click="maps.toggleUnits()" title="Change units to metric">{{ range.max }} {{ "miles" | translate }}</span> <span class="toggle" ng-show="maps.metric" ng-click="maps.toggleUnits()" title="Change units to imperial">{{ (range.max * 1609 / 1000).toFixed(1) }} {{ "kilometers" | translate }}</span></div><button class="reset" ng-click="maps.setVehicleRange()" ng-show="range.vehicle" ng-disabled="range.vehicle == range.max" title="Reset range to vehicle estimate"><md-icon>refresh</md-icon></button></div><md-slider flex class="slider md-primary" ng-class="{inactive: !range.visible}" ng-model="range.max" step="1" min="1" max="{{ range.limit }}" aria-label="max range circle"></md-slider><div class="info" ng-show="range.visible">{{ "The circle does not account for pathing, elevation, road or weather conditions" | translate }}</div></div></div><div class="wait"><md-checkbox class="md-primary" ng-model="maps.router.wait" ng-change="maps.toggleWait()" aria-label="Add wait times">{{ "Add Wait Times" | translate }}</md-checkbox><div class="details" ng-show="maps.router.wait"><div class="info">{{ "Define your own wait / charge times at each stop" | translate }}<br>{{ "Customizable up top, between each added stop" | translate }}</div><div class="display"><span class="label">{{ "Total Wait Time" | translate }}:</span> <span ng-show="maps.router.totalWaitHours != null">{{ maps.router.totalWaitHours }} {{ "hours" | translate }}</span> <span ng-show="maps.router.totalWaitMinutes != null">{{ maps.router.totalWaitMinutes }} {{ "mins" | translate }}</span></div></div></div><div class="avoid"><md-checkbox class="md-primary" ng-model="maps.router.tolls" ng-change="maps.toggleAvoid(\'tolls\')" aria-label="Avoid tolls">{{ "Avoid Tolls" | translate }}</md-checkbox><md-checkbox class="md-primary" ng-model="maps.router.highways" ng-change="maps.toggleAvoid(\'highways\')" aria-label="Avoid highways">{{ "Avoid Highways" | translate }}</md-checkbox><md-checkbox class="md-primary" ng-model="maps.router.ferries" ng-change="maps.toggleAvoid(\'ferries\')" aria-label="Avoid ferries">{{ "Avoid Ferries" | translate }}</md-checkbox></div><div class="filters"><div class="title">{{ "Filters" | translate }}</div><div class="power" ng-show="maps.dcfc() && maps.localization.name == \'US\'"><div class="main"><div class="display"><span class="label">{{ "Minimum Power" | translate }}:</span> <span>{{ maps.filters.power }} kW</span></div><md-slider class="levels slider thick green md-primary" ng-model="maps.powerLevel" min="0" max="{{ maps.powerLevels.length - 1 }}" ng-change="maps.updatePower()" aria-label="power-level"></md-slider></div></div><md-checkbox class="md-primary" name="maps.filters.amenities[]" value="1" ng-checked="maps.filters.amenities.indexOf(1) > -1" ng-click="maps.toggleAmenities(1)" aria-label="Hotel/Lodging">{{ "Hotel/Lodging" | translate }}</md-checkbox><div class="settings" ng-click="maps.helper(\'filters\')"><md-icon>settings</md-icon><span class="label">{{ "Plugs, Networks, Amenities, PlugScore, etc" | translate }}</span></div></div></div></form></div><div class="googlead" ng-show="(maps.before_side_ad_loaded || maps.side_ad_loaded) && maps.displayAd && !tripPlanner"><div class="thead"><div id="div-gpt-ad-1511821471177-0"></div></div><div class="closead sidead" ng-click="maps.closeAd(\'side ad\')" ng-show="maps.side_ad_loaded"><div class="container"><md-icon aria-hidden="Close ad">close</md-icon></div></div></div><div id="controllerLoaders"><div ng-controller="LocationController"></div><div ng-controller="VehicleController"></div><div ng-controller="UploadController"></div><div ng-controller="AuthController"></div><div ng-controller="ForgotController"></div><div ng-controller="ProfileController"></div><div ng-controller="CookiesController"></div><div ng-controller="ChangelogController"></div><div ng-controller="AdController"></div><div ng-controller="PricingController"></div></div></div></div><footer><div class="copy">© {{ maps.year }} Recargo, Inc. <span class="rights">{{ "All rights reserved" | translate }}.</span></div><div class="resource"><a href="https://company.plugshare.com/privacy.html" target="_blank" ng-click="maps.trackLink(\'https://company.plugshare.com/privacy.html\', \'footer\')">{{ "Privacy" | translate }}</a></div><div class="resource"><a href="https://company.plugshare.com/terms.html" target="_blank" ng-click="maps.trackLink(\'https://company.plugshare.com/terms.html\', \'footer\')">{{ "Terms of Use" | translate }}</a></div><div class="resource developer"><a href="https://developer.plugshare.com/" target="_blank" ng-click="maps.trackLink(\'https://developer.plugshare.com/\', \'footer\')">{{ "Developers" | translate }}</a></div><div class="resource stats"><a href="https://www.plugshare.com/directory/us" target="_blank" ng-click="maps.trackLink(\'https://www.plugshare.com/directory/us\', \'footer\')">{{ "Stats" | translate }}</a></div><div class="resource faq"><a href="https://help.plugshare.com/hc/en-us/sections/4418958208147-PlugShare-Web-FAQ" target="_blank" ng-click="maps.trackLink(\'https://help.plugshare.com/hc/en-us/sections/4418958208147-PlugShare-Web-FAQ\', \'footer\')">{{ "FAQ" | translate }}</a></div><div class="resource advertise"><a href="https://company.plugshare.com/advertising.html" target="_blank" ng-click="maps.trackLink(\'https://company.plugshare.com/advertising.html\', \'footer\')">{{ "Advertise" | translate }}</a></div></footer><div id="cookie" ng-class="{mobilelocation: maps.location}" ng-show="!embed && maps.initialized && maps.showPolicy && !maps.bot" ng-cloak><div class="text">{{ "Cookies and Privacy Policy" | translate | translateCut : 0 }} <a href="https://company.plugshare.com/cookies.html" target="_blank">{{ "Cookies" | translate }}</a> {{ "Cookies and Privacy Policy" | translate | translateCut : 2 }} <a href="https://company.plugshare.com/privacy.html" target="_blank">{{ "Privacy Policy" | translate }}</a>.</div><button class="manage" ng-show="maps.eu" ng-click="maps.showCookies()">{{ "Manage Cookies" | translate }}</button> <button class="accept" ng-show="maps.eu" ng-click="maps.acceptAllCookies(\'banner\')">{{ "Accept All" | translate }}</button> <button class="accept" ng-show="!maps.eu" ng-click="maps.acceptPolicy()">{{ "Accept" | translate }}</button></div><div id="banner-warning" ng-show="!maps.isModalOpen() && (maps.unverified || maps.pendingEmail || (maps.user && !maps.user.setup_complete))" ng-cloak><div class="warning" ng-click="maps.showChangeEmail($event, \'verify\')" ng-show="maps.user && maps.pendingEmail" ng-cloak>{{ "Your new email is unverified" | translate }}. {{ "Please verify your new email to complete your email change" | translate }}.</div><div class="warning" ng-click="maps.showRegister($event, null, \'verify\')" ng-show="maps.user && maps.unverified && !maps.pendingEmail" ng-cloak>{{ "Your email is unverified" | translate }}. {{ "Please verify your Email to validate your account" | translate }}.</div><div class="warning" ng-click="maps.showRegister($event, null, \'completeProfile\')" ng-show="maps.user && !maps.unverified && !maps.user.setup_complete" ng-cloak>{{ "Your registration is incomplete" | translate }}. {{ "Please complete your profile to fully activate your account" | translate }}.</div></div>'
      ),
        e.put(
          'app/main/pane.html',
          '<div id="hero" ng-click="maps.location.hero ? maps.showPhotos($event) : (maps.canUpload ? maps.try($event, \'showUpload\') : \'\')" ng-class="{pointer: maps.location.hero || maps.canUpload}" ng-if="!embed"><img ng-src="{{ maps.location.hero ? maps.location.hero : (maps.canUpload ? \'https://assets.plugshare.com/assets/add-photo.png\' : \'\') | dev }}" class="uploadable" ng-show="(maps.location.hero || maps.canUpload)" image-error="true"></div><md-content layout-gt-sm="row" id="location" ng-class="{embed: embed}"><div class="table-center"><div id="location-details"><div class="repair" ng-show="maps.location.under_repair == true">{{ "Under Repair" | translate }}</div><div class="repair" ng-show="(maps.location.under_repair == false && maps.location.station_repair == true)" title="One or more stations are under repair. Check Plugs section below for more details">{{ "Partial Repair" | translate }}</div><div class="restricted" ng-show="maps.location.access == 2">{{ "Restricted" | translate }}</div><div class="residential" ng-show="maps.location.access == 3">{{ "Residential" | translate }}</div><div class="access" ng-show="maps.location.access_restrictions.length >= 1" ng-repeat="access_restriction in maps.location.access_restrictions">{{ access_restriction | accessRestriction : maps.localization.location_access_restriction_types | translate }}</div><div id="location-title"><div class="title-item" ng-show="maps.location.score"><div id="plugscore" class="plugscore" ng-class="{lowscore: maps.location.score < 5}" title="A station\'s PlugScore reflects the experience of its most recent users">{{ maps.location.score }}</div></div><div id="display-name" class="title-item"><div class="display-title"><h1 property="v:name">{{ maps.location.display_name }}</h1><md-icon ng-click="maps.copyLink()" title="Copy link to share location">share</md-icon></div></div></div><div id="ports" ng-if="!maps.private"><div title="Plug Types"><span ng-repeat="connector in maps.location.connectors" ng-show="maps.location.connectors.length > 0">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}{{$last ? \'\' : \', \'}}</span></div><div class="networks" ng-class="{spacer: maps.location.networks.length > 0}" ng-show="maps.location.networks.length > 0" title="Networks"><span ng-repeat="network in maps.location.networks">{{ network }}{{$last ? \'\' : \', \'}}</span></div><div class="plug-power" ng-show="maps.location.kilowatts_string" title="Known plug power levels">{{ maps.location.kilowatts_string }} kW</div></div><div id="residential-login" ng-click="maps.showLogin($event, false, \'View Residential\')" ng-if="maps.private">{{ "Login to view residential charger details" | translate }}</div></div><md-content id="checkin-button" ng-show="!embed && !(tripPlanner && !mobilePlanner)" ng-controller="CheckinController"><md-button ng-click="maps.try($event, \'showCheckin\')" aria-label="check-in" class="md-fab md-success"><md-icon>check</md-icon></md-button><div ng-click="maps.try($event, \'showCheckin\')" class="cta-text">{{ "Check In" | translate }}</div></md-content><md-content id="add-trip" class="hoverpulse" ng-show="!embed && tripPlanner && !mobilePlanner && !maps.findInTrip()"><md-button ng-click="maps.addToTrip()" aria-label="add-to-trip" class="md-fab md-success"><md-icon>add</md-icon></md-button><div ng-click="maps.addToTrip()" class="cta-text">{{ "Add to Trip" | translate }}</div></md-content><md-content id="remove-trip" ng-show="!embed && tripPlanner && !mobilePlanner && maps.findInTrip()"><md-button ng-click="maps.removeFromTrip()" aria-label="remove-from-trip" class="md-fab md-warn"><md-icon>remove</md-icon></md-button><div ng-click="maps.removeFromTrip()" class="cta-text">{{ "Remove" | translate }}</div></md-content><md-content id="view-on-plugshare" ng-show="embed"><md-button ng-click="maps.openLink(\'https://www.plugshare.com/location/\' + maps.location.id, \'embed\')" aria-label="view-on-plugshare" class="md-fab camo"><img src="https://assets.plugshare.com/assets/plugshare.png"></md-button><div ng-click="maps.openLink(\'https://www.plugshare.com/location/\' + maps.location.id, \'embed\')" class="cta-text">{{ "View on PlugShare" | translate }}</div></md-content></div></md-content><md-card id="operator-message" ng-if="maps.location.operator_message && !maps.checkExpired(maps.location.operator_message_expiration)"><div class="information"><div class="info-entry"><div class="icon" title="Operator Message"><md-icon>announcement</md-icon></div><div class="content"><div class="operator-logo center-image" ng-show="maps.location.operator_message_broadcast_image_url"><img ng-src="{{ maps.location.operator_message_broadcast_image_url }}"></div><div class="announcement"><span ng-show="maps.location.operator_message_broadcast_display_name">{{ maps.location.operator_message_broadcast_display_name }} </span>Announcement</div><div class="operator-message">{{ maps.location.operator_message }}</div><div class="date">{{ maps.location.operator_message_created_at | date: "MMM d, yyyy"}}</div></div></div></div></md-card><md-card id="coming-soon" ng-if="!maps.private && maps.location.coming_soon" ng-click="maps.showReport($event, \'This location is now available.\')"><div class="information"><div class="info-entry"><div class="icon" title="Report Location Active"><md-icon>announcement</md-icon></div><div class="content">Report this location as Now Available</div></div></div></md-card><md-card id="revisit" ng-if="maps.user && maps.location.get_my_reviews"><div class="information"><div class="info-entry message" ng-show="maps.location.total_user_reviews_count == 0"><div class="icon"><md-icon class="message" title="No checkins">info</md-icon></div><div class="content">{{ "You have never checked in here" | translate }}</div></div></div><div class="information" ng-show="maps.location.my_reviews[0].rating == 1"><div class="info-entry success"><div class="icon"><md-icon class="success" title="Positive checkin">check_circle</md-icon></div><div class="content"><span>{{ "Last Checkin" | translate }}</span>: <span>{{ "You successfully charged here on " | translate }}</span> <span>{{ maps.location.my_reviews[0].created_at | date: "MMMM d, yyyy" }}</span><div ng-click="maps.viewMyCheckins($event)" class="view-checkins highlight">{{ "View My Checkins" | translate }} ({{ maps.location.total_user_reviews_count }})</div></div></div></div><div class="information" ng-show="maps.location.my_reviews[0].rating == 0"><div class="info-entry message"><div class="icon"><md-icon class="message" title="Comment checkin">info</md-icon></div><div class="content"><span>{{ "Last Checkin" | translate }}</span>: <span>{{ "You left a comment here on " | translate }}</span> <span>{{ maps.location.my_reviews[0].created_at | date: "MMMM d, yyyy" }}</span><div ng-click="maps.viewMyCheckins($event)" class="view-checkins highlight">{{ "View My Checkins" | translate }} ({{ maps.location.total_user_reviews_count }})</div></div></div></div><div class="information" ng-show="maps.location.my_reviews[0].rating == -1"><div class="info-entry fail"><div class="icon"><md-icon class="fail" title="Negative checkin">cancel</md-icon></div><div class="content"><span>{{ "Last Checkin" | translate }}</span>: <span>{{ "You could not charge here on " | translate }}</span> <span>{{ maps.location.my_reviews[0].created_at | date: "MMMM d, yyyy" }}</span><div ng-click="maps.viewMyCheckins($event)" class="view-checkins highlight">{{ "View My Checkins" | translate }} ({{ maps.location.total_user_reviews_count }})</div></div></div></div></md-card><md-card id="info" ng-if="!maps.private"><div id="actions" ng-if="!embed"><div class="action" ng-click="maps.try($event, maps.isBookmarked() ? \'removeBookmark\' : \'addBookmark\')" ng-controller="BookmarkController"><md-icon class="star" ng-class="{saved: maps.isBookmarked()}">star</md-icon><div class="label" ng-if="maps.isBookmarked()">{{ "Unbookmark" | translate }}</div><div class="label" ng-if="!maps.isBookmarked()">{{ "Bookmark" | translate }}</div></div><div class="action" ng-click="maps.try($event, \'showUpload\')" ng-show="maps.canUpload"><md-icon>photo</md-icon><div class="label id">{{ "Add Photo" | translate }}</div></div><div class="action" ng-click="maps.try($event, \'showMessage\')" ng-show="!maps.canUpload" ng-controller="MessageController"><md-icon>mail</md-icon><div class="label">{{ "Message" | translate }}</div></div><a ng-href="https://www.google.com/maps/dir//{{ maps.location.address ? maps.location.address : maps.location.latitude + \',\' + maps.location.longitude }}" target="_blank" ng-click="maps.logDirectionsRequest(maps.location.address ? maps.location.address : maps.location.latitude + \',\' + maps.location.longitude, \'ldvDirections\')" class="action unlink"><md-icon>directions</md-icon><div class="label">{{ "Directions" | translate }}</div></a><div class="last action" ng-click="maps.try($event, \'editLocation\')" ng-show="maps.canEdit"><md-icon>mode_edit</md-icon><div class="label">{{ "Edit" | translate }}</div></div><div class="last action" ng-click="maps.showReport($event)" ng-show="!maps.canEdit" ng-controller="ReportController"><md-icon>warning</md-icon><div class="label">{{ "Report" | translate }}</div></div></div><div class="information"><div class="ldvAd" ng-class="{collapse: !maps.ldv_ad_loaded}" ng-show="(maps.before_ldv_ad_loaded || maps.ldv_ad_loaded) && maps.displayAd"><div class="sponsored" ng-show="maps.ldv_ad_loaded">{{ "Sponsored" | translate }}</div><div class="adbox"><div class="thead" ng-class="{adloaded: maps.ldv_ad_loaded}"><div id="div-gpt-ad-1605562608548-0"></div></div><div class="closead" ng-click="maps.closeAd(\'ldv ad\')" ng-show="maps.ldv_ad_loaded"><div class="container"><md-icon aria-hidden="Close ad">close</md-icon></div></div></div></div><div class="info-entry" ng-show="maps.outlink"><div class="icon" title="Search Link"><md-icon>search</md-icon></div><div class="content"><a ng-href="{{ maps.outlink + maps.location.id }}" target="_blank" class="highlight unlink">{{ maps.location.id }}</a></div></div><div class="info-entry" ng-if="embed"><div class="icon" title="Stations"><md-icon>local_gas_station</md-icon></div><div class="content"><span class="bold">{{ maps.location.stations.length }}</span> station(s) at this location</div></div><div class="info-entry" ng-show="maps.location.address || (maps.location.latitude && maps.location.longitude)"><div class="icon" title="Address"><md-icon>location_on</md-icon></div><div class="content"><a ng-href="https://www.google.com/maps/dir//{{ maps.location.address }}" target="_blank" ng-click="maps.logDirectionsRequest(maps.location.address, \'ldvAddress\')" class="highlight unlink" property="v:address" ng-show="maps.location.address">{{ maps.location.address }} </a><a ng-href="https://www.google.com/maps/dir//{{ maps.location.latitude + \',\' + maps.location.longitude }}" target="_blank" ng-click="maps.logDirectionsRequest(maps.location.latitude + \',\' + maps.location.longitude, \'ldvCoords\')" class="highlight unlink" typeof="v:Geo" ng-show="!maps.location.address && (maps.location.latitude && maps.location.longitude)"><span property="v:latitude" content="{{ maps.location.latitude }}">{{ maps.location.latitude }}</span>, <span property="v:longitude" content="{{ maps.location.longitude }}">{{ maps.location.longitude }}</span></a></div></div><div class="info-entry" ng-show="maps.location.phone"><div class="icon" title="Phone Number"><md-icon>phone</md-icon></div><div class="content"><a ng-href="tel:{{ maps.location.e164_phone_number ? maps.location.e164_phone_number : maps.location.phone }}" class="highlight unlink" property="v:tel">{{ maps.location.formatted_phone_number ? maps.location.formatted_phone_number : maps.location.phone }}</a></div></div><div class="info-entry" ng-show="maps.location.cost || maps.location.cost_description || maps.location.has_dynamic_pricing"><div class="icon" title="Cost"><md-icon>attach_money</md-icon></div><div class="content"><div ng-if="maps.location.cost">{{ "Payment Required" | translate }}</div><div>{{ maps.location.cost_description }}</div><div class="pricing" ng-click="maps.showStations($event)" ng-show="maps.location.has_dynamic_pricing"><div class="highlight">This location has variable pricing<br>View station level pricing details &rarr;</div></div></div></div><div class="info-entry" ng-show="maps.location.parking_type_name || maps.location.parking_attributes.length"><div class="icon" title="Parking"><md-icon>local_parking</md-icon></div><div class="content"><div class="parking-type">{{ "Parking" | translate }}: {{ maps.location.parking_type_name }}</div><div class="parking-attribute" ng-repeat="parking in maps.location.parking_attributes"><img ng-src="{{ parking | parkingAttributeImageUrl : maps.localization.location_parking_attribute_types | dev }}" class="parking-icon"> {{ parking | parkingAttribute : maps.localization.location_parking_attribute_types | translate }}</div></div></div><div class="info-entry" ng-show="maps.location.parking_level"><div class="icon" title="Parking Level"><md-icon>layers</md-icon></div><div class="content">{{ "Parking Level" | translate }}: {{ maps.location.parking_level }}</div></div><div class="info-entry" ng-show="maps.location.overhead_clearance_meters"><div class="icon" title="Overhead Clearance Meters"><md-icon>present_to_all</md-icon></div><div class="content">{{ "Overhead Clearance" | translate }} <span class="highlight unlink" ng-click="maps.toggleUnits()">{{ maps.metric ? "Meters" : "Feet" | translate }}</span>: {{ maps.metric ? maps.location.overhead_clearance_meters.toFixed(1) : (maps.location.overhead_clearance_meters * 3.28084).toFixed(1) }}</div></div><div class="info-entry" ng-show="maps.location.amenities.length > 0"><div class="icon" title="Amenities"><md-icon>stars</md-icon></div><div class="content"><span ng-repeat="amenity in maps.location.amenities" ng-show="maps.location.amenities.length > 0">{{ maps.getAmenityName(amenity.type) | translate }}{{$last ? \'\' : \', \'}}</span></div></div><div class="info-entry" ng-show="maps.location.promos.length > 0"><div class="icon" title="Promos"><md-icon>local_offer</md-icon></div><div class="content"><div ng-repeat="promo in maps.location.promos" ng-show="maps.location.promos.length > 0">{{ promo.name }}</div></div></div><div class="info-entry" ng-show="maps.location.hours || maps.location.open247"><div class="icon" title="Hours"><md-icon>access_time</md-icon></div><div class="content"><div ng-if="maps.location.open247">{{ "Open 24/7" | translate }}</div><div ng-bind-html="maps.location.hours" ng-show="maps.location.hours"></div></div></div><div class="info-entry" ng-show="maps.location.description"><div class="icon" title="Description"><md-icon>info</md-icon></div><div class="content"><span ng-bind-html="maps.location.description | linky : \'_blank\' : {rel: \'nofollow\'}"></span></div></div><div class="info-entry" ng-if="maps.location.show_pwps" ng-controller="PWPSController"><div class="icon" title="Description"><md-icon>credit_card</md-icon></div><div class="content"><div ng-click="maps.try($event, \'showPWPS\')"><img src="https://assets.plugshare.com/assets/pwps.png" class="pwps" title="Charge now with Pay with PlugShare"></div><div class="pwps-tip">{{ "Charge now with Pay with PlugShare" | translate }}</div><div class="help"><a href="https://help.plugshare.com/hc/en-us/articles/4418950587283-Using-Pay-With-PlugShare-on-PlugShare-com" target="_blank" class="unlink link">{{ "Help" | translate }}</a></div></div></div></div></md-card><md-card id="connectors" ng-if="!embed && !maps.private"><div class="section-title"><span ng-if="maps.location.connectors.length == 1">{{ "Plugs (1 Kind)" | translate }}</span> <span translate="Plugs (Quantity Kinds)" translate-value-quantity="{{ maps.location.connectors.length }}" ng-if="maps.location.connectors.length > 1"></span></div><div class="more" ng-show="maps.location.connectors.length > 0 && maps.location.access != 3"><span ng-click="maps.showStations($event)" ng-controller="StationsController">{{ "More Details" | translate }}</span></div><div class="connector" ng-repeat="connector in maps.location.connectors"><div class="icon"><div class="sprite outlet"><div class="icon-{{ connector.connector | connectorIcon : maps.localization.name }}"></div></div></div><div class="details"><div class="title"><span class="plug-name">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</span> <span class="plug-count">{{ connector.plugCount }} {{ connector.plugCount == 1 ? "Plug" : "Plugs" | translate }}</span> <span class="plug-power" ng-show="connector.kilowatts_string">{{ connector.kilowatts_string }} kW</span> <span class="station-count">{{ connector.stationTypes.length }} {{ connector.stationTypes.length == 1 ? "Station" : "Stations" | translate }}</span></div><div class="plugs"><div class="status-dots"><div class="many" title="{{ connector.numAvailable.length }} Plugs Available" ng-show="connector.numAvailable.length"><md-icon class="available">check_circle</md-icon><span class="num">{{ connector.numAvailable.length }}</span> <span translate="Available" class="status"></span></div><div class="many" title="{{ connector.numInUse.length }} Plugs In Use" ng-show="connector.numInUse.length"><md-icon class="busy">account_circle</md-icon><span class="num">{{ connector.numInUse.length }}</span> <span translate="In Use" class="status"></span></div><div class="many" title="{{ connector.numUnavailable.length }} Plugs Unavailable" ng-show="connector.numUnavailable.length"><md-icon class="unavailable">remove_circle</md-icon><span class="num">{{ connector.numUnavailable.length }}</span> <span translate="Unavailable" class="status"></span></div></div></div><div class="networks"><span ng-show="connector.networks.length > 0">{{ connector.networks | joinBy: \', \' }}</span> <span ng-show="connector.networks.length == 0"><i>{{ "Non-networked" | translate }}</i></span></div></div></div></md-card><md-card id="checkins" ng-if="!maps.private"><div class="section-title"><span ng-if="maps.checkinType == 2">{{ "My Checkins" | translate }}</span> <span ng-if="maps.checkinType == 1">{{ "Checkins" | translate }}</span> ({{ maps.checkinType == 1 ? (maps.location.total_reviews > 50 ? maps.location.total_reviews : maps.location.reviews.length) : maps.location.my_reviews.length }})</div><div class="more" ng-show="!embed"><span ng-click="maps.toggleMyCheckins()" class="toggle" ng-show="maps.user && maps.checkinType == 1">{{ "My Checkins" | translate }} ({{ maps.location.my_reviews.length }})</span> <span ng-click="maps.toggleMyCheckins()" class="toggle" ng-show="maps.user && maps.checkinType == 2">{{ "All Checkins" | translate }} ({{ maps.location.total_reviews > 50 ? maps.location.total_reviews : maps.location.reviews.length }})</span> <span ng-click="maps.showReviews($event)" ng-show="maps.location.reviews.length > 0" ng-controller="ReviewsController">{{ "View More" | translate }}</span></div><div class="checkins"><div class="checkin cta" ng-show="maps.user"><div class="profile"><img ng-src="{{ maps.getProfilePicture() | dev }}" image-error="true"></div><div class="details"><div class="user" ng-show="maps.user.display_name">{{ maps.user.display_name }}</div><div class="prompt">{{ "Leave a Checkin" | translate }}</div></div><div class="options"><div class="option" ng-click="maps.showCheckin($event, \'success\', \'inline\')" title="Successfully Charged"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div><div class="option" ng-click="maps.showCheckin($event, \'error\', \'inline\')" title="Could Not Charge"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></div><div class="option" ng-click="maps.showCheckin($event, \'tip\', \'inline\')" title="Leave a Comment"><i class="fa fa-comment-o" aria-hidden="true"></i></div></div></div><div class="checkin" ng-repeat="checkin in (maps.checkinType == 1 ? maps.location.public_reviews : maps.location.my_reviews) | limitTo: embed ? 3 : 5" ng-class="{broadcast: checkin.id === 0 && checkin.user.display_name == \'Manager\'}"><div class="profile"><img ng-src="{{ checkin.user.photos[0].thumbnail | dev}}" ng-show="checkin.user.photos[0].thumbnail"><img ng-src="{{ maps.user.photos[0].thumbnail | dev }}" ng-show="maps.checkinType == 2 && maps.user.photos[0].thumbnail"><img ng-src="{{ checkin.vehicle_make_profile_image_url }}" ng-show="(maps.checkinType != 2 || !maps.user.photos[0].thumbnail) && !checkin.user.photos[0].thumbnail && checkin.vehicle_make_profile_image_url"><img src="https://assets.plugshare.com/assets/anonymous.jpg" ng-show="(maps.checkinType != 2 || !maps.user.photos[0].thumbnail) && !checkin.user.photos[0].thumbnail && !checkin.vehicle_make_profile_image_url"></div><div class="details"><div class="date">{{ checkin.created_at | date: "MMM d, yyyy" }}</div><div class="user"><md-icon class="success" ng-show="checkin.rating == 1" title="Charge Completed">check_circle</md-icon><md-icon class="fail" ng-show="checkin.rating == -1" title="Error">cancel</md-icon><md-icon class="waiting" ng-show="checkin.waiting == 1" title="Waiting for Charger">access_time</md-icon><md-icon class="message" ng-show="checkin.rating == 0 && checkin.comment" title="Comment">info</md-icon><span ng-show="maps.checkinType == 1">{{ checkin.user.display_name ? checkin.user.display_name : \'PlugSharer\' }}</span> <span ng-show="maps.checkinType == 2">{{ maps.user.display_name }}</span></div><div class="car" ng-show="checkin.vehicle_name">{{ checkin.vehicle_name == \'Other\' ? \'Other Vehicle\' : checkin.vehicle_name }}</div><div translate="Volts" class="volts" ng-show="checkin.volts" translate-value-volts="{{ checkin.volts }}"></div><div translate="Amps" class="amps" ng-show="checkin.amps" translate-value-amps="{{ checkin.amps }}"></div><div translate="Kilowatts" class="kilowatts" ng-show="checkin.kilowatts" translate-value-kilowatts="{{ checkin.kilowatts }}"></div><div class="comment" ng-click="toggle = !toggle" ng-class="{\'basic\' : !toggle && !(checkin.id === 0 && checkin.user.display_name == \'Manager\')}" ng-show="checkin.comment" title="{{ checkin.comment }}">{{ checkin.comment.trim() }}</div><div class="official-response" ng-show="checkin.response && checkin.response.message"><div class="response-date" ng-show="checkin.response.created_at">{{ checkin.response.created_at | date: "MMM d, yyyy" }}</div><div class="response-by" ng-show="checkin.response.title">{{ checkin.response.title }}</div><div class="response-contents" ng-click="toggle = !toggle" ng-class="{\'basic\' : !toggle}" ng-show="checkin.response.message">{{ checkin.response.message }}<span class="edit" ng-show="checkin.response.updated_at && checkin.response.updated_at != checkin.response.created_at" title="Edited on {{ checkin.response.updated_at | date: \'MMM d, yyyy\' }}">(edited)</span></div></div></div></div></div></md-card><md-card id="photos" ng-if="!embed && !maps.private"><div class="section-title">{{ "Photos" | translate }} ({{ maps.location.total_photos > 100 ? maps.location.total_photos : maps.location.photos.length }})</div><div class="more" ng-show="maps.location.photos.length > 0"><span ng-click="maps.showPhotos($event)" ng-controller="PhotosController">{{ "View More" | translate }}</span></div><div class="photos" ng-show="maps.location.photos.length > 0"><div class="photo" ng-repeat="photo in maps.location.photos | limitTo: 3"><a ng-href="{{ photo.url | dev }}" data-lightbox="location-photos" data-title="{{ photo.caption }} ({{ photo.created_at | date: \'MMMM d, yyyy\' }})"><img ng-src="{{ photo.thumbnail | dev }}" class="image uploadable" image-error="true" image-fit></a></div></div><div style="display: hidden" ng-repeat="photo in maps.location.photos" ng-if="$index >= 3"><a ng-href="{{ photo.url | dev }}" data-lightbox="location-photos" data-title="{{ photo.caption }} ({{ photo.created_at | date: \'MMMM d, yyyy\' }})"></a></div><div class="add" ng-click="maps.try($event, \'showUpload\')" ng-show="maps.user && maps.canUpload"><md-icon>add_circle_outline</md-icon><span>{{ "Add Photo" | translate }}</span></div></md-card><md-card id="share" ng-if="!embed"><div class="section-title">{{ "Share Link" | translate }}</div><div class="copy-box"><input type="text" id="copy-link" ng-click="maps.copyLink()" ng-model="maps.copyurl" readonly><div class="note" ng-hide="embed">{{ "You can also copy the link from your browser\'s address bar" | translate }}</div></div></md-card><md-card id="nearby" ng-if="!maps.bot && !embed"><div class="section-title">{{ "Nearby Locations" | translate }}</div><div class="locations"><div class="location" ng-repeat="location in maps.nearby" ng-attr-title="{{ location.display_name }}" ng-click="maps.goToLocationId(location.id)"><div class="sprite marker" ng-mouseover="maps.mapControl.hoverMarkerOn(location.id, \'marker\')" ng-mouseleave="maps.hoverMarkerOff()"><div class="icon-{{ location.icon_type }}"></div></div><div class="details"><div class="distance" ng-if="maps.metric">{{ (location.distance_meters/1000).toFixed(1) }} km</div><div class="distance" ng-if="!maps.metric">{{ location.distance_meters | miles }} mi</div><div class="title"><span class="plugscore" ng-if="location.score" ng-class="{lowscore: location.score < 5}">{{ location.score }}</span> {{ location.display_name }}</div><div class="outlets"><span ng-repeat="connector in location.connectors">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}{{$last ? \'\' : \', \'}}</span></div></div></div></div></md-card><md-card id="cta" ng-click="maps.openLink(\'https://www.plugshare.com/location/\' + maps.location.id, \'embed\')" ng-if="embed"><div class="section-title">{{ "View Photos, Reviews & More" | translate }}</div><div class="visit">Visit PlugShare.com or Download the App</div><img src="https://assets.plugshare.com/assets/plugshare-logo.png" class="logo" alt="PlugShare"></md-card><div id="report-link" ng-if="!embed"><div class="report" ng-click="maps.showReport($event)">{{ "Report a Problem" | translate }}</div></div>'
        ),
        e.put(
          'app/main/templates/activity.tmpl.html',
          '<md-dialog aria-label="Recent Activity" id="activity" class="modal" ng-controller="ActivityController"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Recent Activity" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.activity.loading" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.activity.error">{{ maps.activity.error }}</div><md-dialog-content><div class="md-dialog-content"><div class="settings"><div class="switches"><md-switch class="md-primary" md-no-ink aria-label="" ng-model="maps.activity.locations" ng-change="maps.fetchActivities()">{{ "New Locations" | translate }}</md-switch><md-switch class="md-primary" md-no-ink aria-label="" ng-model="maps.activity.checkins" ng-change="maps.fetchActivities()">{{ "New Checkins" | translate }}</md-switch><md-switch class="md-primary" md-no-ink aria-label="" ng-model="maps.activity.photos" ng-change="maps.fetchActivities()">{{ "New Photos" | translate }}</md-switch></div><md-input-container class="md-block" flex-gt-xs><md-select id="activity-type" ng-model="maps.activity.filter" ng-change="maps.fetchActivities()" aria-label="filter"><md-option value="nearby"><span translate="Nearby Address" translate-value-address="{{ maps.region ? \' (\' + maps.region + \')\' : \'\' }}"></span></md-option><md-option value="bookmarks" ng-show="maps.user">{{ "My Bookmarks" | translate }}</md-option></md-select></md-input-container></div><div class="activities" ng-show="maps.activity.locations || maps.activity.checkins || maps.activity.photos"><div class="activity" ng-repeat="activity in maps.activity.activities" ng-show="maps.activity.activities"><div class="profile"><img ng-src="{{ activity.user.photos[0].thumbnail | dev }}" ng-show="activity.user.photos[0].thumbnail"><img ng-src="{{ activity.vehicle_photo }}" ng-show="!activity.user.photos[0].thumbnail && activity.vehicle_photo"><img src="https://assets.plugshare.com/assets/anonymous.jpg" ng-show="!activity.user.photos[0].thumbnail && !activity.vehicle_photo"></div><div class="details"><div class="date">{{ activity.happened_at | date: "MMM d, yyyy" }}</div><div class="user"><md-icon class="photo" ng-show="activity.action == 1 && activity.type == 3" title="Added Photo">photo</md-icon><md-icon class="success" ng-show="activity.review.rating == 1" title="Charge Completed">check_circle</md-icon><md-icon class="fail" ng-show="activity.review.rating == -1" title="Error">cancel</md-icon><md-icon class="waiting" ng-show="activity.review.waiting == 1" title="Waiting for Charger">access_time</md-icon><md-icon class="message" ng-show="activity.review.waiting == 0 && activity.review.rating == 0 && activity.review.comment" title="Comment">info</md-icon><span class="name">{{ activity.actor.display_name ? activity.actor.display_name : \'PlugSharer\' }}</span></div><div class="location">{{ activity.location.display_area }}</div><div class="action"><span class="problem" ng-show="activity.review.problem">{{ activity.review.problem | problemName }}</span> <span class="description">{{ activity.description | translate }} <span class="target" ng-click="maps.goToLocation(activity.location)">{{ activity.target }}</span></span></div><div class="additional"><span class="comment" ng-show="activity.review.comment">&ldquo;{{ activity.review.comment }}&rdquo;</span> <span class="photo" ng-show="activity.photo.thumbnail"><a ng-href="{{ activity.photo.url | dev }}" data-lightbox="activity" data-title="{{ activity.location.display_name }} ({{ activity.photo.created_at | date: \'MMMM d, yyyy\' }})"><img ng-src="{{ activity.photo.thumbnail | dev }}"></a></span></div></div></div><div class="activity more" ng-show="maps.activity.activities.length"><md-button class="md-primary md-raised" ng-click="maps.fetchActivities(maps.activity.activities[maps.activity.activities.length -1].happened_at)" ng-disabled="maps.activity.loading">{{ "View More" | translate }}</md-button></div></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/authenticate.tmpl.html',
          '<md-dialog aria-label="Authenticate" id="authenticate" class="modal modalv2" ng-class="{default: !maps.auth.mode, verify: maps.auth.mode == \'verify\', social: maps.auth.mode == \'complete\', code: maps.auth.mode == \'code\', linked: maps.auth.mode == \'link\', change: maps.auth.mode == \'request_change\' || maps.auth.mode == \'change_password\' || maps.auth.mode == \'delete_account\', mobileHeight: maps.auth.mode == \'code\'}"><md-progress-linear ng-show="maps.auth.processing" md-mode="indeterminate"></md-progress-linear><md-dialog-content class="authenticate-left"><div class="logo-bottom"><img src="https://assets.plugshare.com/assets/plugshare-web.png"></div><div id="graphic" class="md-dialog-content"><div id="join" ng-show="maps.auth.type == \'register\'" ng-cloak><div class="callout">{{ "Join the largest EV community" | translate }}. {{ "Fast and Free" | translate }}.</div><div class="subtitle">{{ "Exclusive Member Benefits" | translate }}:</div><div class="features"><div class="feature"><div class="icon"><md-icon>person_pin</md-icon></div><div class="description">{{ "Add your voice" | translate }}. {{ "Leave reviews, tips, photos, and more" | translate }}</div></div><div class="feature"><div class="icon"><md-icon>directions_car</md-icon></div><div class="description">{{ "Add your vehicle" | translate }}. {{ "Automatically see only compatible chargers" | translate }}</div></div><div class="feature"><div class="icon"><md-icon>map</md-icon></div><div class="description">{{ "Exclusive access to Trip Planner" | translate }}: {{ "smart routing for long journeys" | translate }}</div></div><div class="feature"><div class="icon"><md-icon>notifications_active</md-icon></div><div class="description">{{ "Alerts when chargers open near you" | translate }} ({{ "app only" | translate }})</div></div><div class="feature"><div class="icon"><md-icon>forum</md-icon></div><div class="description">{{ "Driver to driver messaging" | translate }} ({{ "app only" | translate }})</div></div></div></div><div id="login-trip" ng-show="maps.auth.type == \'login\'" ng-cloak><div class="callout">{{ "Have you tried the PlugShare Trip Planner" | translate }}</div><div class="subtitle">{{ "Plan your next trip with our easy to use tool" | translate }}:</div><div class="features"><div class="feature"><div class="check">✓</div><div class="title">{{ "Focus your search" | translate }}</div><div class="description">{{ "Only show locations along your route" | translate }}</div></div><div class="feature"><div class="check">✓</div><div class="title">{{ "Simple yet flexible" | translate }}</div><div class="description">{{ "Filter to be nearby hotels, restaurants, etc." | translate }}</div></div><div class="feature"><div class="check">✓</div><div class="title">{{ "Elevation Profiles" | translate }}</div><div class="description">{{ "Helps you plan accordingly" | translate }}</div></div><div class="feature"><div class="check">✓</div><div class="title">{{ "Save and load trips" | translate }}</div><div class="description">{{ "Works across devices" | translate }} - {{ "it\'s mobile friendly" | translate }}!</div></div></div><div class="more">{{ "Login or Register Now for Instant Access" | translate }}</div></div></div></md-dialog-content><md-dialog-content class="authenticate-right"><md-button class="close md-icon-button" ng-click="maps.closeAuth()" aria-label="cancel" ng-disabled="maps.auth.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button><div class="md-dialog-content"><form name="maps.authForm" id="auth-form" ng-class="{padbottom: (maps.auth.type == \'register\' && !maps.auth.mode) || (maps.auth.type == \'login\' && maps.auth.mode != \'code\')}" novalidate><md-content class="form-section social-link" ng-if="maps.auth.mode == \'link\'" layout-gt-sm="row" layout-padding><md-input-container class="md-block form-title" flex-gt-xs><h2 class="form-title-text">{{ "Social Sign In" | translate }}</h2></md-input-container><div class="social-linked"><div class="again" translate="account linked" translate-value-social="{{ maps.socialProviderLink }}" translate-value-email="{{ maps.socialEmail }}"></div><div>{{ "Please authenticate below again via Social Sign In to continue" | translate }} ({{ "this is a one time process" | translate }})</div></div><div class="social-container"><div class="methods"><div class="social-signin google" ng-class="{disabled: maps.auth.processing}" ng-click="maps.socialSignIn(\'Google\')" ng-if="maps.socialProviderLink == \'Google\' || !maps.socialProviderLink"><div class="icon-container"><img src="https://assets.plugshare.com/assets/google-icon.png" class="icon"></div><span translate="Continue with" translate-value-social="Google" class="text"></span></div><div class="social-signin apple" ng-class="{disabled: maps.auth.processing}" ng-click="maps.socialSignIn(\'SignInWithApple\')" ng-if="maps.socialProviderLink == \'SignInWithApple\' || !maps.socialProviderLink"><div class="icon-container"><img src="https://assets.plugshare.com/assets/apple-icon.png" class="icon"></div><span translate="Continue with" translate-value-social="Apple" class="text"></span></div></div></div></md-content><md-content class="form-section" ng-if="maps.auth.mode != \'link\'" layout-gt-sm="row" layout-padding><md-input-container class="md-block form-title non-tabs" ng-if="maps.auth.type == \'register\' && !maps.auth.mode" flex-gt-xs><h2 class="form-title-text">{{ "Register" | translate }}</h2></md-input-container><md-input-container class="md-block form-title" ng-if="(maps.auth.type == \'register\' || maps.auth.type == \'change\') && maps.auth.mode == \'verify\'" flex-gt-xs><h2 class="form-title-text">{{ "Confirm your Email" | translate }}</h2></md-input-container><md-input-container class="md-block form-title" ng-if="maps.auth.type == \'register\' && maps.auth.mode == \'complete\'" flex-gt-xs><h2 class="form-title-text">{{ "Complete your profile" | translate }}</h2></md-input-container><md-input-container class="md-block form-title non-tabs" ng-if="maps.auth.type == \'login\'" flex-gt-xs><h2 class="form-title-text">{{ "Login" | translate }}</h2></md-input-container><md-input-container class="md-block form-title tabs" ng-if="!maps.auth.mode" flex-gt-xs><h2 class="form-title-text register" ng-class="{active: maps.auth.type == \'register\' && !maps.auth.mode}" ng-click="maps.showRegister($event)">{{ "Register" | translate }}</h2><h2 class="form-title-text login" ng-class="{active: maps.auth.type == \'login\'}" ng-click="maps.showLogin($event)">{{ "Login" | translate }}</h2></md-input-container><md-input-container class="md-block form-title" ng-if="maps.auth.type == \'change_password\'" flex-gt-xs><h2 class="form-title-text">{{ "Change Password" | translate }}</h2></md-input-container><md-input-container class="md-block form-title" ng-if="maps.auth.type == \'delete_account\'" flex-gt-xs><h2 class="form-title-text">{{ "Delete Account" | translate }}</h2></md-input-container><md-input-container class="md-block form-title" ng-if="maps.auth.type == \'change\' && maps.auth.mode == \'complete\'" flex-gt-xs><h2 class="form-title-text">{{ "Email Successfully Updated" | translate }}</h2></md-input-container><div class="error" ng-show="maps.auth.error" ng-cloak>{{ maps.auth.error | translate }}</div><div class="tip" ng-show="maps.auth.tip" ng-cloak>{{ maps.auth.tip | translate }}</div><div class="mobile-register-header" ng-if="maps.auth.type == \'register\' && !maps.auth.mode">{{ "Joining PlugShare is Fast and Free" | translate }}</div><div class="terms noselect" ng-if="maps.auth.type == \'register\' && !maps.auth.mode"><span class="continuing">{{ "By continuing you agree to our:" | translate }}</span> <a onmousedown="window.open(\'https://company.plugshare.com/privacy.html\',\'_blank\');return false" class="bold-link">{{ "Privacy Policy" | translate }}</a> & <a onmousedown="window.open(\'https://company.plugshare.com/terms.html\',\'_blank\');return false" class="bold-link">{{ "Terms of Use" | translate }}</a></div><div class="social-container" ng-if="!maps.auth.mode && maps.auth.mode != \'code\' && !maps.auth.hideSocial"><div class="methods"><div class="social-signin google" ng-class="{mobileHide: maps.auth.continueWithEmail && maps.auth.type == \'register\', disabled: maps.auth.processing}" ng-click="maps.socialSignIn(\'Google\')" ng-if="!maps.auth.mode"><div class="icon-container"><img src="https://assets.plugshare.com/assets/google-icon.png" class="icon"></div><span translate="Continue with" translate-value-social="Google" class="text"></span></div><div class="social-signin apple" ng-class="{mobileHide: maps.auth.continueWithEmail && maps.auth.type == \'register\', disabled: maps.auth.processing}" ng-click="maps.socialSignIn(\'SignInWithApple\')" ng-if="!maps.auth.mode"><div class="icon-container"><img src="https://assets.plugshare.com/assets/apple-icon.png" class="icon"></div><span translate="Continue with" translate-value-social="Apple" class="text"></span></div><div class="social-signin email" ng-class="{disabled: maps.auth.processing}" ng-click="maps.viewContinueEmail()" ng-if="maps.auth.type == \'register\' && !maps.auth.mode && !maps.auth.continueWithEmail"><div class="icon-container"><md-icon>email</md-icon></div><span translate="Continue with" translate-value-social="{{ \'Email\' | translate }}" class="text"></span></div></div><div class="other-choice" ng-class="{mobileHide: maps.auth.type == \'register\'}"><div class="bar"></div><div class="or">{{ "or continue with email" | translate }}</div></div></div><div class="social-auth" ng-show="maps.auth.type == \'register\' && maps.auth.mode == \'complete\' && maps.socialProvider"><img src="https://assets.plugshare.com/assets/google-icon.png" ng-show="maps.socialProvider == \'Google\'"><img src="https://assets.plugshare.com/assets/apple-icon.png" ng-show="maps.socialProvider == \'SignInWithApple\'"> <span translate="You are authenticated with" translate-value-social="{{ maps.socialProvider }}"></span></div><div class="delete-tip" ng-if="maps.auth.type == \'delete_account\' && !maps.socialProvider">{{ "Please enter your password to delete your account" | translate }}</div><md-input-container class="md-block first" ng-class="{mobileHide: !maps.auth.continueWithEmail}" flex-gt-xs ng-if="maps.auth.type == \'register\'"><label>{{ "Email" | translate }}</label><input type="email" id="email" name="email" ng-model="maps.auth.email" autocomplete="email" ng-disabled="maps.auth.processing || maps.auth.mode" ng-class="{noedit: maps.auth.mode}" required><div ng-messages="maps.authForm.email.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div><div ng-message="email">{{ "This field must be a valid email address" | translate }}</div></div></md-input-container><md-input-container class="md-block" ng-class="{mobileHide: !maps.auth.continueWithEmail}" flex-gt-xs ng-if="maps.auth.type == \'register\' && !maps.auth.mode"><label class="policy">{{ "Password" | translate }}</label><input type="password" name="password" ng-model="maps.auth.password" autocomplete="new-password" ng-keyup="maps.passwordCheck(maps.auth.password, \'authForm\')" ng-blur="maps.passwordHint = false" ng-disabled="maps.auth.processing" required><div ng-messages="maps.authForm.password.$error" class="error-policy" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div><div ng-message="passwordPolicy">{{ "Password Rules" | translate }} <span ng-repeat="policy in maps.localization.password_policy">{{ policy.label | translate }}{{$last ? \'\' : \', \'}}</span>.</div></div><div class="password-hint" ng-show="maps.passwordHint">{{ "Password Rules" | translate }} <span ng-repeat="policy in maps.localization.password_policy">{{ policy.label | translate }}{{$last ? \'\' : \', \'}}</span>.</div></md-input-container><md-input-container class="md-block" flex-gt-xs ng-if="maps.auth.type == \'register\' && maps.auth.mode == \'complete\'"><label>{{ "Display Name" | translate }} ({{ "visible to other users" | translate }})</label><input id="username" type="text" name="display_name" ng-model="maps.auth.display_name" ng-disabled="maps.auth.processing" required><div ng-messages="maps.authForm.display_name.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block small select-space" flex-gt-xs ng-if="maps.auth.type == \'register\' && maps.auth.mode == \'complete\'"><label class="country">{{ "Country" | translate }}</label><md-select name="country_code" ng-model="maps.auth.country_code" ng-change="maps.checkCountry()" ng-disabled="maps.auth.processing" aria-label="country" required><md-option ng-repeat="country in maps.countryList" value="{{ country.code }}">{{ country.name }}</md-option></md-select><div ng-messages="maps.authForm.country_code.$error" class="error-space" role="alert" multiple><div ng-message="required">{{ "Please select your country to localize settings" | translate }}</div></div></md-input-container><md-input-container class="md-block small no-error" flex-gt-xs ng-if="maps.auth.type == \'register\' && maps.auth.mode == \'complete\'"><label><span ng-if="maps.auth.country_code == \'US\'">ZIP Code</span> <span ng-if="maps.auth.country_code != \'US\'">{{ "Postal Code" | translate }}</span> ({{ "optional" | translate }})</label><input type="text" name="auth_zip" ng-model="maps.auth.zip_code" maxlength="12" ng-disabled="maps.auth.processing"></md-input-container><md-input-container class="md-block tighten" flex-gt-xs class="checks" ng-if="maps.auth.type == \'register\' && maps.auth.mode == \'complete\'"><md-checkbox id="offers" ng-model="maps.auth.allow_promo_email" ng-click="maps.promo_email_touched = true" ng-disabled="maps.auth.processing" class="noselect"><span class="noselect">{{ "Receive special offers directly from PlugShare" | translate }}</span></md-checkbox></md-input-container><md-input-container class="md-block first no-error" flex-gt-xs ng-if="maps.auth.mode == \'request_change\'"><label>{{ "Current Email" | translate }}</label><input type="email" id="email" name="email" ng-model="maps.user.email" disabled></md-input-container><md-input-container class="md-block first no-error" flex-gt-xs ng-if="maps.auth.type == \'login\'"><label>{{ "Email" | translate }}</label><input type="email" id="email" name="email" ng-model="maps.auth.email" autocomplete="email" ng-disabled="maps.auth.processing" required><div ng-messages="maps.authForm.email.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div><div ng-message="email">{{ "This field must be a valid email address" | translate }}</div></div></md-input-container><md-input-container class="md-block no-error" flex-gt-xs ng-if="maps.auth.type == \'login\' || maps.auth.mode == \'request_change\' || (maps.auth.type == \'delete_account\' && !maps.socialProvider)"><label>{{ "Password" | translate }}</label><div class="forgot bold-link" ng-click="maps.showForgotPassword($event)" ng-class="{disabled: maps.auth.processing}" ng-if="maps.auth.type == \'login\'" tabindex="-1">{{ "Forgot Password" | translate }}</div><input type="password" name="password" ng-model="maps.auth.password" autocomplete="current-password" ng-disabled="maps.auth.processing" required><div ng-messages="maps.authForm.password.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block first no-error" flex-gt-xs ng-if="maps.auth.type == \'change\'"><label>{{ "New Email" | translate }}</label><input type="email" id="new_email" name="new_email" ng-model="maps.auth.new_email" ng-class="{black: maps.auth.type == \'change\' && maps.auth.mode == \'complete\'}" autocomplete="new-email" ng-disabled="maps.auth.processing || maps.auth.mode != \'request_change\'" required><div ng-messages="maps.authForm.new_email.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div><div ng-message="email">{{ "This field must be a valid email address" | translate }}</div></div></md-input-container><md-input-container class="md-block responsive" ng-class="{first: maps.auth.mode == \'code\'}" flex-gt-xs ng-if="maps.auth.mode == \'verify\' || maps.auth.mode == \'code\'"><label>{{ "Verification Code" | translate }}</label><input id="verificationCode" type="text" name="verificationCode" ng-model="maps.auth.verificationCode" ng-change="maps.verificationCodeCheck()" ng-disabled="maps.auth.processing || maps.auth.mode == \'code\'" ng-required="(maps.auth.type == \'register\' || maps.auth.type == \'change\') && maps.auth.mode == \'verify\' && maps.auth.mode == \'code\'"><div ng-messages="maps.authForm.verificationCode.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block" flex-gt-xs ng-if="maps.auth.type == \'change_password\'" style="margin-top: 20px"><label class="policy">{{ "Current Password" | translate }}</label><input type="password" name="current_password" ng-model="maps.auth.current_password" autocomplete="password" ng-disabled="maps.auth.processing" required><div ng-messages="maps.authForm.current_password.$error" class="error-policy" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block" flex-gt-xs ng-if="maps.auth.type == \'change_password\'"><label class="policy">{{ "New Password" | translate }}</label><input type="password" name="new_password" ng-model="maps.auth.new_password" autocomplete="new-password" ng-keyup="maps.passwordCheck(maps.auth.new_password, \'passForm\')" ng-blur="maps.passwordHint = false" ng-disabled="maps.auth.processing" required><div ng-messages="maps.authForm.new_password.$error" class="error-policy" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div><div ng-message="passwordPolicy">{{ "Password Rules" | translate }} <span ng-repeat="policy in maps.localization.password_policy">{{ policy.label | translate }}{{$last ? \'\' : \', \'}}</span>.</div></div><div class="password-hint" ng-show="maps.passwordHint">{{ "Password Rules" | translate }} <span ng-repeat="policy in maps.localization.password_policy">{{ policy.label | translate }}{{$last ? \'\' : \', \'}}</span>.</div></md-input-container><md-input-container class="md-block tighten" flex-gt-xs class="checks" ng-if="maps.auth.type == \'delete_account\' && maps.socialProvider"><md-checkbox ng-model="maps.auth.social_delete_verify" ng-disabled="maps.auth.processing" class="noselect" required><span class="noselect">{{ "I understand deleting my PlugShare account cannot be undone" | translate }}</span></md-checkbox></md-input-container><div class="auth-actions"><md-button type="submit" class="md-primary md-raised" ng-class="{incomplete: !maps.auth.email || !maps.auth.password, mobileHide: !maps.auth.continueWithEmail}" ng-click="maps.submitRegister()" aria-label="submit" ng-disabled="maps.auth.processing" ng-if="maps.auth.type == \'register\' && !maps.auth.mode">{{ "Create Account" | translate }}</md-button><md-button type="submit" class="md-primary md-raised" ng-class="{incomplete: !maps.auth.verificationCode}" ng-click="maps.verifyEmail()" aria-label="submit" ng-disabled="maps.auth.processing" ng-if="(maps.auth.type == \'register\' || maps.auth.type == \'change\') && maps.auth.mode == \'verify\'"><span>{{ "Verify" | translate }}</span></md-button><md-button type="submit" class="md-primary md-raised" ng-class="{incomplete: !maps.auth.display_name || !maps.auth.country_code}" ng-click="maps.completeRegister()" aria-label="submit" ng-disabled="maps.auth.processing" ng-if="maps.auth.type == \'register\' && maps.auth.mode == \'complete\'"><span>{{ "Complete" | translate }}</span></md-button><md-button type="submit" class="md-primary md-raised" ng-class="{incomplete: !maps.auth.new_email || !maps.auth.password || maps.user.email == maps.auth.new_email}" ng-click="maps.submitChangeEmail()" aria-label="submit" ng-disabled="maps.auth.processing || maps.user.email == maps.auth.new_email" ng-if="maps.auth.type == \'change\' && maps.auth.mode == \'request_change\'"><span>{{ "Change Email" | translate }}</span></md-button><md-button type="submit" class="md-primary md-raised" ng-class="{incomplete: !maps.auth.current_password || !maps.auth.new_password}" ng-click="maps.submitChangePassword()" aria-label="submit" ng-disabled="maps.auth.processing" ng-if="maps.auth.type == \'change_password\'"><span>{{ "Change Password" | translate }}</span></md-button><md-button type="submit" class="md-primary md-raised" ng-class="{incomplete: (!maps.auth.password && !maps.socialProvider) || (maps.socialProvider && !maps.auth.social_delete_verify)}" ng-click="maps.submitDeleteAccount()" aria-label="submit" ng-disabled="maps.auth.processing" ng-if="maps.auth.type == \'delete_account\'"><span>{{ "Delete Account" | translate }}</span></md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.cancel()" aria-label="submit" ng-disabled="maps.auth.processing" ng-if="maps.auth.type == \'change\' && maps.auth.mode == \'complete\'"><span>{{ "Done" | translate }}</span></md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.submitLogin()" aria-label="submit" ng-disabled="maps.auth.processing" ng-if="maps.auth.type == \'login\'">{{ "Login" | translate }}</md-button></div><div class="alternatives tighten" ng-show="(maps.auth.type == \'register\' || maps.auth.type == \'change\') && maps.auth.mode == \'verify\'">{{ "Didn\'t get the email" | translate }} <span class="bold-link" ng-click="maps.resendConfirmationCode()" ng-disabled="maps.auth.processing">{{ "Resend Verification Code" | translate }}</span></div><div class="mobile-benefits" ng-if="maps.auth.type == \'register\' && !maps.auth.mode"><div class="exclusive">{{ "Exclusive Member Benefits" | translate }}:</div><div class="features"><div class="feature"><div class="icon"><md-icon style="color: #dc9004">person_pin</md-icon></div><div class="description">{{ "Add your voice" | translate }}. {{ "Leave reviews, tips, photos, and more" | translate }}</div></div><div class="feature"><div class="icon"><md-icon style="color: #189e18">directions_car</md-icon></div><div class="description">{{ "Add your vehicle" | translate }}. {{ "Automatically see only compatible chargers" | translate }}</div></div><div class="feature"><div class="icon"><md-icon style="color: #3164d2">map</md-icon></div><div class="description">{{ "Exclusive access to Trip Planner" | translate }}: {{ "smart routing for long journeys" | translate }}</div></div><div class="feature"><div class="icon"><md-icon style="color: #c1c107">notifications_active</md-icon></div><div class="description">{{ "Alerts when chargers open near you" | translate }} <span class="apponly">({{ "app only" | translate }})</span></div></div><div class="feature"><div class="icon"><md-icon style="color: #d86161">forum</md-icon></div><div class="description">{{ "Driver to driver messaging" | translate }} <span class="apponly">({{ "app only" | translate }})</span></div></div></div></div></md-content></form></div><div class="switch-view" ng-if="maps.auth.type == \'register\' && !maps.auth.mode"><div class="clickable" ng-click="maps.showLogin($event)" ng-class="{disabled: maps.auth.processing}">{{ "Already have an account" | translate }} <span class="bold-link">{{ "Login" | translate }}</span></div></div><div class="switch-view" ng-if="maps.auth.type == \'login\' && maps.auth.mode != \'code\'"><div class="clickable" ng-click="maps.showRegister($event)" ng-class="{disabled: maps.auth.processing}">{{ "New to PlugShare" | translate }} <span class="bold-link">{{ "Register" | translate }}</span></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/changelog.tmpl.html',
          '<md-dialog aria-label="Changes" id="changes" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "What\'s New" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.changes.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><div class="entry"><div class="date">April 5, 2021</div><ul class="content"><li><div class="title">Recently Viewed and My Activity</div><div class="notes">Users can now access their recently viewed locations and recent activity in their profile.</div></li></ul></div><div class="entry"><div class="date">January 26, 2021</div><ul class="content"><li><div class="title">Pay with PlugShare added to PlugShare.com Website</div><div class="notes">PWPS is now available (limited networks, US and Germany) via the website. Users can pay and activate chargers directly on the website by viewing a location and clicking the PWPS banner. More details <a href="https://help.plugshare.com/hc/en-us/articles/4418950587283-Using-Pay-With-PlugShare-on-PlugShare-com" target="_blank">here</a>.</div></li></ul></div><div class="entry"><div class="date">July 22, 2020</div><ul class="content"><li><div class="title">Updated Security Policy & Social Sign In</div><div class="notes">In this release we made security improvements and added the ability to Sign in with Apple and Google. Existing users will need to sign in again.<br>If you have any questions or feedback, please e-mail us at <a href="mailto:info@plugshare.com">info@plugshare.com</a>.</div></li></ul></div><div class="entry"><div class="date">September 9, 2019</div><ul class="content"><li><div class="title">Multi Vehicle Support</div><div class="notes">Users can now add up to 4 vehicles. Click on <span class="shortcut" ng-click="maps.addVehicle($event, true, maps.activeVehicleIndex)">Manage Vehicles &rarr; Add New</span>. Your plug filter settings will be saved to your vehicle as you switch between vehicles for easily accessible presets.</div></li><li><div class="title">Power Filters</div><div class="notes">We have added the widely anticipated Power Filters! To use it, enable a level 3 plug type (CCS, CHAdeMO, or Supercharger). This filter is currently only available in North America. We will continue rolling this out to other regions as we obtain and fill out power data information for charging stations around the world.</div></li><li><div class="title">Added support for new languages</div><div class="notes">We now support 26 languages! Click on the two letter language code at the top or go to your <span class="shortcut" ng-click="maps.showSettings()">settings</span> to change your language. Feel free to send us feedback for translation corrections and improvements.</div></li></ul></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/checkin.tmpl.html',
          '<md-dialog aria-label="Checkin" id="checkin" class="modal modalv2"><md-progress-linear ng-show="maps.checkin.processing" md-mode="indeterminate"></md-progress-linear><md-dialog-content><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.checkin.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button><div class="md-dialog-content"><md-input-container class="md-block form-title fancy-header" flex-gt-xs><div class="top-background"></div><div class="fancy-title">{{ "Check In" | translate }}</div></md-input-container><div class="error" ng-show="maps.checkin.error">{{ maps.checkin.error }}</div><form name="maps.checkinForm" id="checkin-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><md-radio-group class="checkin-type" ng-model="maps.checkin.type" ng-disabled="maps.checkin.processing"><md-radio-button value="success" class="md-primary success"><md-icon>battery_charging_full</md-icon>{{ "Successfully Charged" | translate }}</md-radio-button><md-radio-button value="error" class="md-primary fail"><md-icon>battery_alert</md-icon>{{ "Could Not Charge" | translate }}</md-radio-button><md-radio-button value="tip" class="md-primary comment"><md-icon>comment</md-icon>{{ "Leave A Comment" | translate }}</md-radio-button></md-radio-group><md-input-container class="md-block" flex-gt-xs><label>{{ "Comment" | translate }}</label><textarea name="comment" ng-model="maps.checkin.comment" md-maxlength="5000" ng-disabled="maps.checkin.processing" ng-required="maps.checkin.type == \'error\' || maps.checkin.type == \'tip\'" md-select-on-focus></textarea><div ng-messages="maps.checkinForm.comment.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block station-name" flex-gt-xs ng-show="maps.location.stations.length > 1 && maps.checkin.stationNames.length"><label>{{ "Station Name" | translate }}</label><md-select name="stationId" ng-model="maps.checkin.stationId" ng-disabled="maps.checkin.processing"><md-option ng-repeat="station in maps.checkin.stationNames" value="{{ station.id }}">{{ station.name }}</md-option><md-option ng-repeat="station in maps.checkin.stationOthers" value="{{ station.id }}">{{ station.name }}</md-option></md-select></md-input-container><md-input-container class="md-block" flex-gt-xs ng-show="maps.checkin.type == \'error\'"><label>{{ "Select A Problem" | translate }}</label><md-select ng-model="maps.checkin.problem" ng-disabled="maps.checkin.processing"><md-option value="3">{{ "Blocked By Vehicle" | translate }}</md-option><md-option value="1">{{ "All Stations Broken" | translate }}</md-option><md-option value="2">{{ "In Use" | translate }}</md-option><md-option value="4">{{ "Could Not Activate" | translate }}</md-option><md-option value="5">{{ "Closed Permanently" | translate }}</md-option></md-select></md-input-container><div id="vehicle" ng-if="maps.user.vehicles.length > 1"><label>Checkin Vehicle</label><div class="vehicles"><md-radio-group ng-model="maps.checkin.vehicle" ng-change="maps.checkinCheck()" ng-disabled="maps.checkin.processing"><md-radio-button value="{{ $index }}" class="md-primary" ng-repeat="vehicle in maps.user.vehicles track by $index" ng-if="vehicle.display_name">{{ vehicle.display_name }}</md-radio-button></md-radio-group></div></div><div id="connector" ng-show="maps.location.connectors.length > 1 && (maps.checkin.type == \'charging\' || maps.checkin.type == \'success\' || maps.checkin.type == \'error\')"><label>{{ "Plug" | translate }}</label><div class="connectors"><div class="connector" ng-repeat="connector in maps.location.connectors"><input type="radio" id="connector{{ connector.connector }}" ng-model="maps.checkin.connector_type" value="{{ connector.connector }}" ng-disabled="maps.checkin.processing"><label for="connector{{ connector.connector }}" ng-class="{disable: maps.checkin.processing}"><div class="sprite outlet center"><div class="icon-{{ connector.connector | connectorIcon : maps.localization.name }}"></div></div><div class="name">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</div></label></div></div></div><md-input-container class="md-block responsive small notop" flex-gt-xs ng-if="(maps.checkin.type == \'charging\' || maps.checkin.type == \'success\') && !maps.checkin.power"><label>{{ "Max Amps" | translate }}</label><input name="amps" type="number" min="0" max="500" ng-model="maps.checkin.amps" ng-required="maps.checkin.volts" ng-disabled="maps.checkin.processing"><div ng-messages="maps.checkinForm.amps.$error" role="alert" multiple><div ng-message="min"><span translate="Minimum value is XX" translate-value-number="0"></span></div><div ng-message="max"><span translate="Maximum value is XX" translate-value-number="500"></span></div></div></md-input-container><md-input-container class="md-block responsive small notop" flex-gt-xs ng-if="(maps.checkin.type == \'charging\' || maps.checkin.type == \'success\') && !maps.checkin.power"><label>{{ "Max Volts" | translate }}</label><input name="volts" type="number" min="0" max="500" ng-model="maps.checkin.volts" ng-required="maps.checkin.amps" ng-disabled="maps.checkin.processing"><div ng-messages="maps.checkinForm.volts.$error" role="alert" multiple><div ng-message="min"><span translate="Minimum value is XX" translate-value-number="0"></span></div><div ng-message="max"><span translate="Maximum value is XX" translate-value-number="500"></span></div></div></md-input-container><md-input-container class="md-block notop" flex-gt-xs ng-if="(maps.checkin.type == \'charging\' || maps.checkin.type == \'success\') && maps.checkin.power"><label>{{ "Max Kilowatts" | translate }}</label><input name="kilowatts" type="number" min="0" max="750" ng-model="maps.checkin.kilowatts" ng-disabled="maps.checkin.processing"><div ng-messages="maps.checkinForm.kilowatts.$error" role="alert" multiple><div ng-message="min"><span translate="Minimum value is XX" translate-value-number="0"></span></div><div ng-message="max"><span translate="Maximum value is XX" translate-value-number="750"></span></div></div></md-input-container><div class="center-switch"><div class="switch" ng-click="maps.switchCheckinUnits()" ng-if="(maps.checkin.type == \'charging\' || maps.checkin.type == \'success\')"><span ng-show="maps.checkin.power">{{ "Switch to Amps & Volts" | translate }}</span> <span ng-show="!maps.checkin.power">{{ "Switch to Kilowatts" | translate }}</span></div></div></md-content></form></div></md-dialog-content><div class="floating-submit" ng-show="!maps.checkin.complete"><md-button type="submit" id="submit-checkin" class="md-primary md-raised" ng-click="maps.submitCheckin($event)" ng-disabled="maps.checkin.processing">{{ "Check In" | translate }}</md-button></div></md-dialog>'
        ),
        e.put(
          'app/main/templates/contribute.html',
          '<md-dialog aria-label="Checkin" id="checkin" class="modal modalv2"><md-progress-linear ng-show="maps.checkin.processing" md-mode="indeterminate"></md-progress-linear><md-dialog-content><div class="error" ng-show="maps.checkin.error">{{ maps.checkin.error }}</div><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.checkin.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button><div class="md-dialog-content"><div id="checkin-success"><md-input-container class="md-block form-title" flex-gt-xs><div class="form-title-text">{{ "Check In" | translate }}</div></md-input-container><div class="location-name">{{ maps.location.name }}</div><div class="logo"><img src="https://s3.amazonaws.com/plugshare.production.assets/assets/plugshare.png"></div><div class="success">Check In Success</div><div class="count">This is your 1st checkin here</div><div class="question"><div class="contribute">Help the EV Community</div><div class="prompt">Are there restaurants nearby? (walking distance)</div><div class="answers"><md-radio-group ng-model="maps.checkin.answer" ng-disabled="maps.checkin.processing"><md-radio-button value="1" class="md-primary"><md-icon>check_circle</md-icon>{{ "Yes" | translate }}</md-radio-button><md-radio-button value="-1" class="md-primary"><md-icon>cancel</md-icon>{{ "No" | translate }}</md-radio-button><md-radio-button value="0" class="md-primary"><md-icon>help</md-icon>{{ "Not Sure" | translate }}</md-radio-button></md-radio-group></div></div><md-button type="submit" class="md-primary md-raised done" ng-click="maps.cancel()" ng-disabled="maps.checkin.processing">{{ "Done" | translate }}</md-button></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/contribute.tmpl.html',
          '<md-dialog aria-label="Contribute" id="contribute" class="modal modalv2"><md-progress-linear ng-show="maps.contribute.processing" md-mode="indeterminate"></md-progress-linear><div id="confetti" class="confetti" ng-class="{replay: maps.contribute.replay}" ng-show="maps.contribute.checkin"></div><md-dialog-content><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.contribute.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button><div class="md-dialog-content" ng-class="{checkinmode: maps.contribute.checkin}"><md-input-container class="md-block form-title fancy-header" flex-gt-xs ng-class="{checkinmode: maps.contribute.checkin}"><div class="top-background" ng-class="{checkinmode: maps.contribute.checkin}"></div><div class="fancy-title" ng-class="{checkinmode: maps.contribute.checkin}">{{ maps.contribute.checkin ? "Checkin Success" : "Contribute Feedback" | translate }}</div></md-input-container><div class="error" ng-show="maps.contribute.error">{{ maps.contribute.error }}</div><div class="checkin" ng-show="maps.contribute.checkin"><div class="logo"><div class="logo-bounce"><div class="logo-container"><img src="https://s3.amazonaws.com/plugshare.production.assets/assets/plugshare.png" ng-click="maps.playConfetti()"></div></div></div><div class="location"><div class="location-name"><md-icon>place</md-icon>{{ maps.location.name }}</div><div class="count">This is your 1st checkin here</div></div></div><div class="zigzag" ng-show="maps.contribute.checkin"></div><div class="question" ng-class="{nocheckin: !maps.contribute.checkin, checkinmode: maps.contribute.checkin}"><div class="contribute">Help the EV Community</div><div class="single-question" ng-class="{fadeIn: !maps.contribute.processing, fadeOut: maps.contribute.processing}" ng-show="maps.contributeQuestions[maps.contribute.question]"><div class="prompt">{{ maps.contributeQuestions[maps.contribute.question].question }}</div><div class="answers" ng-show="!maps.contribute.more"><md-radio-group ng-model="maps.contribute.answer" ng-click="maps.contributeAnswer()" ng-disabled="maps.contribute.processing"><md-radio-button value="{{ $index }}" class="md-primary" ng-repeat="answer in maps.contributeQuestions[maps.contribute.question].answers track by $index">{{ answer }}</md-radio-button></md-radio-group></div><div class="choices" ng-show="maps.contribute.more"><md-radio-group ng-model="maps.contribute.answer" ng-click="maps.contributeAnswer()" ng-disabled="maps.contribute.processing"><md-radio-button value="11" class="md-primary">{{ "It depends" | translate }}</md-radio-button><md-radio-button value="12" class="md-primary">{{ "Question is unclear" | translate }}</md-radio-button><md-radio-button value="13" class="md-primary">{{ "Does not apply" | translate }}</md-radio-button></md-radio-group></div><div class="more" ng-click="maps.contribute.more = !maps.contribute.more">{{ maps.contribute.more ? \'Back\' : \'More Choices\' }}</div><div class="skip" ng-click="maps.nextQuestion()" ng-show="maps.contribute.more">Skip Question</div></div><div class="no-more-questions" ng-class="{checkinmode: maps.contribute.checkin}" ng-show="!maps.contributeQuestions[maps.contribute.question]"><div class="prompt">Thanks for the Feedback!</div></div></div><div class="zigzag nomargin" ng-show="maps.contribute.checkin"></div></div></md-dialog-content><div class="floating-submit" ng-show="maps.contribute.checkin || !maps.contributeQuestions[maps.contribute.question]"><md-button type="submit" class="md-primary md-raised" ng-click="maps.cancel()" ng-disabled="maps.contribute.processing">{{ "Done" | translate }}</md-button></div></md-dialog>'
        ),
        e.put(
          'app/main/templates/cookies.tmpl.html',
          '<md-dialog aria-label="Cookies" id="cookies" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Cookie Settings" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.cookieManagement.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.cookieManagement.processing" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.cookieManagement.error">{{ maps.cookieManagement.error }}</div><md-dialog-content><div class="md-dialog-content"><form name="maps.cookieManagementForm" id="cookies-form" novalidate><md-content class="form-section" layout-gt-sm="row"><div class="bold">{{ "This website uses cookies" | translate }}</div><div class="description">{{ "Cookie Explanation" | translate }}</div><div class="links"><a href="https://company.plugshare.com/cookies.html" target="_blank">{{ "Click here" | translate }}</a> {{ "Cookie Links" | translate | translateCut : 2 }} <a href="https://company.plugshare.com/cookies-list.html" target="_blank">{{ "Click here" | translate }}</a> {{ "Cookie Links" | translate | translateCut : 4 }}</div><div class="consent"><md-switch class="md-primary" ng-model="maps.cookieManagement.essential" ng-click="maps.cookieManagement.error = \'Essential cookies cannot be deselected. These cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.\'" style="opacity: 0.6" aria-label="Essential Cookies" disabled>{{ "Essential" | translate }}</md-switch><md-switch class="md-primary" ng-model="maps.cookieManagement.analytical" ng-click="maps.cookieManagement.error = \'\'" aria-label="Analytical Cookies">{{ "Analytical" | translate }}</md-switch><md-switch class="md-primary" ng-model="maps.cookieManagement.marketing" ng-click="maps.cookieManagement.error = \'\'" aria-label="Marketing Cookies">{{ "Marketing" | translate }}</md-switch></div><div class="update">{{ "You can update your cookie settings anytime in this menu" | translate }} ({{ "Settings" | translate }} &rarr; {{ "Cookie Settings" | translate }})</div><div class="actions"><md-button ng-click="maps.acceptCookies()">{{ "Accept" | translate }}</md-button><md-button class="md-primary md-raised" ng-click="maps.acceptAllCookies(\'modal\')">{{ "Accept All" | translate }}</md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/elevation.tmpl.html',
          '<md-dialog aria-label="Elevation" id="elevation" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Elevation Data" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><md-content class="form-section" layout-gt-sm="row" layout-padding><div id="chart"></div></md-content></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/feedback.tmpl.html',
          '<md-dialog aria-label="Feedback" id="feedback" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2 class="feedback-title">{{ "Valuable User\'s Feedback" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.feedback.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.feedback.processing" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.feedback.error">{{ maps.feedback.error }}</div><md-dialog-content><div class="md-dialog-content"><form name="maps.feedbackForm" id="feedback-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><div class="thankyou"><p>{{ "Thank you for using the new PlugShare Web App" | translate }}</p><p>{{ "Thank you for choosing PlugShare" | translate }}</p><p><b>-{{ "The PlugShare Team" | translate }}</b></p><p><a href="https://www.facebook.com/groups/703166503219204/" target="_blank">{{ "Facebook Discussion Group" | translate }}</a></p></div><md-radio-group ng-model="maps.feedback.type" ng-disabled="maps.feedback.processing"><md-radio-button value="general" class="md-primary">{{ "General Feedback" | translate }}</md-radio-button><md-radio-button value="bug" class="md-primary">{{ "Bug Report" | translate }}</md-radio-button><md-radio-button value="suggestion" class="md-primary">{{ "Feature Suggestion" | translate }}</md-radio-button><md-radio-button value="location" class="md-primary">{{ "Location Inaccuracy" | translate }}</md-radio-button></md-radio-group><md-input-container class="md-block" flex-gt-xs ng-show="!maps.user.email"><label>{{ "Email" | translate }}</label><input type="text" name="email" ng-model="maps.feedback.email" ng-required="!maps.user.email" ng-disabled="maps.feedback.processing"><div ng-messages="maps.feedbackForm.email.$error" role="alert" multiple><div ng-message="required">{{ "Please provide us with an email to respond to" | translate }}</div></div></md-input-container><md-input-container class="md-block not-required" flex-gt-xs><label>{{ "Please share some details" | translate }}</label><textarea name="message" ng-model="maps.feedback.message" ng-disabled="maps.feedback.processing" md-select-on-focus required></textarea><div ng-messages="maps.feedbackForm.message.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a message" | translate }}</div></div></md-input-container><div class="max">{{ "Have a screenshot to show us" | translate }} ({{ "optional" | translate }}) - {{ "Max size" | translate }} 20MB {{ "Total" | translate }}</div><md-input-container class="file-block md-block" flex-gt-xs><label for="photo_upload1" class="uploader md-button md-raised md-primary md-container-ignore" ng-disabled="maps.feedback.processing">{{ "Select File" | translate }}</label><label for="photo_upload1" class="md-container-ignore"><div class="file-name">{{ maps.feedback.fileName1 ? maps.feedback.fileName1 : \'jpg, png, gif\' }}</div></label><input type="file" name="photo1" id="photo_upload1" size="20" accept="image/*" ng-disabled="maps.feedback.processing" class="ng-hide" aria-label="photo" onchange="angular.element(this).scope().maps.uploadChange(\'feedback\', this, 1)"> <img id="attachment1" src="" class="image-preview" ng-show="maps.feedback.fileName1"> <button class="md-button" ng-click="maps.clearUpload(\'feedback\', 1)" ng-show="maps.feedback.fileName1 && !maps.feedback.processing" ng-disabled="maps.feedback.processing">remove</button></md-input-container><md-input-container class="file-block md-block" flex-gt-xs><label for="photo_upload2" class="uploader md-button md-raised md-primary md-container-ignore" ng-disabled="maps.feedback.processing">{{ "Select File" | translate }}</label><label for="photo_upload2" class="md-container-ignore"><div class="file-name">{{ maps.feedback.fileName2 ? maps.feedback.fileName2 : \'jpg, png, gif\' }}</div></label><input type="file" name="photo2" id="photo_upload2" size="20" accept="image/*" ng-disabled="maps.feedback.processing" class="ng-hide" aria-label="photo" onchange="angular.element(this).scope().maps.uploadChange(\'feedback\', this, 2)"> <img id="attachment2" src="" class="image-preview" ng-show="maps.feedback.fileName2"> <button class="md-button" ng-click="maps.clearUpload(\'feedback\', 2)" ng-show="maps.feedback.fileName2 && !maps.feedback.processing" ng-disabled="maps.feedback.processing">remove</button></md-input-container><md-input-container class="file-block md-block" flex-gt-xs><label for="photo_upload3" class="uploader md-button md-raised md-primary md-container-ignore" ng-disabled="maps.feedback.processing">{{ "Select File" | translate }}</label><label for="photo_upload3" class="md-container-ignore"><div class="file-name">{{ maps.feedback.fileName3 ? maps.feedback.fileName3 : \'jpg, png, gif\' }}</div></label><input type="file" name="photo3" id="photo_upload3" size="20" accept="image/*" ng-disabled="maps.feedback.processing" class="ng-hide" aria-label="photo" onchange="angular.element(this).scope().maps.uploadChange(\'feedback\', this, 3)"> <img id="attachment3" src="" class="image-preview" ng-show="maps.feedback.fileName3"> <button class="md-button" ng-click="maps.clearUpload(\'feedback\', 3)" ng-show="maps.feedback.fileName3 && !maps.feedback.processing" ng-disabled="maps.feedback.processing">remove</button></md-input-container><div class="mobile-warning" ng-show="maps.mobile && maps.feedback.uploadSize > 3000000 && maps.feedback.processing">{{ Math.round(maps.feedback.uploadSize/1000000) }}MB total. Upload could take a while on mobile connections, please wait..</div><div class="actions"><md-button class="md-raised" ng-click="maps.cancel()" ng-disabled="maps.feedback.processing">{{ "Cancel" | translate }}</md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.submitFeedback()" ng-disabled="maps.feedback.processing">{{ "Submit Feedback" | translate }}</md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/forgot.tmpl.html',
          '<md-dialog aria-label="Forgot Password" id="forgot" class="modal" md-is-locked-open="true"><md-toolbar><div class="md-toolbar-tools"><h2 ng-if="!maps.forgot.reset">{{ "Forgot Password" | translate }}</h2><h2 ng-if="maps.forgot.reset">{{ "Reset Password" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.forgot.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.forgot.processing" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.forgot.error">{{ maps.forgot.error }}</div><div class="tip" ng-show="maps.forgot.tip">{{ maps.forgot.tip }}</div><md-dialog-content><div class="md-dialog-content"><form name="maps.forgotForm" id="forgot-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><md-input-container class="md-block" flex-gt-xs><label>{{ "Email" | translate }}</label><input id="forgotEmail" type="email" name="email" ng-model="maps.forgot.email" autocomplete="email" ng-disabled="maps.forgot.processing || maps.forgot.reset" required><div ng-messages="maps.forgotForm.email.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div><div ng-message="email">{{ "This field must be a valid email address" | translate }}</div></div></md-input-container><md-input-container class="md-block" flex-gt-xs ng-if="maps.forgot.reset"><label>{{ "Code" | translate }}</label><input id="verificationCode" type="text" name="verificationCode" ng-model="maps.forgot.verificationCode" maxlength="6" ng-disabled="maps.forgot.processing" ng-required="maps.forgot.reset"><div ng-messages="maps.forgotForm.verificationCode.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block" flex-gt-xs ng-if="maps.forgot.reset"><label>{{ "New Password" | translate }}</label><input id="newPassword" type="password" name="newPassword" ng-model="maps.forgot.newPassword" autocomplete="new-password" ng-keyup="maps.passwordCheck(maps.forgot.newPassword, \'forgotForm\')" ng-blur="maps.passwordHint = false" ng-disabled="maps.forgot.processing" ng-required="maps.forgot.reset"><div ng-messages="maps.forgotForm.newPassword.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div><div ng-message="passwordPolicy">{{ "Password Rules" | translate }} <span ng-repeat="policy in maps.localization.password_policy">{{ policy.label | translate }}{{$last ? \'\' : \', \'}}</span>.</div></div><div class="password-hint" ng-show="maps.passwordHint">{{ "Password Rules" | translate }} <span ng-repeat="policy in maps.localization.password_policy">{{ policy.label | translate }}{{$last ? \'\' : \', \'}}</span>.</div></md-input-container><div class="actions"><md-button class="md-raised" ng-click="maps.cancel()" ng-disabled="maps.forgot.processing">{{ "Cancel" | translate }}</md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.cognitoForgotPassword()" ng-disabled="maps.forgot.processing || (maps.forgot.reset && (!maps.forgot.verificationCode || !maps.forgot.newPassword))">{{ "Submit" | translate }}</md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/iframe.tmpl.html',
          '<md-dialog aria-label="Iframe" id="iframe" class="modal modalv2"><md-toolbar class="mobile-close"><div class="md-toolbar-tools"><h2>Pricing Details</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.showStations()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><md-button class="desktop-close close md-icon-button" ng-click="maps.showStations()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button><div class="md-dialog-content"><iframe ng-src="{{ maps.pricingLink }}" title="iframe content"></iframe></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/location.tmpl.html',
          '<md-dialog aria-label="Location" id="xLocation" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2 ng-if="maps.xLocation.action == \'add\'">{{ "Add Location" | translate }}</h2><h2 ng-if="maps.xLocation.action == \'edit\'">{{ "Edit Location" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.xLocation.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.xLocation.processing" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.xLocation.error">{{ maps.xLocation.error }}</div><md-dialog-content class="nox"><div class="md-dialog-content"><form name="maps.xLocationForm" id="location-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><md-input-container class="md-block responsive" flex-gt-xs ng-if="maps.xLocation.type == \'public\'"><label>{{ "Location Name" | translate }}</label><input type="text" name="location" ng-model="maps.xLocation.name" ng-disabled="maps.xLocation.processing" required><div ng-messages="maps.xLocationForm.location.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block" flex-gt-xs ng-class="{responsive: maps.xLocation.type == \'public\'}"><label>{{ "Full Street Address" | translate }}</label><input type="text" name="address" ng-model="maps.xLocation.address" ng-blur="maps.findNearby(maps.xLocation.latitude, maps.xLocation.longitude)" ng-keypress="$event.which === 13 ? maps.geocodeAddress() : null" ng-disabled="maps.xLocation.processing" required><div ng-messages="maps.xLocationForm.address.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><div class="map-container"><label>{{ "Position Pin on Map" | translate }}</label><div id="simple" class="simple-map" callback-fn="maps.findNearby()" control="maps.simpleControl"></div><div class="simple-mask" ng-show="maps.xLocation.processing"></div><div class="set"><md-button class="md-raised" ng-click="maps.geocodeAddress()" title="Move Pin to the Address Specified Above">{{ "Move Pin to Address" | translate }}</md-button><md-button class="md-raised" ng-click="maps.reverseGeocodeAddress()" title="Set the Address Above to Current Pin Location">{{ "Set Address to Pin" | translate }}</md-button></div></div><div class="nearby" ng-show="maps.xLocation.action == \'add\' && maps.xLocation.nearby.length > 0"><div class="warning">{{ "Check to see if the location you are adding already exists" | translate }}</div><div ng-repeat="location in maps.xLocation.nearby track by $index" class="location"><div class="letter">{{ maps.nearbyLabels[$index % maps.nearbyLabels.length] }}</div><div class="details"><div class="name" title="{{ location.name }}">{{ location.name }}</div><div class="address" title="{{ location.address }}">{{ location.address }}</div></div><div class="distance">{{ location.distance_meters | miles }} mi</div></div></div><md-input-container class="md-block not-required" flex-gt-xs><label>{{ "Description" | translate }}</label><textarea ng-model="maps.xLocation.description" ng-disabled="maps.xLocation.processing" md-select-on-focus></textarea></md-input-container><div class="stations"><div class="title">{{ "Stations" | translate }}</div><div class="station-section" ng-show="maps.xLocation.action == \'edit\'"><div class="station-type">{{ "Current Stations" | translate }}</div><div class="line"></div><div class="station" ng-repeat="station in maps.xLocation.stations | filter: { existing: true }" ng-class="{ready: station.select, full: maps.xLocation.type == \'residential\', locked: station.network_ext_id}"><div class="status"><span class="locked" ng-show="station.network_ext_id">{{ "Locked" | translate }}</span> <span class="removal" ng-show="maps.xLocation.remove.indexOf(station.index) != -1" title="This station will be deleted upon clicking Update">{{ "Marked for Removal" | translate }}</span></div><div class="remove" ng-show="maps.xLocation.remove.indexOf(station.index) == -1 && !station.network_ext_id" ng-click="maps.tryRemoveStation(station.index)"><md-icon aria-hidden="Remove Station" title="Remove Station">close</md-icon></div><div class="remove" ng-show="maps.xLocation.remove.indexOf(station.index) != -1" ng-click="maps.undoRemoveStation(station.index)"><md-icon aria-hidden="Undo Remove" title="Undo Remove">undo</md-icon></div><div class="icon"><div class="sprite outlet center" ng-show="station.outlets && station.outlets.length == 1"><div class="icon-{{ station.outlets[0].connector | connectorIcon : maps.localization.name }}"></div></div><div class="multi-image" ng-show="station.outlets && station.outlets.length == 2"><div class="sprite outlet top-left"><div class="icon-{{ station.outlets[0].connector | connectorIcon : maps.localization.name }}"></div></div><div class="sprite outlet bottom-right"><div class="icon-{{ station.outlets[1].connector | connectorIcon : maps.localization.name }}"></div></div></div><div class="multi-image" ng-show="station.outlets && station.outlets.length == 3"><div class="sprite outlet top-left"><div class="icon-{{ station.outlets[0].connector | connectorIcon : maps.localization.name }}"></div></div><div class="sprite outlet top-right"><div class="icon-{{ station.outlets[1].connector | connectorIcon : maps.localization.name }}"></div></div><div class="sprite outlet bottom-center"><div class="icon-{{ station.outlets[2].connector | connectorIcon : maps.localization.name }}"></div></div></div><md-icon aria-hidden="No plug selected" ng-show="!station.outlets[0].connector && station.select == null && !station.error">help_outline</md-icon></div><div class="details"><md-input-container class="md-block" flex-gt-xs><md-select ng-model="station.select" placeholder="{{ \'Select Plug\' | translate }}" ng-change="maps.updateConnector(station)" aria-label="plug" ng-disabled="maps.xLocation.processing || station.network_ext_id" required><md-option ng-repeat="connector in maps.location.valid_outlets" value="{{$index}}" ng-if="maps.xLocation.action == \'edit\'">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</md-option><md-option ng-repeat="connector in maps.localization.outlets_public" value="{{$index}}" ng-if="maps.xLocation.type == \'public\' && maps.xLocation.action == \'add\'">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</md-option><md-option ng-repeat="combo in maps.localization.outlet_configurations" value="{{$index + (maps.xLocation.action == \'edit\' ? maps.location.valid_outlets.length : maps.localization.outlets_public.length)}}" ng-if="maps.xLocation.type == \'public\'">{{ combo.name }}</md-option><md-option value="99" ng-if="station.outlets[0].connector == 6 && station.outlets[0].power == 1">{{ maps.localization.outlets_all | listName : station.outlets[0].connector : station.outlets[0].power }}</md-option><md-option ng-repeat="connector in maps.localization.outlets_private" value="{{$index}}" ng-if="maps.xLocation.type == \'residential\' && maps.xLocation.action == \'add\'">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</md-option></md-select></md-input-container><md-input-container class="md-block" flex-gt-xs ng-if="maps.xLocation.type == \'public\' && maps.localization.editable_networks.length > 0"><md-select ng-model="station.network_id" aria-label="network" ng-disabled="maps.xLocation.processing || station.network_ext_id"><md-option value="{{ station.network_id }}" ng-if="station.network_ext_id && station.network_name">{{ station.network_name }}</md-option><md-option value="0" ng-if="!station.network_ext_id">{{ "Non-networked" | translate }}</md-option><md-option value="{{ station.outside_network_id }}" ng-if="station.outside_network_id && station.outside_network_name">{{ station.outside_network_name }}</md-option><md-option ng-repeat="network in maps.localization.editable_networks" value="{{ network.id }}" ng-if="!station.network_ext_id">{{ network.name }}</md-option></md-select></md-input-container></div></div></div><div class="station-section" ng-class="{new: maps.xLocation.stationAdded && maps.xLocation.action == \'edit\'}"><div class="station-type" ng-show="maps.xLocation.stationAdded && maps.xLocation.action == \'edit\'">Add Stations</div><div class="line" ng-show="maps.xLocation.stationAdded && maps.xLocation.action == \'edit\'"></div><div class="station" ng-repeat="station in maps.xLocation.stations | filter: { existing: false }" ng-class="{ready: station.select, full: maps.xLocation.type == \'residential\', locked: station.network_ext_id}"><div class="remove" ng-click="maps.removeStation(station.index)"><md-icon aria-hidden="Remove Station" title="Remove Station">close</md-icon></div><div class="icon"><div class="sprite outlet center" ng-show="station.outlets && station.outlets.length == 1"><div class="icon-{{ station.outlets[0].connector | connectorIcon : maps.localization.name }}"></div></div><div class="multi-image" ng-show="station.outlets && station.outlets.length == 2"><div class="sprite outlet top-left"><div class="icon-{{ station.outlets[0].connector | connectorIcon : maps.localization.name }}"></div></div><div class="sprite outlet bottom-right"><div class="icon-{{ station.outlets[1].connector | connectorIcon : maps.localization.name }}"></div></div></div><div class="multi-image" ng-show="station.outlets && station.outlets.length == 3"><div class="sprite outlet top-left"><div class="icon-{{ station.outlets[0].connector | connectorIcon : maps.localization.name }}"></div></div><div class="sprite outlet top-right"><div class="icon-{{ station.outlets[1].connector | connectorIcon : maps.localization.name }}"></div></div><div class="sprite outlet bottom-center"><div class="icon-{{ station.outlets[2].connector | connectorIcon : maps.localization.name }}"></div></div></div><md-icon aria-hidden="No plug selected" ng-show="!station.outlets[0].connector && station.select == null && (!station.error || station.error == \'supercharger\')">help_outline</md-icon></div><div class="details"><md-input-container class="md-block" flex-gt-xs><md-select ng-model="station.select" placeholder="{{ \'Select Plug\' | translate }}" ng-change="maps.updateConnector(station)" aria-label="plug" ng-disabled="maps.xLocation.processing || station.network_ext_id" required><md-option ng-repeat="connector in maps.location.valid_outlets" value="{{$index}}" ng-if="maps.xLocation.action == \'edit\'">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</md-option><md-option ng-repeat="connector in maps.localization.outlets_public" value="{{$index}}" ng-if="maps.xLocation.type == \'public\' && maps.xLocation.action == \'add\'">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</md-option><md-option ng-repeat="combo in maps.localization.outlet_configurations" value="{{$index + (maps.xLocation.action == \'edit\' ? maps.location.valid_outlets.length : maps.localization.outlets_public.length)}}" ng-if="maps.xLocation.type == \'public\'">{{ combo.name }}</md-option><md-option ng-repeat="connector in maps.localization.outlets_private" value="{{$index}}" ng-if="maps.xLocation.type == \'residential\' && maps.xLocation.action == \'add\'">{{ maps.localization.outlets_all | listName : connector.connector : connector.power }}</md-option><md-option value="99" ng-if="maps.xLocation.type == \'public\'">Supercharger</md-option></md-select></md-input-container><md-input-container class="md-block" flex-gt-xs ng-if="maps.xLocation.type == \'public\' && maps.localization.editable_networks.length > 0"><md-select ng-model="station.network_id" aria-label="network" ng-disabled="maps.xLocation.processing || station.network_ext_id"><md-option value="0">{{ "Non-networked" | translate }}</md-option><md-option ng-repeat="network in maps.localization.editable_networks" value="{{ network.id }}">{{ network.name }}</md-option></md-select></md-input-container></div></div><div class="add"><md-button ng-click="maps.addStation()" ng-disabled="maps.xLocation.processing">{{ "Add Another Station" | translate }}</md-button></div></div></div><div class="switches"><md-switch class="md-primary" md-no-ink aria-label="Switch 24/7" ng-model="maps.xLocation.open247" ng-disabled="maps.xLocation.processing">{{ "Open 24/7" | translate }}</md-switch><md-switch class="md-primary" md-no-ink aria-label="Switch restricted" ng-model="maps.xLocation.restricted" ng-show="maps.xLocation.type == \'public\'" ng-disabled="maps.xLocation.processing">{{ "Restricted Access" | translate }}</md-switch><md-switch class="md-primary" md-no-ink aria-label="Switch cost" ng-model="maps.xLocation.cost" ng-show="maps.xLocation.type == \'public\'" ng-disabled="maps.xLocation.processing">{{ "Payment Required" | translate }}</md-switch></div><md-input-container class="md-block responsive nobot" flex-gt-xs><label>{{ "Hours" | translate }}</label><textarea ng-model="maps.xLocation.hours" ng-disabled="maps.xLocation.processing" md-select-on-focus></textarea></md-input-container><md-input-container class="md-block responsive nobot" flex-gt-xs ng-show="maps.xLocation.type == \'public\'"><label>{{ "Phone Number" | translate }}</label><input type="tel" ng-model="maps.xLocation.phone" maxlength="20" ng-disabled="maps.xLocation.processing"></md-input-container><md-input-container class="md-block responsive nobot" flex-gt-xs ng-show="maps.xLocation.type == \'public\'"><label>{{ "Price" | translate }}</label><input type="text" ng-model="maps.xLocation.cost_description" ng-disabled="maps.xLocation.processing"></md-input-container><md-input-container class="md-block responsive nobot" flex-gt-xs ng-show="maps.xLocation.type == \'public\'"><label>{{ "Parking Level" | translate }}</label><input type="text" ng-model="maps.xLocation.parking_level" ng-disabled="maps.xLocation.processing"></md-input-container><md-input-container class="md-block responsive nobot" flex-gt-xs ng-show="maps.xLocation.type == \'public\'"><label>{{ "Overhead Clearance" | translate }} <span ng-show="maps.metric">{{ "Meters" | translate }}</span><span ng-show="!maps.metric">{{ "Feet" | translate }}</span></label><input type="text" ng-model="maps.xLocation.overhead_clearance" ng-disabled="maps.xLocation.processing"></md-input-container><fieldset class="parkingAttributes" ng-show="maps.xLocation.type == \'public\'"><legend>{{ "Parking Attributes" | translate }}</legend><md-checkbox ng-repeat="parking in maps.localization.location_parking_attribute_types" ng-checked="maps.xLocation.parking_attributes.indexOf(parking.id) > -1" ng-click="maps.toggleParkingAttribute(parking.id)" ng-disabled="maps.xLocation.processing"><img ng-src="{{ parking.image_url | dev }}" class="parking-icon"> {{ parking.description | translate }}</md-checkbox></fieldset><fieldset class="accessRestrictions" ng-show="maps.xLocation.type == \'public\'"><legend>{{ "Access Restrictions" | translate }}</legend><md-checkbox ng-repeat="restriction in maps.localization.location_access_restriction_types" ng-checked="maps.xLocation.access_restrictions.indexOf(restriction.id) > -1" ng-click="maps.toggleAccessAttribute(restriction.id)" ng-disabled="maps.xLocation.processing">{{ restriction.description | translate }}</md-checkbox></fieldset><fieldset class="amenities" ng-show="maps.xLocation.type == \'public\'"><legend>{{ "Amenities" | translate }}</legend><md-checkbox ng-checked="maps.xLocation.amenities.indexOf(amenity.type) > -1" ng-click="maps.toggleAmenity(amenity.type)" ng-repeat="amenity in maps.localization.amenities" class="amenity" ng-disabled="maps.xLocation.processing">{{ amenity.name | translate }}</md-checkbox></fieldset><md-input-container class="operational" ng-class="{ \'md-input-invalid\' : maps.xLocationForm.coming_soon.$invalid && maps.xLocationForm.$submitted }" ng-if="maps.xLocation.action == \'add\' && maps.xLocation.type == \'public\'"><div class="check">{{ "Is this charging location open/active" | translate }} *</div><md-radio-group name="coming_soon" ng-model="maps.xLocation.coming_soon" required><md-radio-button value="false">{{ "Yes" | translate }}</md-radio-button><md-radio-button value="true">{{ "No, it\'s Under Construction or Coming Soon" | translate }}</md-radio-button></md-radio-group><div ng-messages="maps.xLocationForm.coming_soon.$error" role="alert" multiple><div ng-message="required">{{ "Please select an option" | translate }}</div></div></md-input-container><div class="actions"><md-button class="md-raised" ng-click="maps.cancel()" ng-disabled="maps.xLocation.processing">{{ "Cancel" | translate }}</md-button><md-button class="md-warn md-raised" ng-click="maps.showReport($event)" ng-show="maps.xLocation.action == \'edit\' && !maps.ownerAccess" ng-disabled="maps.xLocation.processing">{{ "Report Inaccuracy" | translate }}</md-button><md-button class="md-warn md-raised" ng-click="maps.removeLocation()" ng-show="maps.xLocation.action == \'edit\' && maps.ownerAccess" ng-disabled="maps.xLocation.processing">{{ "Remove Location" | translate }}</md-button><md-button type="button" class="md-primary md-raised" ng-click="maps.submitLocation()" aria-label="submit" ng-disabled="maps.xLocation.processing"><span ng-if="maps.xLocation.action == \'add\'">{{ "Submit" | translate }}</span> <span ng-if="maps.xLocation.action == \'edit\'">{{ "Update" | translate }}</span></md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/message.tmpl.html',
          '<md-dialog aria-label="Message" id="message" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Message Owner" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.message.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.message.processing" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.message.error">{{ maps.message.error }}</div><md-dialog-content><div class="md-dialog-content"><form name="maps.messageForm" id="message-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><md-input-container class="md-block not-required" flex-gt-xs><label>{{ "Message" | translate }}</label><textarea name="message" ng-model="maps.message.message" ng-disabled="maps.message.processing" md-select-on-focus required></textarea><div ng-messages="maps.messageForm.message.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a message" | translate }}</div></div></md-input-container><div class="actions"><md-button class="md-raised" ng-click="maps.cancel()" ng-disabled="maps.message.processing">{{ "Cancel" | translate }}</md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.submitMessage()" ng-disabled="maps.message.processing">{{ "Message" | translate }}</md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/photos.tmpl.html',
          '<md-dialog aria-label="Photos" id="photos" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Photos" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><div class="photos"><div class="photo add" ng-click="maps.try($event, \'showUpload\')" ng-show="maps.canUpload && !maps.featuredPhoto"><div class="image"><div class="centerAll"><div class="text">{{ "Add Photo" | translate }}</div><md-icon>add_circle_outline</md-icon></div></div></div><div class="photo" ng-repeat="photo in maps.location.photos" ng-show="!maps.featuredPhoto"><a ng-href="{{ photo.url | dev }}" data-lightbox="location-photos-all" data-title="{{ photo.caption }} ({{ photo.created_at | date: \'MMMM d, yyyy\' }})"><div class="image" style="background-image: url(\'{{ photo.url | dev }}\')"></div></a></div><div class="photo featuredPhoto" ng-show="maps.featuredPhoto"><a ng-href="{{ maps.featuredPhoto.url | dev }}" data-lightbox="featured-photo" data-title="{{ maps.featuredPhoto.caption }} ({{ maps.featuredPhoto.created_at | date: \'MMMM d, yyyy\' }})"><div class="image" style="background-image: url(\'{{ maps.featuredPhoto.url | dev }}\')"></div></a></div></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/pricing.tmpl.html',
          '<md-dialog aria-label="Pricing Iframe" id="pricing-iframe" class="modal modalv2"><md-toolbar class="mobile-close"><div class="md-toolbar-tools"><h2>{{ maps.pricingStationName }}Pricing Details</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.showStations()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><iframe ng-src="{{ maps.pricingLink }}" title="iframe content"></iframe></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/profile.tmpl.html',
          '<md-dialog aria-label="Profile" id="profile" class="modal modalv2"><md-dialog-content><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.profile.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button><div class="md-dialog-content"><form name="maps.profileForm" id="profile-form" novalidate><md-content id="profile-area" class="form-section" layout-gt-sm="row"><div class="profile-background"></div><div class="profile"><div class="picture-area"><div class="picture" ng-click="maps.showUpload($event, true)" ng-disabled="maps.profile.processing"><img ng-src="{{ maps.getProfilePicture() }}" image-error="true"><div class="change">{{ "Update Photo" | translate }}</div></div></div><div class="text-area"><div class="member" translate="Member Since Date" translate-value-date="{{ maps.user.created_at | date: \'MMMM d, yyyy\'}}"></div><div class="username">{{ maps.profile.display_name }}</div><div class="stats"><div class="stat" ng-show="maps.statistics.month_reviews != null"><div class="value" ng-class="{good: maps.statistics.month_reviews > 0 }">{{ maps.statistics.month_reviews }}</div><div class="label">{{ "Checkins" | translate }}<br><div class="secondary">(<span translate="Days" translate-value-days="30"></span>)</div></div></div><div class="stat" ng-show="maps.statistics.total_reviews != null"><div class="value" ng-class="{good: maps.statistics.total_reviews > 0 }">{{ maps.statistics.total_reviews }}</div><div class="label">{{ "Checkins" | translate }}<br><div class="secondary">({{ "All Time" | translate }})</div></div></div><div class="stat" ng-show="maps.statistics.total_photos != null"><div class="value" ng-class="{good: maps.statistics.total_photos > 0 }">{{ maps.statistics.total_photos }}</div><div class="label">{{ "Photos" | translate }}<br><div class="secondary">{{ "Added" | translate }}</div></div></div><div class="stat" ng-show="maps.statistics.total_locations_created != null"><div class="value" ng-class="{good: maps.statistics.total_locations_created > 0 }">{{ maps.statistics.total_locations_created }}</div><div class="label">{{ "Locations" | translate }}<br><div class="secondary">{{ "Added" | translate }}</div></div></div></div></div></div></md-content><div class="tab-sections"><md-content class="form-section tabs"><div class="tab rev" ng-click="maps.profileShowTab(\'recent\')" ng-class="{active: maps.profile.view == \'recent\'}">{{ "Recently Viewed" | translate }}</div><div class="tab" ng-click="maps.profileShowTab(\'activity\')" ng-class="{active: maps.profile.view == \'activity\'}">{{ "My Activity" | translate }}</div><div class="tab" ng-click="maps.profileShowTab(\'details\')" ng-class="{active: maps.profile.view == \'details\'}">{{ "My Details" | translate }}</div></md-content><div class="loader" layout="row" layout-sm="column" layout-align="space-around" ng-show="maps.profile.loading && maps.profile.view != \'details\'"><md-progress-circular md-mode="indeterminate"></md-progress-circular></div><md-content class="form-section activity-feed" ng-show="maps.profile.view == \'recent\'"><div class="nodata" ng-show="!maps.profile.loading && maps.profile.views.length === 0">{{ "You haven\'t viewed any locations recently" | translate }} {{ "You can easily access your recently viewed locations here" | translate }}</div><div class="views" ng-class="{visible: maps.profile.views.length}"><div class="bar"></div><div class="history" ng-repeat="activity in maps.profile.views" ng-show="maps.profile.views"><div class="photo" ng-click="maps.goToLocationId(activity.id)"><img ng-src="{{ activity.photo_url | dev }}" ng-show="activity.photo_url"><img src="https://assets.plugshare.com/assets/plugshare.png" ng-show="!activity.photo_url"></div><div class="details"><div class="date">{{ activity.happened_at | date: "MMM d, yyyy" }}</div><div class="action"><div class="description"><span class="target" ng-click="maps.goToLocationId(activity.id)">{{ activity.name }}</span></div><div class="address">{{ activity.address }}</div></div><div class="additional"><div class="cta"><div class="checkin">{{ "Leave a Checkin" | translate }}</div><div class="icons"><i class="fa fa-thumbs-o-up" aria-hidden="true" ng-click="maps.showLocationAction(activity.id, \'checkin\', \'success\', \'recent-activity\')"></i> <i class="fa fa-thumbs-o-down" aria-hidden="true" ng-click="maps.showLocationAction(activity.id, \'checkin\', \'error\', \'recent-activity\')"></i> <i class="fa fa-comment-o" aria-hidden="true" ng-click="maps.showLocationAction(activity.id, \'checkin\', \'tip\', \'recent-activity\')"></i></div></div></div></div></div><div class="history" ng-class="{visible: maps.profile.views.length}" ng-style="{\'animation-delay\': \'0.2s\'}" ng-if="maps.profile.views && maps.profile.moreMyViews"><md-button class="md-primary md-raised more" ng-click="maps.getRecentlyViewed(true)" ng-disabled="maps.profile.loading">{{ maps.profile.loading ? "Fetching Data" : "View More" | translate }}</md-button></div></div></md-content><md-content class="form-section activity-feed" ng-show="maps.profile.view == \'activity\'"><div class="nodata" ng-show="!maps.profile.loading && maps.profile.activities.length === 0">{{ "You don\'t have any recent activity" | translate }} {{ "You can easily access your recent checkins, added photos and locations here" | translate }}</div><div class="activities"><div class="activity" ng-repeat="activity in maps.profile.activities track by $index" ng-class="{visible: maps.profile.activities.length}" ng-style="{\'animation-delay\': $index%10/5 + \'s\'}" ng-if="maps.profile.activities"><div class="details"><div class="date">{{ activity.happened_at | date: "MMM d, yyyy" }}</div><div class="action"><div class="ball" ng-class="{photo: activity.action == 1 && activity.type == 3, success: activity.review.rating == 1, fail: activity.review.rating == -1, waiting: activity.review.waiting == 1, message: activity.review.waiting == 0 && activity.review.rating == 0 && activity.review.comment, edit: activity.type == \'edit\', new: activity.type == \'new\'}"></div><div class="problem" ng-show="activity.review.problem">{{ activity.review.problem | problemName | translate }}</div><div class="description">{{ activity.description | translate }} <span class="target" ng-click="maps.goToLocation(activity.location)">{{ activity.target }}</span></div></div><div class="location" ng-show="activity.location.display_area">{{ activity.location.display_area }}</div><div class="additional" ng-show="activity.review.comment || activity.photo.thumbnail"><span class="comment" ng-show="activity.review.comment">{{ activity.review.comment }}</span> <span class="photo" ng-show="activity.photo.thumbnail"><a ng-href="{{ activity.photo.url | dev }}" data-lightbox="myActivity" data-title="{{ activity.location.display_name }} ({{ activity.photo.created_at | date: \'MMMM d, yyyy\' }})"><img ng-src="{{ activity.photo.thumbnail | dev }}"></a></span></div></div></div><div class="activity" ng-class="{visible: maps.profile.activities.length}" ng-style="{\'animation-delay\': \'0.2s\'}" ng-if="maps.profile.activities && maps.profile.moreMyActivity"><md-button class="md-primary md-raised more" ng-click="maps.getUserActivities(true)" ng-disabled="maps.profile.loading">{{ maps.profile.loading ? "Fetching Data" : "View More" | translate }}</md-button></div></div></md-content><md-content class="form-section profile-details" ng-show="maps.profile.view == \'details\' && !maps.profile.edit" ng-cloak layout-gt-sm="row" layout-padding><div class="social-auth" ng-show="maps.socialProvider"><img src="https://assets.plugshare.com/assets/google-icon.png" ng-show="maps.socialProvider == \'Google\'"><img src="https://assets.plugshare.com/assets/apple-icon.png" ng-show="maps.socialProvider == \'SignInWithApple\'"> <span translate="You are authenticated with" translate-value-social="{{ maps.socialProvider }}" class="text"></span></div><div class="info responsive"><div class="label">{{ "Email" | translate }}</div><div class="value" style="word-break: break-all"><md-icon>mail_outline</md-icon>{{ maps.profile.email }}</div></div><div class="info responsive" ng-if="maps.pendingEmail"><div class="label">{{ "Pending Email" | translate }}</div><div class="value pending" title="Needs Verification"><md-icon>help_outline</md-icon><span class="highlight" ng-click="maps.showChangeEmail($event, \'verify\')">{{ maps.pendingEmail }}</span> <span class="cancel" title="Cancel Email Change" ng-click="maps.cancelChangeEmail()">Cancel</span></div></div><div class="info responsive"><div class="label">{{ "Country" | translate }}</div><div class="value"><md-icon>public</md-icon>{{ maps.profile.country_name }}</div></div><div class="info responsive"><div class="label"><span ng-if="maps.profile.country_code == \'US\'">ZIP Code</span> <span ng-if="maps.profile.country_code != \'US\'">{{ "Postal Code" | translate }}</span></div><div class="value"><md-icon>map</md-icon><span ng-if="maps.profile.zip_code">{{ maps.profile.zip_code }}</span><span ng-if="!maps.profile.zip_code" class="no-info">{{ "No Information Provided" | translate }}</span></div></div><div class="info about"><div class="label">{{ "About Me" | translate }} ({{ "optional" | translate }})</div><div class="value"><md-icon>person_pin</md-icon><span ng-if="maps.profile.about">{{ maps.profile.about }}</span><span ng-if="!maps.profile.about" class="no-info">{{ "No Information Provided" | translate }}</span></div></div><div class="account-actions"><div class="action-title">{{ "Actions" | translate }}</div><div class="info responsive"><div class="label"></div><div class="value update" ng-click="maps.profile.edit = true"><md-icon>account_box</md-icon><span class="text">{{ "Edit Profile" | translate }}</span></div></div><div class="info responsive"><div class="label"></div><div class="value update" ng-click="maps.updateEmail($event)"><md-icon>mail_outline</md-icon><span class="text">{{ "Change Email" | translate }}</span></div></div><div class="info responsive"><div class="label"></div><div class="value update" ng-click="maps.updatePassword($event)"><md-icon>lock</md-icon><span class="text">{{ "Change Password" | translate }}</span></div></div><div class="info responsive"><div class="label"></div><div class="value update" ng-click="maps.deleteAccount($event)"><md-icon>delete</md-icon><span class="text">{{ "Delete Account" | translate }}</span></div></div></div></md-content><md-content class="form-section edit-profile" ng-show="maps.profile.edit" ng-cloak layout-gt-sm="row" layout-padding><div class="error" ng-show="maps.profile.error">{{ maps.profile.error }}</div><md-input-container class="md-block responsive" flex-gt-xs><label>{{ "Display Name" | translate }} ({{ "visible to other users" | translate }})</label><input type="text" name="display_name" ng-model="maps.profile.display_name" ng-disabled="maps.profile.processing" required><div ng-messages="maps.profileForm.display_name.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a value for this field" | translate }}</div></div></md-input-container><md-input-container class="md-block responsive small smallExpand select-space" flex-gt-xs><label>{{ "Country" | translate }}</label><md-select name="country_code" ng-model="maps.profile.country_code" ng-disabled="maps.profile.processing" aria-label="country" required><md-option ng-repeat="country in maps.countryList" value="{{ country.code }}">{{ country.name }}</md-option></md-select><div ng-messages="maps.profileForm.country_code.$error" role="alert" multiple><div ng-message="required">{{ "Please select your country to localize settings" | translate }}</div></div></md-input-container><md-input-container class="md-block responsive small smallExpand" flex-gt-xs><label><span ng-if="maps.profile.country_code == \'US\'">ZIP Code</span> <span ng-if="maps.profile.country_code != \'US\'">{{ "Postal Code" | translate }}</span> ({{ "optional" | translate }})</label><input type="text" name="profile_zip" ng-model="maps.profile.zip_code" maxlength="12" ng-disabled="maps.profile.processing"></md-input-container><md-input-container class="md-block" flex-gt-xs><label class="overshow">{{ "Do you have a home charger" | translate }} ({{"optional, not shared with other users" | translate }})</label><md-select ng-model="maps.profile.charger_type" ng-disabled="maps.profile.processing" aria-label="charger_type" class="home"><md-option value="0" ng-selected="maps.profile.charger_default">{{ "Select one" | translate }} ({{ "optional" | translate }})</md-option><md-option value="1">{{ "I own a dedicated vehicle charging station at home" | translate }}</md-option><md-option value="2">{{ "I intend to buy my own dedicated home charging station" | translate }}</md-option><md-option value="3">{{ "I live in a multi-unit dwelling and charge from its provided charging station(s)" | translate }}</md-option><md-option value="4">{{ "I charge from employer-provided charging stations or outlets" | translate }}</md-option><md-option value="5">{{ "I charge from a wall outlet at home" | translate }}</md-option><md-option value="6">{{ "I charge from public chargers not associated with where I live or work" | translate }}</md-option></md-select></md-input-container><md-input-container class="md-block" flex-gt-xs><label>{{ "About Me" | translate }} ({{ "optional" | translate }})</label><textarea ng-model="maps.profile.about" placeholder="{{ \'A brief description about you\' | translate }}" ng-disabled="maps.profile.processing" md-select-on-focus></textarea></md-input-container><md-input-container class="md-block tighten" flex-gt-xs class="checks"><md-checkbox ng-model="maps.profile.allow_promo_email" ng-disabled="maps.xLocation.processing" class="noselect"><span class="noselect">{{ "Receive special offers directly from PlugShare" | translate }}</span></md-checkbox></md-input-container><div class="actions"><md-button class="md-raised" ng-click="maps.cancel()" ng-disabled="maps.profile.processing">{{ "Cancel" | translate }}</md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.submitProfile()" aria-label="submit" ng-disabled="maps.profile.processing">{{ "Update Profile" | translate }}</md-button></div></md-content></div></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/pwps.tmpl.html',
          '<md-dialog aria-label="PWPS" id="pwps" class="modal" ng-class="{keyboard: maps.pwps.keyboard && maps.pwps.state == \'new\' && maps.mobile}"><md-toolbar><div class="md-toolbar-tools"><h2>Pay with PlugShare</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.pwps.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="(maps.pwps.processing || maps.pwps.loading) && !maps.pwps.drawerVisible" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.pwps.error && !maps.pwps.drawerVisible">{{ maps.pwps.error }}</div><md-dialog-content ng-class="{noscroll: maps.pwps.drawerVisible}"><div class="md-dialog-content"><div class="loading" ng-show="maps.pwps.loading">{{ "Loading Station Information" | translate }}</div><div class="stations" ng-show="!maps.pwps.loading"><div class="top-bar"><div class="select"><span ng-show="maps.pwps.jit.length">{{ "Select a Connector" | translate }} </span><span ng-show="!maps.pwps.jit.length">{{ "No stations found" | translate }}</span></div><div class="refresh" ng-click="maps.getJitStations()">{{ "Refresh" | translate }}<md-icon>refresh</md-icon></div></div><div ng-repeat="station in maps.pwps.jit" class="station"><div class="station-name">{{ station.name }}</div><div class="outlets"><div ng-repeat="outlet in station.outlets" class="outlet" ng-class="{available: maps.isOutletAvailable(outlet.available), visible: maps.pwps.jit.length, unavailable: !outlet.activation_data}" ng-style="{\'animation-delay\': outlet.stagger/5 + \'s\'}" ng-disabled="outlet.available != 1" ng-click="maps.activateStation(station, outlet)"><div class="box"><div class="sprite"><div class="icon-{{ outlet.connector | connectorIcon : maps.localization.name }}"></div></div><div class="plug-name">{{ maps.localization.outlets_all | listName : outlet.connector : 0 }}</div><div class="power" ng-show="outlet.kilowatts"><span>{{ outlet.kilowatts.toFixed(1) }} kW</span></div></div><div class="details"><div class="top"><div class="status"><span ng-class="{unknown: maps.getOutletStatusGroup(outlet.status) == 0, available: maps.getOutletStatusGroup(outlet.status) == 1, busy: maps.getOutletStatusGroup(outlet.status) == 2, unavailable: maps.getOutletStatusGroup(outlet.status) == 3 }">{{ maps.getOutletStatusNiceName(outlet.status) }}</span></div><div class="name">{{ outlet.description }}</div></div><div class="cost">{{ outlet.payment_data.cost_description }}</div><div class="unavailable-tip" ng-show="!outlet.activation_data">{{ "This station is not available for activation on Plugshare" | translate }}</div></div></div></div></div><div class="unavailable-tip" ng-show="maps.pwps.jit.length">{{ "Activate at your own discretion" | translate }}</div></div><div id="payment" ng-class="{fadeIn: maps.pwps.drawerVisible}"><div id="payment-overlay" ng-click="maps.overlayCancel()"></div><div id="confirm-payment" ng-class="{slideIn: maps.pwps.drawerVisible, noscroll: maps.pwps.state != \'change\'}"><div id="payment-processing" ng-show="maps.pwps.processing"><div class="processing-center"><div class="loadingio-spinner-eclipse"><div class="spinner"><div></div></div></div><div class="processing"><span ng-show="maps.pwps.state == \'pay\' || maps.pwps.state == \'direct\'">{{ "Processing Payment" | translate }}</span> <span ng-show="maps.pwps.state == \'change\'">{{ "Processing" | translate }}</span> <span ng-show="maps.pwps.state == \'new\'">{{ "Saving Card" | translate }}</span></div></div></div><div id="pay-now" class="payment-view" ng-class="{active: maps.pwps.state == \'pay\'}"><div class="title">{{ "Confirm Payment" | translate }} <span ng-click="maps.overlayCancel()" class="cancel">{{ "Cancel" | translate }}</span></div><div class="success" ng-click="maps.pwps.success = \'\'" ng-show="maps.pwps.success">{{ maps.pwps.success }}</div><div class="error" ng-show="maps.pwps.error">{{ maps.pwps.error }}</div><div class="confirm-payment"><div class="payment-source"><div class="card" ng-show="maps.activeCardIndex != 99"><img ng-src="{{ \'https://assets.plugshare.com/assets/payment/\' + maps.paymentSources[maps.activeCardIndex].card_type + \'.svg\' }}" class="icon" ng-if="maps.paymentSources[maps.activeCardIndex].card_type"><div class="details"><div class="type">{{ maps.paymentSources[maps.activeCardIndex].card_type }}<div class="expired" ng-show="maps.paymentSources[maps.activeCardIndex].is_expired">{{ "Expired" | translate }}</div></div><div class="digits">(&#8226; &#8226; &#8226; &#8226; {{ maps.paymentSources[maps.activeCardIndex].last_four }})</div></div></div><div class="stripe-pay" ng-show="maps.activeCardIndex == 99"><div ng-show="maps.android"><img src="https://assets.plugshare.com/assets/payment/GOOGLEPAY.svg" class="icon"><div class="details"><div class="type">Google Pay</div><div class="digits">-</div></div></div><div ng-show="maps.applePay"><img src="https://assets.plugshare.com/assets/payment/APPLEPAY.svg" class="icon"><div class="details"><div class="type">Apple Pay</div><div class="digits">-</div></div></div></div><div class="no-payment" ng-click="maps.changePaymentMethod()" ng-show="maps.activeCardIndex === null">{{ "Please set a payment method to continue" | translate }}</div><div class="change" ng-click="maps.changePaymentMethod()"><div class="label">{{ "Change" | translate }}</div><md-icon>keyboard_arrow_right</md-icon></div></div><div class="details"><div class="outlet-name">{{ maps.pwps.activationData.outlet_name }}</div><div class="plug-name">{{ maps.localization.outlets_all | listName : maps.pwps.activationData.connector : 0 }}</div><div class="payment-cost">{{ maps.pwps.activationData.cost_description }}</div></div><div class="terms"><div class="description">{{ maps.pwps.activationData.service_description }}</div><div class="terms-link"><a ng-href="{{ maps.pwps.activationData.terms_and_conditions_url }}" target="_blank">{{ "View Terms & Conditions" | translate }}</a></div></div><div class="pay"><div class="confirm" ng-click="maps.confirmCharge(maps.paymentSources[maps.activeCardIndex].id)" ng-show="maps.activeCardIndex !== null && maps.activeCardIndex != 99">{{ "Pay Now" | translate }}</div><div class="confirm" ng-click="maps.changePaymentMethod()" ng-show="maps.activeCardIndex === null">{{ "Select Payment" | translate }}</div><div id="payment-request-button" ng-class="{hidden: !(maps.canMakePayment && maps.activeCardIndex == 99)}"></div></div></div></div><div id="change-payment-method" class="payment-view" ng-class="{active: maps.pwps.state == \'change\'}"><div class="title"><span class="select">{{ "Select Payment Method" | translate }}</span> <span ng-click="maps.addPaymentMethod()" class="add">+ {{ "Add New" | translate }}</span></div><div class="success" ng-click="maps.pwps.success = \'\'" ng-show="maps.pwps.success">{{ maps.pwps.success }}</div><div class="error" ng-show="maps.pwps.error">{{ maps.pwps.error }}</div><div class="payment-sources"><md-button class="payment-source card" ng-class="{expired: source.is_expired}" ng-click="maps.selectPaymentSource($index)" ng-repeat="source in maps.paymentSources track by $index"><img ng-src="{{ \'https://assets.plugshare.com/assets/payment/\' + source.card_type + \'.svg\' }}" class="icon" ng-if="source.card_type"><div class="details"><div class="type">{{ source.card_type }}<div class="expired" ng-show="source.is_expired">{{ "Expired" | translate }}</div><div class="delete" ng-click="maps.deleteCard(source, $index); $event.stopPropagation()">{{ "Delete" | translate }}</div></div><div class="digits">(&#8226; &#8226; &#8226; &#8226; {{ source.last_four }})</div></div><div class="circle" ng-class="{selected: maps.activeCardIndex == $index}"><md-icon>check</md-icon></div></md-button><md-button class="payment-source" ng-click="maps.selectPaymentSource(99)" ng-show="maps.canMakePayment && (maps.android || maps.applePay)"><div class="stripe-pay"><div ng-show="maps.android"><img src="https://assets.plugshare.com/assets/payment/GOOGLEPAY.svg" class="icon"><div class="details"><div class="type">Google Pay</div><div class="digits">-</div></div></div><div ng-show="maps.applePay"><img src="https://assets.plugshare.com/assets/payment/APPLEPAY.svg" class="icon"><div class="details"><div class="type">Apple Pay</div><div class="digits">-</div></div></div></div><div class="circle" ng-class="{selected: maps.activeCardIndex == 99}"><md-icon>check</md-icon></div></md-button><md-button class="payment-source card" ng-click="maps.addPaymentMethod(true)" ng-show="maps.user_role == \'customer_service\'"><div class="details">{{ "Direct Payment" | translate }}<md-icon class="arrow">chevron_right</md-icon></div></md-button></div><button class="confirm" ng-click="maps.backToPayment()" ng-class="{disabled: maps.activeCardIndex === null}">{{ "Done" | translate }}</button></div><div id="new-payment" class="payment-view" ng-class="{active: maps.pwps.state == \'new\' || maps.pwps.state == \'direct\'}"><div class="title"><span ng-show="maps.pwps.state == \'new\'">{{ "Add Card" | translate }}</span> <span ng-show="maps.pwps.state == \'direct\'">{{ "Direct Payment" | translate }}</span> <span ng-click="maps.cancelNewPaymentMethod()" class="cancel">{{ "Cancel" | translate }}</span></div><div class="error" ng-show="maps.pwps.error">{{ maps.pwps.error }}</div><form id="payment-form"><div id="card-element"></div><button id="card-button" class="confirm" ng-click="maps.saveCard()" ng-show="maps.pwps.state == \'new\'">{{ "Save Card" | translate }}</button> <button class="confirm" ng-click="maps.submitPayment()" ng-class="{disabled: maps.pwps.processing}" ng-show="maps.pwps.state == \'direct\'">Submit Payment</button></form></div></div></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/report.tmpl.html',
          '<md-dialog aria-label="Report" id="report" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Report Location" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.report.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.report.processing" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.report.error">{{ maps.report.error }}</div><md-dialog-content><div class="md-dialog-content"><form name="maps.reportForm" id="report-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><div class="prompt"><p>{{ "Submit a report about any location data inaccuracies or other location requests for the PlugShare team to review" | translate }}</p><p ng-show="!maps.user">{{ "Please login or include your email if you would like a response" | translate }}</p></div><md-input-container class="md-block not-required" flex-gt-xs><label>{{ "Message" | translate }}</label><textarea name="message" ng-model="maps.report.message" ng-disabled="maps.report.processing" md-select-on-focus required></textarea><div ng-messages="maps.reportForm.message.$error" role="alert" multiple><div ng-message="required">{{ "Please enter a message" | translate }}</div></div></md-input-container><div class="actions"><md-button class="md-raised" ng-click="maps.cancel()" ng-disabled="maps.report.processing">{{ "Cancel" | translate }}</md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.submitReport()" ng-disabled="maps.report.processing">{{ "Report" | translate }}</md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/reviews.tmpl.html',
          '<md-dialog aria-label="Reviews" id="reviews" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Checkins" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><md-input-container class="md-block" style="margin-top: 0" flex-gt-xs ng-show="maps.user && !maps.singleReview"><md-select id="activity-type" ng-model="maps.checkinType" aria-label="filter"><md-option value="1">{{ "All Checkins" | translate }}</md-option><md-option value="2">{{ "My Checkins" | translate }}</md-option></md-select></md-input-container><div class="checkins"><div class="no-results" ng-show="(!maps.all_reviews.length && maps.checkinType == 1) || (!maps.location.my_reviews && maps.checkinType == 2)">{{ "There are no checkins at this location" | translate }}</div><div class="checkin" ng-repeat="checkin in maps.all_reviews" ng-show="maps.checkinType == 1" ng-class="{broadcast: checkin.id === 0 && checkin.user.display_name == \'Manager\'}"><div class="profile"><img ng-src="{{ checkin.user.photos[0].thumbnail | dev }}" ng-show="checkin.user.photos[0].thumbnail"><img ng-src="{{ maps.user.photos[0].thumbnail | dev }}" ng-show="maps.checkinType == 2 && maps.user.photos[0].thumbnail"><img ng-src="{{ checkin.vehicle_make_profile_image_url }}" ng-show="(maps.checkinType != 2 || !maps.user.photos[0].thumbnail) && !checkin.user.photos[0].thumbnail && checkin.vehicle_make_profile_image_url"><img src="https://assets.plugshare.com/assets/anonymous.jpg" ng-show="(maps.checkinType != 2 || !maps.user.photos[0].thumbnail) && !checkin.user.photos[0].thumbnail && !checkin.vehicle_make_profile_image_url"></div><div class="details"><div class="date">{{ checkin.created_at | date: "MMM d, yyyy" }}</div><div class="user"><md-icon class="success" ng-show="checkin.rating == 1" title="Charge Completed">check_circle</md-icon><md-icon class="fail" ng-show="checkin.rating == -1" title="Error">cancel</md-icon><md-icon class="waiting" ng-show="checkin.waiting == 1" title="Waiting for Charger">access_time</md-icon><md-icon class="message" ng-show="checkin.rating == 0 && checkin.comment" title="Comment">info</md-icon><span class="name" ng-show="maps.checkinType == 1">{{ checkin.user.display_name ? checkin.user.display_name : \'PlugSharer\' }}</span> <span class="name" ng-show="maps.checkinType == 2">{{ maps.user.display_name }}</span></div><div class="car" ng-show="checkin.vehicle_name">{{ checkin.vehicle_name == \'Other\' ? \'Other Vehicle\' : checkin.vehicle_name }}</div><div class="additional"><span translate="{{ checkin.problem | problemName }}" class="problem" ng-show="checkin.problem"></span> <span class="connector" ng-show="checkin.connector_type">{{ checkin.connector_type == 6 ? \'Tesla\' : (maps.localization.outlets_all | listName : checkin.connector_type : 0) }}</span> <span translate="Volts" class="volts" ng-show="checkin.volts" translate-value-volts="{{ checkin.volts }}"></span> <span translate="Amps" class="amps" ng-show="checkin.amps" translate-value-amps="{{ checkin.amps }}"></span> <span translate="Kilowatts" class="kilowatts" ng-show="checkin.kilowatts" translate-value-kilowatts="{{ checkin.kilowatts }}"></span> <span class="comment" ng-show="checkin.comment">{{ checkin.comment.trim() }}</span></div><div class="official-response" ng-show="checkin.response && checkin.response.message"><div class="response-date" ng-show="checkin.response.created_at">{{ checkin.response.created_at | date: "MMM d, yyyy" }}</div><div class="response-by" ng-show="checkin.response.title">{{ checkin.response.title }}</div><div class="response-contents" ng-show="checkin.response.message">{{ checkin.response.message }}<span class="edit" ng-show="checkin.response.updated_at && checkin.response.updated_at != checkin.response.created_at" title="Edited on {{ checkin.response.updated_at | date: \'MMM d, yyyy\' }}">(edited)</span></div></div></div></div><div class="checkin" ng-repeat="checkin in maps.location.my_reviews" ng-show="maps.checkinType == 2" ng-class="{broadcast: checkin.id === 0 && checkin.user.display_name == \'Manager\'}"><div class="profile"><img ng-src="{{ checkin.user.photos[0].thumbnail | dev }}" ng-show="checkin.user.photos[0].thumbnail"><img ng-src="{{ maps.user.photos[0].thumbnail | dev }}" ng-show="maps.checkinType == 2 && maps.user.photos[0].thumbnail"><img ng-src="{{ checkin.vehicle_make_profile_image_url }}" ng-show="(maps.checkinType != 2 || !maps.user.photos[0].thumbnail) && !checkin.user.photos[0].thumbnail && checkin.vehicle_make_profile_image_url"><img src="https://assets.plugshare.com/assets/anonymous.jpg" ng-show="(maps.checkinType != 2 || !maps.user.photos[0].thumbnail) && !checkin.user.photos[0].thumbnail && !checkin.vehicle_make_profile_image_url"></div><div class="details"><div class="date">{{ checkin.created_at | date: "MMM d, yyyy" }}</div><div class="user"><md-icon class="success" ng-show="checkin.rating == 1" title="Charge Completed">check_circle</md-icon><md-icon class="fail" ng-show="checkin.rating == -1" title="Error">cancel</md-icon><md-icon class="waiting" ng-show="checkin.waiting == 1" title="Waiting for Charger">access_time</md-icon><md-icon class="message" ng-show="checkin.rating == 0 && checkin.comment" title="Comment">info</md-icon><span class="name" ng-show="maps.checkinType == 1">{{ checkin.user.display_name ? checkin.user.display_name : \'PlugSharer\' }}</span> <span class="name" ng-show="maps.checkinType == 2">{{ maps.user.display_name }}</span></div><div class="car" ng-show="checkin.vehicle_name">{{ checkin.vehicle_name == \'Other\' ? \'Other Vehicle\' : checkin.vehicle_name }}</div><div class="additional"><span translate="{{ checkin.problem | problemName }}" class="problem" ng-show="checkin.problem"></span> <span class="connector" ng-show="checkin.connector_type">{{ checkin.connector_type == 6 ? \'Tesla\' : (maps.localization.outlets_all | listName : checkin.connector_type : 0) }}</span> <span translate="Volts" class="volts" ng-show="checkin.volts" translate-value-volts="{{ checkin.volts }}"></span> <span translate="Amps" class="amps" ng-show="checkin.amps" translate-value-amps="{{ checkin.amps }}"></span> <span translate="Kilowatts" class="kilowatts" ng-show="checkin.kilowatts" translate-value-kilowatts="{{ checkin.kilowatts }}"></span> <span class="comment" ng-show="checkin.comment">&ldquo;{{ checkin.comment.trim() }}&rdquo;</span></div><div class="official-response" ng-show="checkin.response && checkin.response.message"><div class="response-date" ng-show="checkin.response.created_at">{{ checkin.response.created_at | date: "MMM d, yyyy" }}</div><div class="response-by" ng-show="checkin.response.title">{{ checkin.response.title }}</div><div class="response-contents" ng-show="checkin.response.message">{{ checkin.response.message }}<span class="edit" ng-show="checkin.response.updated_at && checkin.response.updated_at != checkin.response.created_at" title="Edited on {{ checkin.response.updated_at | date: \'MMM d, yyyy\' }}">(edited)</span></div></div></div></div></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/session.tmpl.html',
          '<md-dialog aria-label="Session Details" id="session" class="modal" ng-class="{staticbg: (maps.session.details.status || (maps.isSessionCharging() && (!maps.showWave || !maps.animations))), wavebg: (maps.isSessionCharging() && maps.showWave && maps.animations)}"><md-toolbar><div class="md-toolbar-tools"><h2>PWPS {{ "Session Details" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.session.loading || maps.session.processing || maps.session.stopRequest" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.session.error" ng-click="maps.session.error = \'\'">{{ maps.session.error }}</div><md-dialog-content><div class="md-dialog-content"><div class="waveWrapper waveAnimation" ng-class="{active: maps.isSessionCharging() && maps.showWave && maps.animations}"><div class="waveWrapperInner bgTop"><div class="wave waveTop" style="background-image: url(\'https://assets.plugshare.com/assets/wave-top.png\')"></div></div><div class="waveWrapperInner bgMiddle"><div class="wave waveMiddle" style="background-image: url(\'https://assets.plugshare.com/assets/wave-mid.png\')"></div></div><div class="waveWrapperInner bgBottom"><div class="wave waveBottom" style="background-image: url(\'https://assets.plugshare.com/assets/wave-bot.png\')"></div></div></div><div class="session-details" ng-class="{visible: maps.session.details.id}"><div class="intro"><div class="status" ng-click="maps.animations = !maps.animations"><img src="https://assets.plugshare.com/assets/plugshare-og.png"></div><div class="top-display"><div class="timer" ng-show="maps.isSessionActive()"><span class="digits">{{ maps.session.details.time_elapsed | splitTime : \'h\' }}</span><span class="colon">:</span><span class="digits">{{ maps.session.details.time_elapsed | splitTime : \'m\' }}</span><span class="colon">:</span><span class="digits">{{ maps.session.details.time_elapsed | splitTime : \'s\' }}</span></div><div class="complete" ng-show="!maps.isSessionActive()"><div class="charge-date"><div class="date">{{ (maps.session.details.started_at ? maps.session.details.started_at : maps.session.details.created_at) | date: "MMM d, yyyy" }}</div><div class="time">{{ (maps.session.details.started_at ? maps.session.details.started_at : maps.session.details.created_at) | date: "h:mm a" }} - {{ maps.session.details.ended_at | date: "h:mm a" }}</div></div><div class="location-name">{{ maps.session.details.location.name ? maps.session.details.location.name : \'-\' }}</div></div><div class="sessionStatus" ng-class="{processing: maps.isSessionProcessing(), error: maps.isSessionError(), unknown: maps.isSessionUnknown(), inactive: !maps.isSessionActive()}" ng-show="maps.session.details.status"><span ng-show="!maps.isSessionUnknown()">{{ maps.session.details.status.replace(\'_\', \' \') | titleCase | translate }}</span> <span ng-show="maps.isSessionUnknown()">{{ "Unknown Status" | translate }}</span></div></div></div><div class="status-details card" ng-show="maps.isSessionCommunicating() || maps.session.details.status == \'FAULT\' || maps.session.details.status == \'TIMEOUT\'"><div class="title"><span ng-show="maps.isSessionCommunicating()">{{ "Communicating with Charger" | translate }}</span> <span ng-show="maps.session.details.status == \'FAULT\'">{{ "Station Fault" | translate }}</span> <span ng-show="maps.session.details.status == \'TIMEOUT\'">{{ "Timed Out" | translate }}</span></div><div class="description"><span ng-show="maps.isSessionCommunicating()">{{ "If you have not already plugged in your vehicle please plug it in now" | translate }}</span> <span ng-show="maps.session.details.status == \'FAULT\'">{{ "A station fault has interrupted charging" | translate }}. {{ "Credit card pre-auth will be removed." | translate }}</span> <span ng-show="maps.session.details.status == \'TIMEOUT\'">{{ "Station activation has failed" | translate }}. {{ "Credit card pre-auth will be removed." | translate }}</span></div><div class="contact-links" ng-show="maps.session.details.status == \'FAULT\' || maps.session.details.status == \'TIMEOUT\'"><a class="contact" ng-href="tel:{{ maps.session.details.customer_support_phone }}" ng-if="maps.session.details.customer_support_phone"><md-button class="md-raised md-primary">{{ "Call" | translate }} {{ maps.session.details.partner.name }} {{ "Support" | translate }}</md-button></a><a class="contact" ng-href="mailto:{{ maps.session.details.customer_support_email }}?subject=PWPS Support - {{ maps.session.details.partner_ext_id }}&body=Session ID: {{ maps.session.details.id }}%0D%0AStation: {{ maps.session.details.location.stations[0].name ? maps.session.details.location.stations[0].name : (maps.session.details.location.stations[0].network_ext_id ? maps.session.details.location.stations[0].network_ext_id : \'-\') }}%0D%0ACreated At: {{ maps.session.details.created_at }}" ng-if="maps.session.details.customer_support_email"><md-button class="md-raised md-primary">{{ "Email" | translate }} {{ maps.session.details.partner.name }} {{ "Support" | translate }}</md-button></a></div></div><div class="entries card" ng-show="!maps.isSessionCommunicating()"><div class="entry" ng-class="{three: maps.session.dataCount == 3, four: maps.session.dataCount == 4}" ng-show="maps.showKey(\'soc\', maps.session.details.useless_keys)"><div class="label">{{ "State of Charge" | translate }}</div><div class="data"><div ng-show="maps.session.details.soc != null">{{ maps.session.details.soc }}<span class="units post">%</span></div><div ng-show="!maps.isSessionActive() && maps.session.details.soc == null">N/A</div></div><div class="icon" ng-class="{active: maps.session.details.soc != null || !maps.isSessionActive() }"><i class="fa fa-battery-three-quarters"></i></div></div><div class="entry" ng-class="{three: maps.session.dataCount == 3, four: maps.session.dataCount == 4}" ng-show="maps.showKey(\'watts\', maps.session.details.useless_keys) && (maps.isSessionActive() || (!maps.isSessionActive() && maps.session.details.watts))"><div class="label">{{ "Rate of Charge" | translate }}</div><div class="data"><div ng-show="maps.session.details.watts != null">{{ (maps.session.details.watts / 1000).toFixed(1) }}<span class="units post">kW</span></div><div ng-show="!maps.isSessionActive() && maps.session.details.watts == null">N/A</div></div><div class="icon" ng-class="{active: maps.session.details.watts != null || !maps.isSessionActive() }"><i class="fa fa-heartbeat"></i></div></div><div class="entry" ng-class="{three: maps.session.dataCount == 3, four: maps.session.dataCount == 4}" ng-show="maps.showKey(\'watt_hours\', maps.session.details.useless_keys)"><div class="label">{{ "Energy Added" | translate }}</div><div class="data"><div ng-show="maps.session.details.watt_hours != null">{{ (maps.session.details.watt_hours / 1000).toFixed(1) }}<span class="units post">kWh</span></div><div ng-show="!maps.isSessionActive() && maps.session.details.watt_hours == null">N/A</div></div><div class="icon" ng-class="{active: maps.session.details.watt_hours != null || !maps.isSessionActive() }"><i class="fa fa-bolt"></i></div></div><div class="entry" ng-class="{three: maps.session.dataCount == 3, four: maps.session.dataCount == 4}"><div class="label"><span ng-show="maps.session.details.total_capture_amount == null">{{ "Estimated Cost" | translate }}</span> <span ng-show="maps.session.details.total_capture_amount != null">{{ "Cost" | translate }}</span></div><div class="data" ng-class="{text: maps.session.details.formatted_cost == \'See station\' || maps.session.details.formatted_cost == \'Pendiing\'}">{{ maps.session.details.formatted_cost }}</div><div class="icon" ng-class="{active: maps.session.details.formatted_cost != null || !maps.isSessionActive() || maps.session.details.payment_status == \'FREE_SESSION\' }"><i class="fa fa-money"></i></div></div></div><div class="stop-charge card" ng-click="maps.stopCharge(maps.session.details.id)" ng-show="maps.session.details.stoppable && maps.isSessionCharging()">{{ "Stop Charge" | translate }}</div><div class="payment-source card" ng-show="maps.session.details.source.card_type"><div class="payment-details">{{ "Payment Details" | translate }}</div><div class="cost-description" ng-show="maps.session.details.cost_description != \'Unknown\'">{{ maps.session.details.cost_description }}</div><div class="payment-card"><img ng-src="{{ \'https://assets.plugshare.com/assets/payment/\' + maps.session.details.source.card_type + \'.svg\' }}" class="icon" ng-if="maps.session.details.source.card_type"><div class="details"><div class="type">{{ maps.session.details.source.card_type }}</div><div class="digits">&#8226; &#8226; &#8226; &#8226; {{ maps.session.details.source.last_four }}</div></div></div></div><div class="location card" ng-show="maps.session.details.location"><div class="details"><div class="location-details"><div class="name">{{ maps.session.details.location.name }}</div><div class="address">{{ maps.session.details.location.address }}</div><div class="view" ng-click="maps.goToLocationId(maps.session.details.location.id)">{{ "View" | translate }}</div></div><div class="station-details"><div class="box"><div class="sprite"><div class="icon-{{ maps.session.details.location.stations[0].outlets[0].connector | connectorIcon : maps.localization.name }}"></div></div><div class="plug-name">{{ maps.localization.outlets_all | listName : maps.session.details.location.stations[0].outlets[0].connector : 0 }}</div><div class="power" ng-show="outlet.kilowatts"><span>{{ outlet.kilowatts.toFixed(1) }} kW</span></div></div><div class="station-outlet"><div class="label" ng-show="maps.session.details.location.stations[0].name || maps.session.details.location.stations[0].network_ext_id">{{ "Station" | translate }}</div><div class="station" ng-show="maps.session.details.location.stations[0].name || maps.session.details.location.stations[0].network_ext_id">{{ maps.session.details.location.stations[0].name ? maps.session.details.location.stations[0].name : (maps.session.details.location.stations[0].network_ext_id ? maps.session.details.location.stations[0].network_ext_id : \'-\') }}</div><div class="label" ng-show="maps.session.details.location.stations[0].outlets[0].description || maps.session.details.location.stations[0].outlets[0].network_ext_id">{{ "Outlet" | translate }}</div><div class="outlet" ng-show="maps.session.details.location.stations[0].outlets[0].description || maps.session.details.location.stations[0].outlets[0].network_ext_id">{{ maps.session.details.location.stations[0].outlets[0].description ? maps.session.details.location.stations[0].outlets[0].description : (maps.session.details.location.stations[0].outlets[0].network_ext_id ? maps.session.details.location.stations[0].outlets[0].network_ext_id : \'-\') }}</div></div></div></div></div><div ng-show="maps.session.details"><div class="sessionId"><span class="label">PlugShare ID:</span> <span class="id">{{ maps.session.details.id ? maps.session.details.id : "-" }}</span></div><div class="sessionId"><div class="label">{{ "Network Session ID" | translate }}:</div><div class="id">{{ maps.session.details.partner_ext_id ? maps.session.details.partner_ext_id : "-" }}</div></div><div class="support" ng-if="maps.session.details.customer_support_phone || maps.session.details.customer_support_email"><a ng-href="tel:{{ maps.session.details.customer_support_phone }}" ng-if="maps.session.details.customer_support_phone">{{ "Call" | translate }} {{ maps.session.details.partner.name }} {{ "Support" | translate }} </a><a ng-href="mailto:{{ maps.session.details.customer_support_email }}?subject=PWPS Support - {{ maps.session.details.partner_ext_id }}&body=Session ID: {{ maps.session.details.id }}%0D%0AStation: {{ maps.session.details.location.stations[0].name ? maps.session.details.location.stations[0].name : (maps.session.details.location.stations[0].network_ext_id ? maps.session.details.location.stations[0].network_ext_id : \'-\') }}%0D%0ACreated At: {{ maps.session.details.created_at }}" ng-if="maps.session.details.customer_support_email">{{ "Email" | translate }} {{ maps.session.details.partner.name }} {{ "Support" | translate }}</a></div></div></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/settings.tmpl.html',
          '<md-dialog aria-label="Settings" id="settings" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2 class="standard">{{ "PlugShare Settings" | translate }}</h2><h2 class="short">{{ "Settings" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.settings.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><form name="maps.settingsForm" id="settings-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><md-input-container class="md-block" flex-gt-xs><label>{{ "Language" | translate }} {{ (maps.language != "0") ? \'(Language)\' : \'\' }}</label><md-select ng-model="maps.language" ng-change="maps.changeLanguage(maps.language, true)" class="select" aria-label="language"><md-option ng-repeat="language in maps.languages track by $index" value="{{ $index }}">{{ language.native }}</md-option></md-select></md-input-container><md-input-container class="md-block" ng-show="!maps.embed" flex-gt-xs><label style="overflow: visible">{{ "Country" | translate }} ({{ "Determines filters and vehicle list" | translate }})</label><md-select ng-model="maps.filters.country_code" ng-change="maps.loadLocale(maps.filters.country_code)" class="select" aria-label="country"><md-option value="XX">{{ "Use My Current Location" | translate }}</md-option><md-option ng-repeat="country in maps.countryList" value="{{ country.code }}">{{ country.name }}</md-option></md-select></md-input-container><md-input-container class="md-block" flex-gt-xs><div class="units">{{ "Units" | translate }}</div><md-radio-group ng-model="maps.metricSettings" ng-change="maps.setUnits()"><md-radio-button value="" class="md-primary">{{ "Imperial" | translate }}</md-radio-button><md-radio-button value="1" class="md-primary">{{ "Metric" | translate }}</md-radio-button></md-radio-group></md-input-container><md-button id="cookie-management" ng-show="!maps.embed && maps.eu" ng-click="maps.showCookies()">{{ "Cookie Settings" | translate }}</md-button><div id="changes" class="link" ng-click="maps.showChangeLog()" ng-show="!maps.embed">{{ "View Change Log" | translate }}</div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/stations.tmpl.html',
          '<md-dialog aria-label="Station Details" id="stations" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Station Details" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.stations.loading" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.stations.error">{{ maps.stations.error }}</div><md-dialog-content><div class="md-dialog-content"><div class="stations"><div class="station" ng-repeat="station in maps.location.stations"><div class="status"><div class="left"><div class="title"><span ng-if="station.name">{{ station.name }}</span> <span ng-if="!station.name">{{ "Unnamed Station" | translate }}</span></div></div></div><div class="network" ng-show="station.network"><div class="title" ng-show="station.network.name" ng-click="toggle = !toggle" ng-class="{\'basic\' : toggle}"><span class="name">{{ station.network.name }}</span> <span class="more" ng-if="toggle">{{ "Less Details" | translate }}</span> <span class="more" ng-if="!toggle">{{ "More Details" | translate }}</span></div><div class="details"><div class="description" ng-show="station.network.description">{{ station.network.description }}</div><div class="url" ng-show="station.network.url"><a ng-href="{{ station.network.url }}" target="_blank" class="highlight unlink">{{ station.network.url }}</a></div><div class="phone" ng-show="station.network.phone"><div>{{ "Network Support Number" | translate }}:</div><a ng-href="tel:{{ station.network.e164_phone_number ? station.network.e164_phone_number : station.network.phone }}" class="highlight unlink">{{ station.network.formatted_phone_number ? station.network.formatted_phone_number : station.network.phone }}</a></div><div class="action" ng-show="station.network.action_url"><div class="action-name" ng-show="station.network.action_name">{{ station.network.action_name }}</div><div><a ng-href="{{ station.network.action_url }}" target="_blank" class="highlight unlink">{{ station.network.action_url }}</a></div></div></div></div><div class="cost"><div class="icon" title="Cost"><md-icon>attach_money</md-icon></div><div class="content"><span ng-if="station.cost_description">{{ station.cost_description }}</span> <span ng-if="!station.cost_description">{{ "Unknown" | translate }}</span><div class="detailed" ng-click="maps.showDetailedPricing($event, station.pricing_widget_url, station.name)" ng-show="station.pricing_widget_url"><div class="more">Show Detailed Pricing Info</div></div></div></div><div class="outlets"><div class="title">{{ "Plugs" | translate }}</div><div class="box" ng-repeat="outlet in station.outlets | orderBy:connector"><div class="outlet-status" ng-show="outlet.status && outlet.status != \'UNKNOWN\'"><div class="status-dots"><md-icon class="available" title="Available" ng-show="maps.getOutletStatusGroup(outlet.status) == 1">check_circle</md-icon><md-icon class="busy" title="In Use" ng-show="maps.getOutletStatusGroup(outlet.status) == 2">account_circle</md-icon><md-icon class="unavailable" title="Unavailable" ng-show="maps.getOutletStatusGroup(outlet.status) == 3">remove_circle</md-icon></div><div class="availability"><span translate="{{ maps.getOutletStatusNiceName(outlet.status) }}"></span></div></div><div class="sprite outlet"><div class="icon-{{ outlet.connector | connectorIcon : maps.localization.name }}"></div></div><div class="name">{{ maps.localization.outlets_all | listName : outlet.connector : outlet.power }}</div><div class="power" ng-attr-title="{{ outlet.volts ? outlet.volts + \' Volts\' : \'\' }}{{ outlet.volts && outlet.amps ? \' x \' : \'\' }}{{ outlet.amps ? outlet.amps + \' Amps\' : \'\' }}" ng-if="outlet.kilowatts"><span>{{ outlet.kilowatts }} kW</span></div></div></div></div></div></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/trip.tmpl.html',
          '<md-dialog aria-label="Welcome" id="trip" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>Welcome to the PlugShare Trip Planner</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><md-content class="form-section nopad" layout-gt-sm="row" layout-padding><section class="page"><section><div class="title">Plan your next trip with the PlugShare Trip Planner! <span class="link account" ng-click="maps.try($event, \'showPlanner\')" ng-hide="maps.user">(Free PlugShare account required)</span></div><div class="mobile-warning" ng-show="maps.mobileWarning">NOTICE: You can only VIEW your trips on mobile devices. To CREATE or EDIT a trip, please visit www.plugshare.com on a computer with a wider screen.</div>Begin by using any of the following methods:<div class="options"><div class="thirds"><img src="https://assets.plugshare.com/assets/trip_planner_1.png"><div class="subtitle">A) Select a charging location</div></div><div class="thirds"><img src="https://assets.plugshare.com/assets/trip_planner_2.png"><div class="subtitle">B) Search for names or addresses</div></div><div class="thirds"><img src="https://assets.plugshare.com/assets/trip_planner_3.png"><div class="subtitle">C) Click anywhere on the map</div></div></div>You can add stops, rearrange your stops, view your trip on Google Maps and send directions to your phone and more!<br>Remember to set your filters appropriately.</section><section class="help"><div class="guide"><a href="https://help.plugshare.com/hc/en-us/articles/4418958326163-Trip-Planner-Guide-Tips" target="_blank" title="Trip Planner Guide & Tips"><img src="https://assets.plugshare.com/assets/trip_planner_help.png"></a></div><div class="usage">For more usage instructions, click the help icon to view the <a href="https://help.plugshare.com/hc/en-us/articles/4418958326163-Trip-Planner-Guide-Tips" target="_blank" title="Trip Planner Guide & Tips">Trip Planner Guide & Tips</a>.</div></section><section class="cta"><md-button class="md-primary md-raised" ng-click="maps.hide()" ng-show="maps.user">Get Started Now</md-button><md-button class="md-primary md-raised" ng-click="maps.try($event, \'showPlanner\')" ng-show="!maps.user">Sign In or Register Now!</md-button></section></section></md-content></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/tutorial.tmpl.html',
          '<md-dialog aria-label="Tutorial" id="tutorial" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>PlugShare Help</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><md-content class="form-section" layout-gt-sm="row" layout-padding><section id="freshdesk-search" class="help-center"><div class="section-title">Search for Help</div><form class="hc-search-form" autocomplete="off" action="https://help.plugshare.com/hc/en-us/search?utf8=✓" id="hc-search-form" target="_blank"><div class="hc-search-input"><input placeholder="{{ maps.mobile ? \'Ask your question\' : \'Briefly describe your issue\' }}" type="text" name="query" ng-model="maps.tutorialSearchQuery" rel="page-search" id="support-search-input" autocomplete="off"><md-button class="md-primary" type="submit" autocomplete="off" ng-click="maps.helpdeskSearch()">Search</md-button></div><input type="hidden" name="authenticity_token" value="q1ZZFhz5sZ+qika+aan2TNUMhl05Y0933b0Y9GUoClc="></form></section><section id="page1" class="page" ng-show="maps.pageIndex == 1"><section><div class="logo"><img src="https://assets.plugshare.com/assets/plugshare-logo.png"></div>PlugShare is your guide to electric vehicle charging wherever you go.</section><section><div class="section-title">Map Markers</div><div class="description">You will mainly be looking at<div class="sprite marker"><div class="icon-G"></div></div>normal and<div class="sprite marker"><div class="icon-Y"></div></div>high powered stations. View the<div class="helper" ng-click="maps.helper(\'legend\')">legend</div>for more!</div></section><section><div class="section-title">Search</div><div class="description">Search for specific stations by name, or search by location as you would on Google Maps. General locations will display as<div class="sprite marker"><div class="icon-M"></div></div></div></section><section><div class="section-title">Filters</div><div class="description">Filter the visible markers based on your vehicle and more! Applicable<div class="helper" ng-click="maps.helper(\'filters\')">filters</div>are based on your<div class="helper" ng-click="maps.helper(\'country\')">country</div>so make sure to update it to the correct area!</div></section><section><div class="section-title">Location Details</div><div class="description">Click on a marker<div class="sprite marker"><div class="icon-G"></div></div>to bring up location details. View station availability, user reviews, and photos!</div></section></section><section id="page2" class="page" ng-show="maps.pageIndex == 2"><section><div class="section-title">Checking In<md-icon class="available">check_circle</md-icon></div><div class="description">PlugShare is all about community feedback! Check in to let fellow EV drivers know if a station is broken or if you\'re currently using it.</div></section><section><div class="section-title">Share a Station</div><div class="description">Found a station that\'s not on the map? Add it! Add a<div class="helper" ng-click="maps.helper(\'public\', $event)">public location</div>or share a<div class="helper" ng-click="maps.helper(\'residential\', $event)">home charger</div>for others to use (a helpful map will help you check for duplicates regardless of current filters).</div></section><section><div class="section-title">Pay with PlugShare</div><div class="description">With Pay with PlugShare enabled stations, you can pay for and activate stations directly through PlugShare! Save your account details and seamlessly activate stations across multiple participating networks.</div></section><section><div class="section-title">PlugShare Account</div><div class="description"><span ng-show="!maps.user"><div class="helper" ng-click="maps.showRegister()">Join the community</div>for free to have</span> <span ng-show="maps.user">Your PlugShare account gives you</span> <span>access to additional features and benefits:</span><ul><li>Tailor PlugShare to your vehicle</li><li>Bookmark your favorite locations</li><li>Share reviews and help other drivers</li><li>Get exclusive deals and special offers</li></ul></div></section></section><div class="buttons"><div class="pages"><md-button class="md-raised" ng-click="maps.tutorialPage(false)" ng-disabled="maps.pageIndex <= 1">Previous</md-button><div class="index">Page {{ maps.pageIndex }}/2</div><md-button class="md-raised" ng-click="maps.tutorialPage(true)" ng-hide="maps.pageIndex >= 2">Next</md-button><md-button class="md-primary md-raised" ng-click="maps.hide()" ng-show="maps.pageIndex >= 2">Let\'s Go!</md-button></div></div></md-content></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/upload.tmpl.html',
          '<md-dialog aria-label="Upload" id="upload" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2 ng-if="maps.upload.profile">{{ "Update Profile Picture" | translate }}</h2><h2 ng-if="!maps.upload.profile">{{ "Add Photo" | translate }}</h2><span flex></span><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.upload.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div><md-progress-linear ng-show="maps.upload.processing" md-mode="indeterminate"></md-progress-linear></md-toolbar><div class="error" ng-show="maps.upload.error">{{ maps.upload.error }}</div><md-dialog-content><div class="md-dialog-content"><form name="maps.uploadForm" id="upload-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><div class="max">{{ "Max size" | translate }} 10MB</div><md-input-container class="file-block md-block" flex-gt-xs><label for="photo_upload1" class="uploader md-button md-raised md-primary md-container-ignore" ng-disabled="maps.upload.processing">{{ "Select File" | translate }}</label><label for="photo_upload1" class="md-container-ignore"><div class="file-name">{{ maps.upload.fileName1 ? maps.upload.fileName1 : \'jpg, png, gif\' }}</div></label><input type="file" name="photo" id="photo_upload1" size="20" accept="image/*" ng-disabled="maps.upload.processing" class="ng-hide" aria-label="photo" onchange="angular.element(this).scope().maps.uploadChange(\'upload\', this, 1)"> <img id="attachment1" src="" class="image-preview" ng-show="maps.upload.fileName1"> <button class="md-button" ng-click="maps.clearUpload(\'upload\', 1)" ng-show="maps.upload.fileName1 && !maps.upload.processing" ng-disabled="maps.upload.processing">remove</button></md-input-container><md-input-container class="md-block" flex-gt-xs ng-show="!maps.upload.profile"><label>{{ "Caption" | translate }} ({{ "optional" | translate }})</label><input type="text" ng-model="maps.upload.caption" ng-disabled="maps.upload.processing"></md-input-container><div class="actions"><md-button class="md-raised" ng-click="maps.cancel()" ng-disabled="maps.upload.processing">{{ "Cancel" | translate }}</md-button><md-button type="submit" class="md-primary md-raised" ng-click="maps.submitUpload()" ng-disabled="maps.upload.processing || maps.upload.error">{{ "Upload" | translate }}</md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/vehicle.tmpl.html',
          '<md-dialog aria-label="Vehicle" id="vehicle" class="modal modalv2"><md-progress-linear ng-show="maps.profile.processing" md-mode="indeterminate"></md-progress-linear><md-dialog-content class="vehicle-left"><div id="display-title"><div class="make"><span ng-show="maps.profile.vehicle_make">{{ maps.profile.vehicle_make }}</span> <span ng-show="!maps.profile.vehicle_make">{{ "Select Your" | translate }}</span></div><div class="model" ng-class="{longtext: maps.profile.activeModel && maps.profile.activeModel.length > 15}"><span ng-show="maps.profile.activeModel">{{ maps.profile.activeModel }}</span> <span ng-show="!maps.profile.activeModel">{{ "Vehicle" | translate }}</span></div></div><div class="previous" ng-class="{processing: maps.profile.processing}" ng-click="maps.viewPreviousVehicle()" ng-show="maps.user.vehicles.length > 1"><div class="click-target"><md-icon>chevron_left</md-icon></div></div><div class="next" ng-class="{processing: maps.profile.processing}" ng-click="maps.viewNextVehicle()" ng-show="maps.user.vehicles.length > 1"><div class="click-target"><md-icon>chevron_right</md-icon></div></div><div id="default-plugs"><div class="container" ng-class="{multi: maps.profile.vehicle_plugs.length >= 4}"><div class="plug" ng-repeat="plug in maps.profile.vehicle_plugs | orderBy:[\'connector\', \'power\']"><md-icon>battery_charging_full</md-icon>{{ maps.localization.outlets_all | listName : plug.connector : plug.power }}</div></div></div><div id="vehicle-image-container"><img id="vehicle-image" ng-src="{{ maps.profile.vehicle_image }}" ng-show="maps.profile.vehicle_make"> <img id="no-vehicle" src="https://assets.plugshare.com/assets/unset_vehicle_photo.png" ng-show="!maps.profile.vehicle_make"></div><div class="radio-container" ng-class="{processing: maps.profile.processing}" ng-show="maps.user.vehicles.length > 1"><div class="radio"><md-radio-group ng-model="maps.profile.viewIndex" ng-change="maps.viewVehicle(maps.profile.viewIndex)"><md-radio-button ng-repeat="vehicle in maps.user.vehicles track by $index" value="{{ $index }}"></md-radio-button></md-radio-group></div></div></md-dialog-content><md-dialog-content class="vehicle-right"><md-button class="close md-icon-button" ng-click="maps.cancel()" aria-label="cancel" ng-disabled="maps.profile.processing"><md-icon aria-hidden="Close dialog">close</md-icon></md-button><div class="md-dialog-content"><form name="maps.profileForm" id="profile-form" novalidate><md-content class="form-section" layout-gt-sm="row" layout-padding><md-input-container class="md-block form-title" flex-gt-xs><h2 class="form-title-text">{{ "My Vehicles" | translate }}</h2></md-input-container><div class="error" ng-show="maps.profile.error">{{ maps.profile.error }}</div><div id="vehicle-list" ng-show="maps.user.vehicles.length > 1 || (maps.user.vehicles.length == 1 && !maps.user.vehicles[0].new)"><div class="vehicle-select" ng-class="{active: maps.profile.viewIndex == $index, processing: maps.profile.processing}" ng-repeat="vehicle in maps.user.vehicles track by $index" ng-click="maps.viewVehicle($index)">{{ vehicle.display_name ? vehicle.display_name : (vehicle.new ? \'New Vehicle\' : \'Vehicle \' + ($index + 1)) }}</div><div class="vehicle-select add" ng-class="{processing: maps.profile.processing}" ng-click="maps.addVehicle()" ng-show="maps.user.vehicles.length < maps.vehiclesLimit && !maps.user.vehicles[maps.user.vehicles.length - 1].new">+ {{ "Add New" | translate }}</div></div><md-input-container class="md-block responsive" flex-gt-xs><label>{{ "Make" | translate }}</label><md-select name="profile_make" ng-model="maps.profile.vehicle_make" ng-change="maps.resetVehicle(3)" ng-disabled="maps.profile.processing" required><md-option ng-repeat="make in (maps.localization.makes)" value="{{ make.name }}">{{ make.name }}</md-option></md-select></md-input-container><md-input-container class="md-block responsive" flex-gt-xs><label>{{ "Model" | translate }}</label><md-select name="profile_vehicle" ng-model="maps.profile.vehicle_type" ng-change="maps.resetVehicle(2)" ng-disabled="!maps.profile.vehicle_make || maps.profile.processing || maps.profile.vehicle_make == \'None\' || maps.profile.vehicle_make == \'Other\'" ng-class="{disable: !maps.profile.vehicle_make || maps.profile.processing || maps.profile.vehicle_make == \'None\' || maps.profile.vehicle_make == \'Other\'}" ng-required="maps.profile.vehicle_make && maps.profile.vehicle_make != \'None\' && maps.profile.vehicle_make != \'Other\' && !maps.profile.vehicle_type"><md-option ng-repeat="vehicle in (maps.localization.vehicles | orderBy:\'model\' | filter:maps.profile.vehicle_make)" value="{{ vehicle.id }}">{{ vehicle.model }}</md-option></md-select></md-input-container><md-input-container class="md-block responsive" flex-gt-xs><label>{{ "Trim" | translate }}</label><md-select name="profile_subtype" ng-model="maps.profile.vehicle_subtype" ng-change="maps.resetVehicle(1)" ng-disabled="!(maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).subtypes && maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).subtypes.length > 0) || maps.profile.processing" ng-class="{disable: !(maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).subtypes && maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).subtypes.length > 0)}" ng-required="maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).subtypes.length > 0 && !maps.profile.vehicle_subtype"><md-option ng-repeat="subtype in maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).subtypes" value="{{ subtype.id }}">{{ subtype.name }}</md-option></md-select></md-input-container><md-input-container class="md-block responsive" flex-gt-xs><label>{{ "Color" | translate }}</label><md-select name="profile_color" ng-model="maps.profile.vehicle_color" ng-change="maps.resetVehicle(0)" ng-disabled="!(maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).colors && maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).colors.length > 0) || maps.profile.processing" ng-class="{disable: !(maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).colors && maps.findById(maps.localization.vehicles, maps.profile.vehicle_type).colors.length > 0)}" ng-required="maps.vehicleColors.length > 0 && !maps.profile.vehicle_color"><md-option ng-repeat="color in maps.vehicleColors" value="{{ color.id }}">{{ color.name }}</md-option></md-select></md-input-container><div class="clearfix"><md-button type="submit" class="update md-primary md-raised" ng-click="maps.submitVehicle()" ng-disabled="maps.profile.processing || !maps.profile.touched"><span ng-show="!maps.getVehicle(maps.profile.viewIndex).new" class="updateVehicle">{{ "Update Vehicle" | translate }}</span> <span ng-show="maps.getVehicle(maps.profile.viewIndex).new">{{ "Add Vehicle" | translate }}</span></md-button><md-button type="submit" class="delete md-warn md-raised" ng-click="maps.deleteVehicle(maps.profile.viewIndex)" ng-show="!maps.getVehicle(maps.profile.viewIndex).new && maps.user.vehicles.length" ng-disabled="maps.profile.processing">{{ "Delete Vehicle" | translate }}</md-button></div></md-content></form></div></md-dialog-content></md-dialog>'
        ),
        e.put(
          'app/main/templates/welcome.tmpl.html',
          '<md-dialog aria-label="Welcome" id="welcome" class="modal"><md-toolbar><div class="md-toolbar-tools"><h2>{{ "Welcome to PlugShare" | translate }}</h2><span flex></span><md-button id="optimize-target" class="optimize-target close md-icon-button" ng-click="maps.welcomeClose()" aria-label="cancel"><md-icon aria-hidden="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content class="dialog-content-scroll"><div class="md-dialog-content" style="padding-bottom: 0"><md-content class="form-section" layout-gt-sm="row" layout-padding><section class="page"><section><div class="container"><div class="icon logo"><img src="https://assets.plugshare.com/assets/plugshare.png"></div><div class="content intro">{{ "PlugShare is your guide to electric vehicle charging wherever you go" | translate }}</div></div><div class="container location" ng-if="!maps.welcomeBack"><div class="icon my-location"><md-icon>my_location</md-icon></div><div class="content location-permissions">Please allow location permissions to automatically center your location on the map</div></div></section><section class="features"><div class="welcome-back" ng-if="maps.welcomeBack">{{ "We hope you\'ve been enjoying your use of PlugShare" | translate }}</div><div class="pitch">{{ "Create a free account to access many great features" | translate }}</div><div class="feature"><div class="icon"><md-icon style="color: #227bdc">layers</md-icon></div><div class="content"><div class="title">{{ "Custom Filters" | translate }}</div><div class="description">{{ "Filter charging locations to match your vehicle and preferences" | translate }}</div></div></div><div class="feature"><div class="icon"><md-icon style="color: #0bc70b">directions_car</md-icon></div><div class="content"><div class="title">{{ "Trip Planner" | translate }}</div><div class="description">{{ "Plan and save trips for your longer drives" | translate }}</div></div></div><div class="feature"><div class="icon"><md-icon style="color: #e86704">bookmark</md-icon></div><div class="content"><div class="title">{{ "Bookmarks" | translate }}</div><div class="description">{{ "Save your favorite locations and charging stations" | translate }}</div></div></div><div class="feature"><div class="icon"><md-icon style="color: #f3c40a">group</md-icon></div><div class="content"><div class="title">{{ "Join Community" | translate }}</div><div class="description">{{ "Share locations, photos, and reviews with fellow EV Drivers" | translate }}</div></div></div></section></section></md-content></div></md-dialog-content><section class="modal-bottom"><md-button class="wide-button md-raised" ng-click="maps.welcomeLogin($event)">{{ "Login" | translate }}</md-button><md-button class="wide-button md-primary md-raised" ng-click="maps.welcomeRegister($event)">{{ "Sign Up" | translate }}</md-button><br><div class="later" ng-click="maps.welcomeSkip($event)"><span ng-show="!maps.welcomeBack">{{ "No thanks, I\'ll pass for now" | translate }}</span> <span ng-show="maps.welcomeBack">{{ "No thanks, I\'ll pass" | translate }}</span></div></section></md-dialog>'
        );
    },
  ]);
//# sourceMappingURL=../maps/scripts/app-b8bf5beec0.js.map
