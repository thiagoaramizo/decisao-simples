import * as Form from "@radix-ui/react-form";
import { ParteInput } from "./form/ParteInput";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";

export function DecisaoForm () {

  const {decisao, setDecisao} = useContext(AppContext)
  const [autores, setAutores] = useState([
    {
      id: '1',
      nome: ''
    }
  ])
  const [reus, setReus] = useState([
    {
      id: '1',
      nome: ''
    }
  ])


  return (
    <Form.Root className="FormRoot">


      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
        <ParteInput name="autor" label="Qual o nome do autor?" value={autores[0].nome} />
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-white mt-6 hidden md:block" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        <ParteInput name="reu" label="Qual o nome do réu?" value={reus[0].nome} />
      </div>


      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
      <Form.Field className="FormField" name="question">
          <Form.Label className="FormLabel">Question</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter a question
          </Form.Message>
          <Form.Control asChild>
          <textarea className="Textarea" required />
        </Form.Control>
      </Form.Field>
      </div>
      

      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Post question
        </button>
      </Form.Submit>

    </Form.Root>
  )
}