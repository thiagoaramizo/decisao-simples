import * as Form from "@radix-ui/react-form";

interface ParteInputProps {
  name: string
  label: string
  value: string
}

export function ParteInput({name, label, value}: ParteInputProps) {
  return <>
  
    <Form.Field className="FormField w-96" name={name}>
        <Form.Label className="FormLabel text-white font-semibold text-center block w-full pb-2">{label}</Form.Label>
        <Form.Control asChild>
          <input className="Input bg-white/0 text-teal-50 font-semibold text-lg px-2 py-2 rounded-md border-teal-50 border-2 block w-full" value={value} type="text" autoComplete="off" required />
        </Form.Control>
        <Form.Message className="FormMessage block w-full bg-red-500 p-2 mt-2 text-center text-sm rounded-md text-white font-semibold" match="valueMissing">
          Por favor insira o nome ou abreviação
        </Form.Message>
    </Form.Field>

  </>
}