import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Testhome from './Testhome';
import Design from './Design';
import Purchase from './Purchase';
import Trade from './Trade';
import Chart from './Chart';
import Pay from './Pay';
import Tooltip from './Tooltip';
//너가 이미지 삽입을 위해서 여기를 확인했다면 첫번째 public폴더안에 있는 index.html으로 가봐라!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//<script src="https://code.jquery.com/jquery-3.4.1.js"></script>   그럼 이 두문장이 있을것이다 너는 script문을통해 url로 jquery와 fabric을사용해 그림을 그릴수 있게되는것이다.
//<script src="https://unpkg.com/fabric@4.0.0-beta.8/dist/fabric.js"></script>
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                position: 'relative'
            }}>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={Testhome}  //component={Scatch}
                     />
                     
                    <Route
                        exact
                        path='/Design'
                        component={Design}  //component={Scatch}
                     />
                       <Route
                        exact
                        path='/Purchase'
                        component={Purchase}  //component={Scatch}
                     />
                       <Route
                        exact
                        path='/Trade'
                        component={Trade}  //component={Scatch}
                     />
                      <Route
                        exact
                        path='/Chart'
                        component={Chart}  //component={Scatch}
                     />

                    <Route
                        exact
                        path='/Pay'
                        component={Pay}  //component={Scatch}
                     />
                     
                   
                     <Route
                        exact
                        path='/Tooltip'
                        component={Tooltip}  //component={Scatch}
                     />
                     


                </Switch>
            </div>
        );
    }
}

export default App;
