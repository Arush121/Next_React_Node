import React from 'react'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    if (req) {
      const { db } = req
      const list = await db.collection('Book').find().sort({ createdAt: -1 })
        .toArray()
      return { list }
    }
  }

  constructor () {
    super()
    this.state = { formData: { author: '', title: '' } }
  }


  render () {
   const list = this.state.list || this.props.list
   const { formData } = this.state
    return (
      <div id="container">
        
        <h1>
          Reading List
        </h1>
        <div id="reading-list">
          <ul>
            {
              list.map(book => (
                <div key={book._id}>
                  <span className="description">
                    <i>{book.title}</i> by {book.author}
                  </span>
                </div>
              ))
            }
          </ul>
        </div>
        <style jsx>{`
          div {
            font-family: 'Helvetica', 'sans-serif';
          }
          #container {
            width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          h1 {
            color: #ccbc1d;
          }
          button {
            background-color: #ff257b;
            color: #ffffff;
            font-weight: bold;
            border: 0px;
            border-radius: 2px;
            padding: 5px;
            padding-left: 8px;
            padding-right: 8px;
            margin: 5px;
          }
          input {
            padding: 5px;
            border: 0px;
            background-color: #f0f0f0;
            margin: 5px;
          }
          .description {
            position: relative;
            top: -0.2em;
          }
          .remove {
            cursor: pointer;
            color: #ff257b;
            font-size: 1.5em;
          }
        `}</style>
      </div>
    )
  }
}
