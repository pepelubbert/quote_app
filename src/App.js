import './App.css';
import React, { useState } from 'react';

const proverbs = [
  {"author": "Albert Einstein", "phrase": "Imagination is more important than knowledge"},
  {"author": "Socrates", "phrase": "I know that I am intelligent, because I know that I know nothing."},
  {"author": "Isaac Newton", "phrase": "If I have seen further, it is by standing on the shoulders of giants."},
  {"author": "Plato", "phrase": "Knowledge which is acquired under compulsion obtains no hold on the mind."},
  {"author": "Aristotle", "phrase": "The more you know, the more you know you don't know."},
  {"author": "Nelson Mandela", "phrase": "Education is the most powerful weapon which you can use to change the world."},
  {"author": "Confucius", "phrase": "Real knowledge is to know the extent of one's ignorance."},
  {"author": "Leonardo da Vinci", "phrase": "The noblest pleasure is the joy of understanding."},
  {"author": "Benjamin Franklin", "phrase": "An investment in knowledge pays the best interest."},
  {"author": "Stephen Hawking", "phrase": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."},
  {"author": "Malcolm X", "phrase": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."},
  {"author": "Ralph Waldo Emerson", "phrase": "Knowledge is knowing what to do; wisdom is knowing what not to do."},
  {"author": "Neil Armstrong", "phrase": "Mystery creates wonder and wonder is the basis of man's desire to understand."},
  {"author": "Henry David Thoreau", "phrase": "It is not enough to be busy. So are the ants. The question is: What are we busy about?"},
  {"author": "Mark Twain", "phrase": "It's not what you don't know that kills you, it's what you know for sure that ain't true."},
  {"author": "Winston Churchill", "phrase": "Personally, I'm always ready to learn, although I do not always like being taught."},
  {"author": "Voltaire", "phrase": "Doubt is an uncomfortable condition, but certainty is a ridiculous one."},
  {"author": "Maya Angelou", "phrase": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."},
  {"author": "Richard Feynman", "phrase": "I learned very early the difference between knowing the name of something and knowing something."},
  {"author": "Dalai Lama", "phrase": "Share your knowledge. It is a way to achieve immortality."},
  {"author": "Martin Luther King Jr.", "phrase": "Intelligence plus character-that is the goal of true education."},
  {"author": "Bruce Lee", "phrase": "The successful warrior is the average man, with laser-like focus."},
  {"author": "Thomas Edison", "phrase": "Genius is one percent inspiration and ninety-nine percent perspiration."},
  {"author": "William Shakespeare", "phrase": "Ignorance is the curse of God; knowledge is the wing wherewith we fly to heaven."},
  {"author": "Mahatma Gandhi", "phrase": "Live as if you were to die tomorrow. Learn as if you were to live forever."},
  {"author": "Eleanor Roosevelt", "phrase": "Do one thing every day that scares you."},
  {"author": "John F. Kennedy", "phrase": "The greater our knowledge increases, the greater our ignorance unfolds."},
  {"author": "Milton Berle", "phrase": "If opportunity doesn't knock, build a door."},
  {"author": "Helen Keller", "phrase": "The only thing worse than being blind is having sight but no vision."},
  {"author": "Abraham Lincoln", "phrase": "I am a slow walker, but I never walk back."},
  {"author": "Stephen Covey", "phrase": "I am not a product of my circumstances. I am a product of my decisions."},
  {"author": "Vince Lombardi", "phrase": "The only place success comes before work is in the dictionary."},
  {"author": "Napoleon Bonaparte", "phrase": "Impossible is a word to be found only in the dictionary of fools."},
  {"author": "Walt Disney", "phrase": "All our dreams can come true, if we have the courage to pursue them."},
  {"author": "Steve Jobs", "phrase": "I want to put a ding in the universe."},
  {"author": "Elon Musk", "phrase": "The first step is to establish that something is possible; then probability will occur."},
  {"author": "Bill Gates", "phrase": "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it."},
  {"author": "Warren Buffett", "phrase": "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently."},
  {"author": "Oprah Winfrey", "phrase": "The biggest adventure you can ever take is to live the life of your dreams."},
  {"author": "Albert Camus", "phrase": "The only way to deal with fear is to face it head-on."},
  {"author": "Jim Rohn", "phrase": "Success is not to be pursued; it is to be attracted by the person you become."},
  {"author": "Tony Robbins", "phrase": "The quality of your life is the quality of your relationships."},
  {"author": "Brian Tracy", "phrase": "Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation."},
  {"author": "Mark Cuban", "phrase": "Sweat equity is the most valuable equity there is. Know your business and industry better than anyone else in the world. Love what you do or don't do it."},
  {"author": "Ayn Rand", "phrase": "The question isn't who is going to let me; it's who is going to stop me."},
  {"author": "Michael Jordan", "phrase": "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."},
  {"author": "Mother Teresa", "phrase": "If you judge people, you have no time to love them."},
  {"author": "Dale Carnegie", "phrase": "Success is getting what you want. Happiness is wanting what you get."},
  {"author": "Maya Angelou", "phrase": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."},
  {"author": "Confucius", "phrase": "The man who asks a question is a fool for a minute, the man who does not is a fool for life."},
  {"author": "Malcolm X", "phrase": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."},
  {"author": "Benjamin Franklin", "phrase": "Tell me and I forget. Teach me and I remember. Involve me and I learn."},
  {"author": "Socrates", "phrase": "I know that I am intelligent, because I know that I know nothing."},
  {"author": "Plato", "phrase": "At the touch of love everyone becomes a poet."},
  {"author": "Aristotle", "phrase": "We are what we repeatedly do. Excellence, then, is not an act, but a habit."},
  {"author": "Ralph Waldo Emerson", "phrase": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."},
  {"author": "Henry David Thoreau", "phrase": "Go confidently in the direction of your dreams. Live the life you have imagined."},
  {"author": "Mark Twain", "phrase": "The secret of getting ahead is getting started."},
  {"author": "Ernest Hemingway", "phrase": "The world breaks everyone, and afterward, some are strong at the broken places."},
  {"author": "F. Scott Fitzgerald", "phrase": "For what it's worth: it's never too late or, in my case, too early to be whoever you want to be. There's no time limit, stop whenever you want. You can change or stay the same, there are no rules to this thing. We can make the best or the worst of it. I hope you make the best of it. And I hope you see things that startle you. I hope you feel things you never felt before. I hope you meet people with a different point of view. I hope you live a life you're proud of. If you find that you're not, I hope you have the courage to start all over again."},
  {"author": "Stephen King", "phrase": "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work."},
  {"author": "J.K. Rowling", "phrase": "We do not need magic to transform our world. We carry all the power we need inside ourselves already."},
  {"author": "George Orwell", "phrase": "Freedom is the right to tell people what they do not want to hear."},
  {"author": "Haruki Murakami", "phrase": "Pain is inevitable. Suffering is optional."},
  {"author": "Marcus Aurelius", "phrase": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking."},
  {"author": "Plato", "phrase": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."},
  {"author": "Anne Frank", "phrase": "Think of all the beauty still left around you and be happy."},
  {"author": "Mother Teresa", "phrase": "Not all of us can do great things. But we can do small things with great love."},
  {"author": "Aristotle", "phrase": "We are what we repeatedly do. Excellence, then, is not an act, but a habit."},
  {"author": "Hermann Hesse", "phrase": "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us."},
  {"author": "Gabriel Garcia Marquez", "phrase": "No medicine cures what happiness cannot."},
  {"author": "Ralph Waldo Emerson", "phrase": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."},
  {"author": "Mark Twain", "phrase": "If you tell the truth, you don't have to remember anything."},
  {"author": "John Green", "phrase": "The marks humans leave are too often scars."},
  {"author": "J.K. Rowling", "phrase": "It does not do to dwell on dreams and forget to live."},
  {"author": "Sylvia Plath", "phrase": "I shut my eyes and all the world drops dead; I lift my eyes and all is born again."},
  {"author": "Ernest Hemingway", "phrase": "The world breaks everyone, and afterward, some are strong at the broken places."},
  {"author": "William Shakespeare", "phrase": "All the world's a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts."},
  {"author": "Maya Angelou", "phrase": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."},
  {"author": "Albert Einstein", "phrase": "The true sign of intelligence is not knowledge but imagination."},
  {"author": "Martin Luther King Jr.", "phrase": "The time is always right to do what is right."},
  {"author": "Leo Tolstoy", "phrase": "If you want to be happy, be."},
  {"author": "Friedrich Nietzsche", "phrase": "And those who were seen dancing were thought to be insane by those who could not hear the music."},
  {"author": "Virginia Woolf", "phrase": "One cannot think well, love well, sleep well, if one has not dined well."},
  {"author": "Benjamin Franklin", "phrase": "An investment in knowledge pays the best interest."},
  {"author": "Thomas Edison", "phrase": "I have not failed. I've just found 10,000 ways that won't work."}
]





function randomQuote () {
  return proverbs[Math.floor(Math.random() * proverbs.length)]
}


function randomColor() {
  return Math.random()*360;
}


function setCssVariables(color) {
  const myElement = document.querySelector(':root');
  myElement.style.setProperty('--text-color',`hsl(${color},100%,30%)`);
  myElement.style.setProperty('--text-color-2',`hsl(${color+30},100%,30%)`);
  myElement.style.setProperty('--background-color',`hsl(${color+180},20%,85%)`);
}

function App() {
    // Define a state variable called "Quote" and initialize it to a random number between 0 and proverbs.length -1
    const [quote, setQuote] = useState(randomQuote());
    const [color, setColor] = useState(randomColor());    
    const [fadeOut, setFadeOut] = useState(false);
    setCssVariables(color);  


    // This function will be called when the "Generate Random Number" button is clicked
    function handleClick() {
      setFadeOut(true);
      setTimeout(() => {
        requestAnimationFrame(() => {
          setFadeOut(false);
          setQuote(randomQuote());
          setColor(randomColor());
          setCssVariables(color)});
      }, 250);
      
    }

  return (
    
    <div id = "wrap">
      <div id="quote-box" className={fadeOut?"text fade-out":"text"} >
        <div id="text">
        {quote.phrase}    
          <div id="author">
          {quote.author}
          </div>
        </div>
      <a id="tweet-quote" className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${quote.phrase} - ${quote.author}`}>
        <i className="bi bi-twitter"></i>
      </a>
      <div>
      </div>
      <button id="new-quote" onClick={handleClick}>
      New Quote
      </button>
    </div>
  </div>)
}







export default App;
