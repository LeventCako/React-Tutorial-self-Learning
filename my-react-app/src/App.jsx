import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button2 from './Button2.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import OnChange from './onChange.jsx'
import ColorPicker from './ColorPicker.jsx'
import UpdaterFunction from './UpdaterFunction.jsx'
import UpdateObject from './updateObjects.jsx'
import UpdateArrayState from './UpdateArrayState.jsx'
import ArrayObjectsUpdate from './ArrayObjectsUpdate.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffect from './UseEffect.jsx'
import ClockApp from './DigitalClockApp.jsx'
import UseContext from './UseContext.jsx'
import UseRef from './UseRef.jsx'
function App() {
 


  const fruits = [{id: 1, name: "Apple", cal: "apple"}, 
                  {id: 2, name: "Orange", cal: 45}, 
                  {id: 3, name: "banana", cal: 105}, 
                  {id: 4, name: "Coconut", cal: 159}, 
                  {id: 5, name: "Pineapple", cal: 37}];


  const vegetables = [{id: 6, name: "potatoes", cal: 110}, 
                      {id: 7, name: "celery", cal: 15}, 
                      {id: 8, name: "carrots", cal: 25}, 
                      {id: 9, name: "corn", cal: 63}, 
                      {id: 10, name: "broccoli", cal: 50}];
                    
                    






  return(
    /* YOu can only return one element in an return method
    thats why we use another <> so that we can store more elements */
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Button></Button>
    {/* Heere we use Props: so we can share data
     between components(child/parent) */}
      <Student name="Spongebob" age={Number(30)} isStudent={true}/>
      <Student name="Patrick" age= {Number(42)} isStudent={false}></Student>
      <Student name="squidward" age= {Number(50)} isStudent={false}></Student>
      <Student name="Sandy" age= {Number(27)} isStudent={true}></Student>
      {/* Here the DefaultProps will come and be the values of the undefined
      props */}
      <Student ></Student>
      <UserGreeting isLoggedIn={Math.round(Math.random()* 1) + 0} username="Mckey19"></UserGreeting>
      {fruits.length > 0 ? 
      <List items={fruits} category="Fruits"/> : null}

      {vegetables.length > 0 ? 
      <List items={vegetables} category="Vegetables" ></List> : null}
      <Button2></Button2>
      <ProfilePicture></ProfilePicture>
      <MyComponent></MyComponent>
      <Counter></Counter>
      <OnChange></OnChange>
      <ColorPicker></ColorPicker>
      <UpdaterFunction></UpdaterFunction>
      <UpdateObject></UpdateObject>
      <UpdateArrayState></UpdateArrayState>
      <ArrayObjectsUpdate></ArrayObjectsUpdate>
      <ToDoList></ToDoList>
      <UseEffect></UseEffect>
      <ClockApp></ClockApp>
      <UseContext></UseContext>
      <UseRef></UseRef>
    </>



   
  )
}

export default App
