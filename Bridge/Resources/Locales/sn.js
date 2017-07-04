Bridge.merge(new System.Globalization.CultureInfo("sn", true), {
    englishName: "Shona",
    nativeName: "chiShona",

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
        abbreviatedDayNames: ["Svo","Muv","Chip","Chit","Chin","Chis","Mug"],
        abbreviatedMonthGenitiveNames: ["Ndi","Kuk","Kur","Kub","Chv","Chk","Chg","Nya","Gun","Gum","Mb","Zvi",""],
        abbreviatedMonthNames: ["Ndi","Kuk","Kur","Kub","Chv","Chk","Chg","Nya","Gun","Gum","Mb","Zvi",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Svondo","Muvhuro","Chipiri","Chitatu","China","Chishanu","Mugovera"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, d MMMM yyyy h:mm:ss tt",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Ndira","Kukadzi","Kurume","Kubvumbi","Chivabvu","Chikumi","Chikunguru","Nyamavhuvhu","Gunyana","Gumiguru","Mbudzi","Zvita",""],
        monthNames: ["Ndira","Kukadzi","Kurume","Kubvumbi","Chivabvu","Chikumi","Chikunguru","Nyamavhuvhu","Gunyana","Gumiguru","Mbudzi","Zvita",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Svo","Muv","Chip","Chit","Chin","Chis","Mug"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
