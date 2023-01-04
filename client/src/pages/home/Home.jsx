import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories userId={1} />
      <Share userId={1} />
      <Posts userId={1} />
    </div>
  )
}

export default Home