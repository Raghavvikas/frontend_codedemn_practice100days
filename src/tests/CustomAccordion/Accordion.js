import { useState } from "react"

export default function Accordion() {
    const questions = [
        {
            question: 'Section 1',
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
        },
        {
            question: 'Section 2',
            answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            question: 'Section 3',
            answer: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        }
    ];

    const [question, setQuestion] = useState(questions)

    return (
        <>
            <div className="accordion">
                {question.map((value, index) => {
                    return (
                        <Item question={value.question} answer={value.answer} index={index} />
                    )
                })}
            </div >
        </>
    )
}

const Item = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="question" key={index} onClick={() => setIsOpen(!isOpen)}>
                {question}
            </div>
            <div>{isOpen ? '-' : '+'}</div>
            {
                isOpen && <div className="answer">{answer}</div>
            }
        </>
    )
}

export { Item }
