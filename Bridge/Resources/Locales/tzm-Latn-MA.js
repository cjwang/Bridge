Bridge.merge(new System.Globalization.CultureInfo("tzm-Latn-MA", true), {
    englishName: "Central Atlas Tamazight (Latin, Morocco)",
    nativeName: "Tamaziɣt n laṭlaṣ (Meṛṛuk)",

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
        currencySymbol: "MAD",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Asa","Ayn","Asn","Akr","Akw","Asm","Asḍ"],
        abbreviatedMonthGenitiveNames: ["Yen","Yeb","Mar","Ibr","May","Yun","Yul","Ɣuc","Cut","Kṭu","Nwa","Duj",""],
        abbreviatedMonthNames: ["Yen","Yeb","Mar","Ibr","May","Yun","Yul","Ɣuc","Cut","Kṭu","Nwa","Duj",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Asamas","Aynas","Asinas","Akras","Akwas","Asimwas","Asiḍyas"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dddd, d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Yennayer","Yebrayer","Mars","Ibrir","Mayyu","Yunyu","Yulyuz","Ɣuct","Cutanbir","Kṭuber","Nwanbir","Dujanbir",""],
        monthNames: ["Yennayer","Yebrayer","Mars","Ibrir","Mayyu","Yunyu","Yulyuz","Ɣuct","Cutanbir","Kṭuber","Nwanbir","Dujanbir",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Asa","Ayn","Asn","Akr","Akw","Asm","Asḍ"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
