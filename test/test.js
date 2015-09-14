/**
 * Created by brad.wu on 9/14/2015.
 */
(function () {
    function append(string) {
        html += string + '<br>';
    }

    var html = '';
    var date = moment();
    append(date);
    append(date.format('YYYY/MM/DD'));
    append(date.format('LLLL'));
    append(date.format('LLL'));

    append(date.format('tYY/MM/DD'));

    date = moment('1923/10/02', 'YYYY/MM/DD');
    append(date.format('tYY/MM/DD'));

    date = moment('1920/10/02', 'YYYY/MM/DD');
    append(date.format('tYY/MM/DD'));

    date = moment('1911/10/02', 'YYYY/MM/DD');
    append(date.format('tYY/MM/DD'));

    date = moment('1912/10/02', 'YYYY/MM/DD');
    append(date.format('tYY/MM/DD'));

    date = moment('1912/10/02', 'YYYY/MM/DD');
    append(date.format('民國tYY年MM月DD日'));

    date = moment('10/12/1', 'MM/DD/tYY');
    append(date.format('YYYY/MM/DD'));

    date = moment('10/12/12', 'MM/DD/tYY');
    append(date.format('YYYY/MM/DD'));

    date = moment('10/12/104', 'MM/DD/tYY');
    append(date.format('YYYY/MM/DD'));

    date = moment('11012', 'tYYMMDD');
    append(date.format('YYYY/MM/DD'));

    document.getElementById('main').innerHTML = html;


    //var formattingTokens = /tYY|YY(YY)?|Q|MM?|MMMM?|DD?|Do|DDDD?|X|x|gg(gg)?|ww?|e|dddd?|GG(GG)?|WW?|E|HH?|hh?|a|A|mm?|ss?|SS?S?S?|ZZ?|./g;
    //var array = '民國tYY年MM月DD日'.match(formattingTokens);
    //console.log(array);
}());