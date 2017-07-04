Bridge.merge(new System.Globalization.CultureInfo("nr", true), {
    englishName: "South Ndebele",
    nativeName: "isiNdebele",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "R",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Son","Mvu","Bil","Tha","Ne","Hla","Gqi"],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mat","Apr","Mey","Jun","Jul","Arh","Sep","Okt","Usi","Dis",""],
        abbreviatedMonthNames: ["Jan","Feb","Mat","Apr","Mey","Jun","Jul","Arh","Sep","Okt","Usi","Dis",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["uSonto","uMvulo","uLesibili","Lesithathu","uLesine","ngoLesihlanu","umGqibelo"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy MMMM d, dddd HH:mm:ss",
        longDatePattern: "yyyy MMMM d, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Janabari","uFeberbari","uMatjhi","u-Apreli","Meyi","Juni","Julayi","Arhostosi","Septemba","Oktoba","Usinyikhaba","Disemba",""],
        monthNames: ["Janabari","uFeberbari","uMatjhi","u-Apreli","Meyi","Juni","Julayi","Arhostosi","Septemba","Oktoba","Usinyikhaba","Disemba",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["Son","Mvu","Bil","Tha","Ne","Hla","Gqi"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
