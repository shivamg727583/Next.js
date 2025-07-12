import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function NewSnippet() {
    // const HandleSubmit =(e:any)=>{
    //     console.log(e)
    // }
  return (
    <form className='flex gap-5 flex-col'>
<div className='flex gap-3 flex-col'>
    <Label > Title </Label>
    <Input type='text' placeholder='Enter title' />
</div>
<div className='flex gap-3 flex-col'>
    <Label >Code </Label>
   <Textarea name='code' id='code' />
</div>

<Button type='submit' className='w-fit'>Add</Button>

    </form>
  )
}

export default NewSnippet