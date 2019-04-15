var wavesurfer = WaveSurfer.create({
    container:  document.querySelector('#waveform'),
    waveColor: '#c9c9c9',
    progressColor: '#89bdd3',
    barWidth: 4,
    plugins: [
        WaveSurfer.cursor.create({
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
                'background-color': '#c9c9c9',
                color: '#000',
                padding: '2px',
                'font-size': '10px'
            }
        })
    ]
});

wavesurfer.load('./music/bensound-creativeminds.wav');

wavesurfer.on('ready', function(){
    $('#load').hide('fade', 1000);
})

function secToMin(seconds){
    var min = 0;
    while(seconds > 60){
        seconds = seconds - 60;
        min++;
    }
    seconds = Math.floor(seconds);
    seconds.toString();
    min.toString();
    min = min + ":" + seconds;
    return min;
}

function setTimeStamp(){
    var curTime, totalTime;
    curTime = wavesurfer.getCurrentTime();
    curTime = curTime - (curTime%(1/10));
    if(curTime<0){
        curTime = 0;
    }

    totalTime = wavesurfer.getDuration();
    totalTime = totalTime - (totalTime%(1/10));

    curTime = secToMin(curTime);
    totalTime = secToMin(totalTime);

    $('#timestamp').html(curTime +"/"+ totalTime);
}


wavesurfer.on('ready', function() {
    setInterval(setTimeStamp, 100);
})


$('#mute').on('click',function(){
    if($('#mute').attr('src') == "https://img.icons8.com/material-rounded/48/000000/medium-volume.png"){
        $('#mute').attr('src','https://img.icons8.com/material-rounded/48/000000/mute.png');
    }else{
        $('#mute').attr('src','https://img.icons8.com/material-rounded/48/000000/medium-volume.png');
    }
})
$('#play').on('click',function(){
    if($('#play').attr('src') == "https://img.icons8.com/material-rounded/48/000000/play-button-circled.png"){
        $('#play').attr('src','https://img.icons8.com/material-rounded/48/000000/circled-pause.png');
    }else{
        $('#play').attr('src','https://img.icons8.com/material-rounded/48/000000/play-button-circled.png');
    }
})
$('#like').on('click',function(){
    if($('#like').css('filter') == "contrast(1) invert(0) sepia(0) saturate(0)"){
        $('#like').css('filter','contrast(1000%) invert(100%) sepia(100%) saturate(10000%)');
    }else{
        $('#like').css('filter','contrast(1) invert(0) sepia(0) saturate(0)');
    }
})