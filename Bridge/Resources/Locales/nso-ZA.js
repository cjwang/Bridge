Bridge.merge(new System.Globalization.CultureInfo("nso-ZA", true), {
    englishName: "Sesotho sa Leboa (South Africa)",
    nativeName: "Sesotho sa Leboa (Afrika Borwa)",

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
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "R",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Son","Mos","Bed","Rar","Ne","Hla","Mok"],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mat","Apo","Mei","Jun","Jul","Ago","Set","Okt","Nof","Dis",""],
        abbreviatedMonthNames: ["Jan","Feb","Mat","Apo","Mei","Jun","Jul","Ago","Set","Okt","Nof","Dis",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["Sontaga","Mosupalogo","Labobedi","Laboraro","Labone","Labohlano","Mokibelo"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy MMMM d, dddd HH:mm:ss",
        longDatePattern: "yyyy MMMM d, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Janaware","Feberware","Matšhe","Aporele","Mei","June","Julae","Agostose","Setemere","Oktobore","Nofemere","Disemere",""],
        monthNames: ["Janaware","Feberware","Matšhe","Aporele","Mei","June","Julae","Agostose","Setemere","Oktobore","Nofemere","Disemere",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["Son","Mos","Bed","Rar","Ne","Hla","Mok"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
