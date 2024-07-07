const Fore = {
    Reset : "\x1b[39m",
    Black : "\x1b[30m",
    Red : "\x1b[31m",
    Green : "\x1b[32m",
    Yellow : "\x1b[33m",
    Blue : "\x1b[34m",
    Magenta : "\x1b[35m",
    Cyan : "\x1b[36m",
    White : "\x1b[37m",
    Gray : "\x1b[90m",
    BrightRed : "\x1b[91m",
    BrightGreen : "\x1b[92m",
    BrightYellow : "\x1b[93m",
    BrightBlue : "\x1b[94m",
    BrightMagenta : "\x1b[95m",
    BrightCyan : "\x1b[96m",
    BrightWhite : "\x1b[97m",
    rgb : (r,g,b) => {
        return `\x1b[38;2;${r};${g};${b}m`;
    },
    Bit8 : n => {
        return `\x1b[38;5;${n}m`;
    }
};

const Back = {
    Reset : "\x1b[49m",
    Black : "\x1b[40m",
    Red : "\x1b[41m",
    Green : "\x1b[42m",
    Yellow : "\x1b[43m",
    Blue : "\x1b[44m",
    Magenta : "\x1b[45m",
    Cyan : "\x1b[46m",
    White : "\x1b[47m",
    Gray : "\x1b[100m",
    BrightRed : "\x1b[101m",
    BrightGreen : "\x1b[102m",
    BrightYellow : "\x1b[103m",
    BrightBlue : "\x1b[104m",
    BrightMagenta : "\x1b[105m",
    BrightCyan : "\x1b[106m",
    BrightWhite : "\x1b[107m",
    rgb : (r,g,b) => {
        return `\x1b[48;2;${r};${g};${b}m`;
    },
    Bit8 : n => {
        return `\x1b[48;5;${n}m`;
    }
};

const Style = {
    Bold : "\x1b[1m",
    Dim : "\x1b[2m",
    Italic : "\x1b[3m",
    Underscore : "\x1b[4m",
    SlowBlink : "\x1b[5m",
    RapidBlink: "\x1b[6m",
    Reverse : "\x1b[7m",
    Hidden : "\x1b[8m",
    CrossedOut : "\x1b[9m",
    Gothic : "\x1b[20m",
    DoublyUnderscore : "\x1b[21m",
    NotDim : "\x1b[22m",
    NotItalic : "\x1b[23m",
    NotUnderscore : "\x1b[24m",
    NotBlink : "\x1b[25m",
    ProportionalSpace : "\x1b[26m",
    NotReverse : "\x1b[27m",
    NotHidden : "\x1b[28m",
    NotCrossedOut : "\x1b[29m",
    DisableProportionalSpace : "\x1b[50m",
    Overscore : "\x1b[53m",
    NotOverscore : "\x1b[55m",
};

const Reset = "\x1b[0m";

function testLog() {
    let out = "";
    for (let i = 0; i < Object.keys(Fore).slice(0, -2).length; i++) {
        const code = Fore[Object.keys(Fore).slice(0, -2)[i]];
        out += code + Object.keys(Fore).slice(0, -2)[i] + Fore.Reset + " ";
    }
    for (let i = 0; i < Object.keys(Back).slice(0, -2).length; i++) {
        const code = Back[Object.keys(Back).slice(0, -2)[i]];
        out += code + Object.keys(Back).slice(0, -2)[i] + Back.Reset + " ";
    }
    for (let i = 0; i < Object.keys(Style).length; i++) {
        const code = Style[Object.keys(Style)[i]];
        out += code + Object.keys(Style)[i] + Reset + " ";
    }
    console.log(out);
}

module.exports = { Fore, Back, Reset, Style, testLog };

