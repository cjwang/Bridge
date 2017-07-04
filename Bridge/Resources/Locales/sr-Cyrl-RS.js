Bridge.merge(new System.Globalization.CultureInfo("sr-Cyrl-RS", true), {
    englishName: "Serbian (Cyrillic, Serbia)",
    nativeName: "српски (Србија)",

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
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "дин.",
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
        abbreviatedDayNames: ["нед.","пон.","ут.","ср.","чет.","пет.","суб."],
        abbreviatedMonthGenitiveNames: ["јан.","феб.","март","апр.","мај","јун","јул","авг.","септ.","окт.","нов.","дец.",""],
        abbreviatedMonthNames: ["јан.","феб.","март","апр.","мај","јун","јул","авг.","септ.","окт.","нов.","дец.",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["недеља","понедељак","уторак","среда","четвртак","петак","субота"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d. MMMM yyyy. H:mm:ss",
        longDatePattern: "d. MMMM yyyy.",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],
        monthNames: ["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy.",
        shortestDayNames: ["не","по","ут","ср","че","пе","су"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy.",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
