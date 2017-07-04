Bridge.merge(new System.Globalization.CultureInfo("es-NI", true), {
    englishName: "Spanish (Nicaragua)",
    nativeName: "español (Nicaragua)",

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
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "C$",
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
        abbreviatedDayNames: ["dom.","lun.","mar.","mié.","jue.","vie.","sáb."],
        abbreviatedMonthGenitiveNames: ["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic.",""],
        abbreviatedMonthNames: ["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic.",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, d 'de' MMMM 'de' yyyy HH:mm:ss",
        longDatePattern: "dddd, d 'de' MMMM 'de' yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d 'de' MMMM",
        monthGenitiveNames: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
        monthNames: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["DO","LU","MA","MI","JU","VI","SA"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM 'de' yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
