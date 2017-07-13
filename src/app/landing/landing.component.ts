import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public router:Router) {
    // $('ba-sidebar').css({'display':'none'});
    // $('ba-page-top').css({'display':'none'});
   }

   ngOnInit(){
    // document.getElementById('bgvid').addEventListener('ended',myHandler,false);
    // function myHandler(e) {
    //     console.log('ended')
    //     // Removes the video once it's done playing and places a background image with a transition!! without this on end the last video frame is over our background"
    //     $('#fast-foward').remove();
    //     $("#bgvid").remove();
    //     $('.video-div').css({ 'background': 'url("assets/images/10.jpeg") no-repeat',
    //                           'background-size': 'cover'});
    // }
    // $('#fast-foward').click(function(){
    //   $("#bgvid").remove();
    //   $('#fast-foward').remove();
    //   $('.video-div').css({ 'background': 'url("assets/images/10.jpeg") no-repeat',
    //                         'background-size': 'cover'});
    // });

    // ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  chars:any;
  queue:any;
  frame:any;
  frameRequest:any;
  resolve:any;
  el:any;
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Welcome to my Portfolio!',
  'My name is Daniel',
  'And I probably code too much',
  "I also have a github addiction, with over 1100 commits in the last 5 months",
  "But that's okay because I love it!",
  "Thanks for visiting",
  'Bye!'
  // 'between knowing the path',
  // 'and walking the path'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  if(counter < phrases.length && counter != 3){
  // $(".text").css({'margin':'300px !important;'});
    fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  }else if( counter == 3 ){
    fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1600)
    })
  }else{
    $('.text').remove();
    this.router.navigate(['/pages']);
  }
  counter = (counter + 1)
}

next()
   }


}
