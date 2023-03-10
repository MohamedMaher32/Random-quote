var list=[
    {contect: `“Be yourself; everyone else is already taken.”`,
     auther:  `--Oscar Wilde `
    } ,
    {contect: `“You only live once, but if you do it right, once is enough.”`,
     auther:  `--Mae West `
    } ,
    {contect: `“So many books, so little time.”`,
     auther:  `--Frank Zappa`
    } ,
    {contect: `“A room without books is like a body without a soul.”`,
     auther:  `--Marcus Cicero`
    },
    {contect: `“Be the change that you wish to see in the world.”`,
     auther:  `--Mahatma Gandhi`
    }
]
function text(){
    var quote = Math.floor(Math.random()*5)
    document.getElementById("contect").innerHTML = list[quote].contect
    document.getElementById("auther").innerHTML = list[quote].auther
}
