/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 12,
				//clockBold: true,
				//showWeek: true,
				showSunTimes: true,
				lat: 37.7717,
				lon: -122.4439
			}
		},
		// // {
		// // 	module: "calendar",
		// // 	header: "US Holidays",
		// // 	position: "top_left",
		// // 	config: {
		// // 		calendars: [
		// // 			{
		// // 				symbol: "calendar-check",
		// // 				url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					
		// // 			},
		// // 			{
		// // 				url: "https://calendar.google.com/calendar/ical/shaleengoel17%40gmail.com/private-5c9a8432d64584f46e9a7715cb0ac951/basic.ics"
		// // 			}
		// // 		]
		// // 	}
		// // },
		// {
		// 	module: "compliments",
		// 	position: "lower_third",
		// 	config: {
		// 		updateInterval: 15000,
		// 		fadeSpeed: 2000,
		// 		compliments: {
		// 			// anytime:[
		// 			// 	
		// 			// 	"Seize the day",
		// 			// ]
		// 		}
		// 	}
		// },
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				units: "imperial",
				showPeriodUpper: true,
				initialLoadDelay: 1000,
				showWindDirectionAsArrow: true,
				location: "San Francisco, US",
				apiKey: "cb924a6711002948be11b338c3d8ba39"
			}
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "forecast",
		// 		units: "imperial",
		// 		showPeriodUpper: true,
		// 		showPrecipitationAmount: true,
		// 		maxNumberOfDays: 3,
		// 		ignoreToday: true,
		// 		location: "San Francisco, US",
		// 		apiKey: "70fe03f5008149ec93c8518528b2ef8f"
		// 	}
		// },
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		//READ THIS: https://forum.magicmirror.builders/topic/11000/any-simple-clean-monthly-calendar-display-with-google-events/6
		{
			module: 'MMM-CalendarExt2',
			config: {
				calendars: [
				  {
					url: "https://calendar.google.com/calendar/ical/shaleen%40voyagesms.com/private-7f278194e127701cb712fe036cf9546f/basic.ics",
					name: "work",
				  },
				  {
					  url: "https://calendar.google.com/calendar/ical/shaleengoel17%40gmail.com/private-5c9a8432d64584f46e9a7715cb0ac951/basic.ics",
					  name: "personal"
				  }
				],
				views: [
				  {
					mode: "daily",
					//name: "Default",	
					position:"middle",
					calendars: ['work', 'personal']
				  },
				],
				scenes: [
				  {
					name: "DEFAULT",
					//views:[],
				  },
				],
			},
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
