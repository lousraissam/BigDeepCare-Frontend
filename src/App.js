import React, {Component} from 'react';
import Cards from './components/Cards';
import { Search } from './components/Search';
import SignInSide from './components/SignIn';
import { BrowserRouter as Router, Routes, Route,Switch, Navigate, Link  } from 'react-router-dom';

import { DashboardMedecin } from './components/DashboardMedecine';
import { DashboardPatient } from './components/DashboardPatient';
import { DashboardAdmin } from './components/DashboardAdmin';
import { DashboardAidS } from './components/DashboardAidS';

class App extends Component{
  
//  state = {
//  monsters: [],
//  searchFiled: ""

// }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => this.setState({monsters : users}))
//   }
//   handleChange=(e)=> {
//      this.setState({searchFiled:e.target.value}, () => console.log(this.state))
//     }
  render(){

    // const { monsters, searchFiled} = this.state
    // const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()))

    return(
     
    <div>

      <Router>

      <Routes>

      <Route exact={true} path="/" element={<SignInSide />} />

      <Route exact={true} path="/dashboard-medecin" element={<DashboardMedecin />} />
      <Route exact={true} path="/dashboard-AideS" element={<DashboardAidS />} />
      <Route exact={true} path="/dashboard-patient" element={<DashboardPatient />} />
      <Route exact={true} path="/dashboard-admin" element={<DashboardAdmin />} />






      </Routes>
    </Router>


   
    {/* <Search handleChange={this.handleChange}
      

        ></Search>
   
      <Cards monsters = {filterMonster}></Cards> */}
    </div>
    )
  }

}


export default App;
