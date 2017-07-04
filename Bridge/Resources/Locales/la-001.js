Bridge.merge(new System.Globalization.CultureInfo("la-001", true), {
    englishName: "Latin (World)",
    nativeName: "lingua latīna (World)",

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
        percentNegativePattern: 0,
        currencySymbol: "XDR",
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
        abbreviatedDayNames: ["Sol","Lun","Mar","Mer","Jov","Ven","Sat"],
        abbreviatedMonthGenitiveNames: ["Ian","Feb","Mar","Apr","Mai","Iun","Quint","Sext","Sept","Oct","Nov","Dec",""],
        abbreviatedMonthNames: ["Ian","Feb","Mar","Apr","Mai","Iun","Quint","Sext","Sept","Oct","Nov","Dec",""],
        amDesignator: "",
        dateSeparator: "/",
        dayNames: ["Solis","Lunae","Martis","Mercurii","Jovis","Veneris","Saturni"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM dd",
        monthGenitiveNames: ["Ianuarius","Februarius","Martius","Aprilis","Maius","Iunius","Quintilis","Sextilis","September","October","November","December",""],
        monthNames: ["Ianuarius","Februarius","Martius","Aprilis","Maius","Iunius","Quintilis","Sextilis","September","October","November","December",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["So","Lu","Ma","Me","Jo","Ve","Sa"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
