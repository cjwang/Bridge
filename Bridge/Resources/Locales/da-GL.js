Bridge.merge(new System.Globalization.CultureInfo("da-GL", true), {
    englishName: "Danish (Greenland)",
    nativeName: "dansk (Grønland)",

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
        percentGroupSeparator: ".",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "kr.",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["søn.","man.","tir.","ons.","tor.","fre.","lør."],
        abbreviatedMonthGenitiveNames: ["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec.",""],
        abbreviatedMonthNames: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd 'den' d. MMMM yyyy h.mm.ss tt",
        longDatePattern: "dddd 'den' d. MMMM yyyy",
        longTimePattern: "h.mm.ss tt",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december",""],
        monthNames: ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["sø","ma","ti","on","to","fr","lø"],
        shortTimePattern: "h.mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ".",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
