import dataQuestions from '../dataQuestions'
import Info from '../components/Info'
import image from '../img/photo1.jpg'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const Home = () => {
  const arrayOfTexts = ["Looking for a unique coffee experience? We've got you covered.", "At our shop, every bean is carefully selected and roasted to perfection.", "Start your journey to the perfect cup today."]

  return <div className='container'>
    <div className='introduction-box'>
      <img src={image} />
      <h1>Welcome to our coffee shop!</h1>
      <p>{arrayOfTexts[Math.floor(Math.random() * 3)]}</p>
      <h2>All information in one place.</h2>
    </div>
    <div className='question-box'>
      {
        dataQuestions.map((oneQuestion) => {
          return <div className='one-question' key={oneQuestion.id}>
            <img src={oneQuestion.image} />
            <h3>{oneQuestion.title}</h3>
            <p>{oneQuestion.description}</p>
          </div>
        })
      }
    </div>
    <Info></Info>
    <Link to="/form">Generate a picture of coffee<FaArrowRight /></Link>
  </div>
}

export default Home