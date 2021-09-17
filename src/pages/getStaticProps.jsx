import Header from '../components/Header'

export default function GetStaticPropsPage(props) {
  return (
    <>
      <Header title={props.items.data.attributes.title} />
      <div className="container py-4">
        <h2>Get Static Props</h2>
        <p>{props.items.data.attributes.body.value}</p>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const resp = await fetch(
    'http://localhost:49175/jsonapi/node/article/45bbf358-d440-48e1-9eb4-e7659ab544cd'
  )
  const items = await resp.json()

  return {
    props: {
      items
    }
  }
}
