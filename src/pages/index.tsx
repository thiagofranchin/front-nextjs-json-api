import Header from '../components/Header'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Header title="Home" />
      <Section bgColor="light" classContainer="py-5">
        <div className="col-md-8">
          <p>
            This is a Headless application that uses the following technologies
          </p>
          <ul>
            <li>
              Back-end: <b className="text-primary">Drupal + JSON:API</b>
            </li>
            <li>
              Front-end: <b className="text-primary">NextJS</b>
            </li>
          </ul>
        </div>
      </Section>
    </>
  )
}
