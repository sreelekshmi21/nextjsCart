

export const metadata = {
    title: 'About',
    description: 'XXXX-VVV',
}

export default function About() {
    return (
      <div>
        <h2>About Page</h2>
        {/* <Image src="/bird-portrait.jpg" alt="BIRD" width="500" height="500"/> */}
        <section className="bg-twitter-blue m-12 text-center p-12 md:p-14 lg:p-16 xl:p-20">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        {/* <div className="card">My card</div> */}
      </div>
    )
  }