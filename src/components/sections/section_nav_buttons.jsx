import Button from '../buttons/button'

export default function Section_nav_buttons() {

    return (
      <>
        <div className='my-10 flex justify-between gap-5'>
          <Button haveLink={true} isOutline={false} text={'Todos'}/>
          <Button haveLink={true} isOutline={true} text={'Popular'}/>
          <Button haveLink={true} isOutline={true} text={'Carne'}/>
          <Button haveLink={true} isOutline={true} text={'Pollo'}/>
          <Button haveLink={true} isOutline={true} text={'Vegano'}/>
        </div>
      </>
    )
  }