Bridge.merge(new System.Globalization.CultureInfo("cgg-UG", true), {
    englishName: "Chiga (Uganda)",
    nativeName: "Rukiga (Uganda)",

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
        currencySymbol: "USh",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
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
        abbreviatedDayNames: ["SAN","ORK","OKB","OKS","OKN","OKT","OMK"],
        abbreviatedMonthGenitiveNames: ["KBZ","KBR","KST","KKN","KTN","KMK","KMS","KMN","KMW","KKM","KNK","KNB",""],
        abbreviatedMonthNames: ["KBZ","KBR","KST","KKN","KTN","KMK","KMS","KMN","KMW","KKM","KNK","KNB",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Sande","Orwokubanza","Orwakabiri","Orwakashatu","Orwakana","Orwakataano","Orwamukaaga"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Okwokubanza","Okwakabiri","Okwakashatu","Okwakana","Okwakataana","Okwamukaaga","Okwamushanju","Okwamunaana","Okwamwenda","Okwaikumi","Okwaikumi na kumwe","Okwaikumi na ibiri",""],
        monthNames: ["Okwokubanza","Okwakabiri","Okwakashatu","Okwakana","Okwakataana","Okwamukaaga","Okwamushanju","Okwamunaana","Okwamwenda","Okwaikumi","Okwaikumi na kumwe","Okwaikumi na ibiri",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["SAN","ORK","OKB","OKS","OKN","OKT","OMK"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
