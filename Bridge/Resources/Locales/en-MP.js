Bridge.merge(new System.Globalization.CultureInfo("en-MP", true), {
    englishName: "English (Northern Mariana Islands)",
    nativeName: "English (Northern Mariana Islands)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "$",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],
        abbreviatedMonthNames: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
        longDatePattern: "dddd, MMMM d, yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["January","February","March","April","May","June","July","August","September","October","November","December",""],
        monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "M/d/yyyy",
        shortestDayNames: ["Su","Mo","Tu","We","Th","Fr","Sa"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
