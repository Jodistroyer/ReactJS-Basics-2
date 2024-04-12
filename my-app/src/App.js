import logo from './logo.svg';
import "./index.css";
import './App.css';
import React from 'react';

///////////////////////////////////////////////
//Class Components
///////////////////////////////////////////////

//Higher Order Components
import HOCClickCounter from "./components/ClassComponents/HigherOrderComponents/HOCClickCounter";
import HOCHoverCounter from "./components/ClassComponents/HigherOrderComponents/HOCHoverCounter";

//RenderProps
import RPCounter from "./components/ClassComponents/RenderProps/RPCounter";
import RPClickCounter from "./components/ClassComponents/RenderProps/RPClickCounter";
import RPHoverCounter from "./components/ClassComponents/RenderProps/RPHoverCounter";

//Axios Post + Get
import AxiosPostList from "./components/ClassComponents/Axios/AxiosPostList";
import AxiosGetForm from "./components/ClassComponents/Axios/AxiosGetForm";

//Lists
import User from "./components/ClassComponents/NameList/User";
import Namelist from "./components/ClassComponents/NameList/Namelist";

//Interval Counter
import IntervalClassCounter from "./components/ClassComponents/IntervalCounter/IntervalClassCounter";

//Forms
import Form from "./components/ClassComponents/Forms/Form";

//Error Message
import Throw from "./components/ClassComponents/Errors/Throw";
import ErrorBoundaryPage from "./components/ClassComponents/Errors/ErrorBoundaryPage";

//Mouse
import MouseMove from "./components/ClassComponents/Mouse/MouseMove";

//////////////////////////////////////////////
//React Hooks
//////////////////////////////////////////////
//UseState
import UseStateForm from "./components/ReactHooks/UseState/UseStateForm";
import UseStateCounter from "./components/ReactHooks/UseState/UseStateCounter";
import UseStateObject from "./components/ReactHooks/UseState/UseStateObject";
import UseStateArray from "./components/ReactHooks/UseState/UseStateArray";

//UseEffect
import UECounter from "./components/ReactHooks/UseEffect/UECounter";
import UEClassCondition from "./components/ReactHooks/UseEffect/UEClassCondition";
import UEFunctionCondition from "./components/ReactHooks/UseEffect/UEFunctionCondition";
import UEMouseRenderOnce from "./components/ReactHooks/UseEffect/UEMouseRenderOnce";
import UEMouseContainerCleanup from "./components/ReactHooks/UseEffect/UEMouseContainerCleanup";
import UEIntervalHookCounter from "./components/ReactHooks/UseEffect/UEIntervalHookCounter";
import UEIntervalHookCounter2 from "./components/ReactHooks/UseEffect/UEIntervalHookCounter2";
import UEDataFetchInstant from "./components/ReactHooks/UseEffect/UEDataFetchInstant";
import UEDataFetchOnButtonClick from "./components/ReactHooks/UseEffect/UEDataFetchOnButtonClick";

//UseReducer
import URCounter from "./components/ReactHooks/UseReducer/URCounter";
import URCounter2 from "./components/ReactHooks/UseReducer/URCounter2";
import URCounter3 from "./components/ReactHooks/UseReducer/URCounter3";
import URObjectCounter from "./components/ReactHooks/UseReducer/URObjectCounter";
import URDataFetching from "./components/ReactHooks/UseReducer/URDataFetching";

//UseCallback
import UCParentComponent from "./components/ReactHooks/UseCallback/UCParentComponent";

//UseContext
import UCComponentA from "./components/ReactHooks/UseContext/UCComponentA";
import UCComponentB from "./components/ReactHooks/UseContext/UCComponentB";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();



function App() {
  return (
<div className="App">
      {
        ////////////////////////////////////////////////////////////
        //React Hooks
      }
      <h2 className="mainTitles">[[[React Hooks]]]</h2>
      <h2 className="sectionTitles">------UseContext------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[UseContext]</h2>
      </div>
      <UCParentComponent />

      <h2 className="sectionTitles">------UseContext------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[UseContext]</h2>
      </div>
      <UserContext.Provider value={"James"}>
        <ChannelContext.Provider value={"Google"}>
          <UCComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <h2 className="sectionTitles">------UseReducer------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[UseReducerCounter]</h2>
        <URCounter />
        <h2 className="subTitles">[UseReducerCounter2]</h2>
        <URCounter2 />
        <h2 className="subTitles">[UseReducerCounter3]</h2>
        <URCounter3 />
        <h2 className="subTitles">[URDataFetching]</h2>
        <URDataFetching />
        <h2 className="subTitles">[UseReducerObjectCounter]</h2>
        <URObjectCounter />
      </div>

      <h2 className="sectionTitles">------UseState------</h2>

      <div className="appSpace">
        <h2 className="subTitles">[UseStateCounter]</h2>
        <UseStateCounter></UseStateCounter>
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[UseStateObject]</h2>
        <UseStateObject></UseStateObject>
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[UseStateArray]</h2>
        <UseStateArray></UseStateArray>
      </div>

      <div className="appSpace UseStateForm">
        <h2 className="subTitles">[UEStateForm]</h2>
        <UseStateForm></UseStateForm>
      </div>

      <h2 className="sectionTitles">------UseEffect------</h2>

      <div className="appSpace">
        <h2 className="subTitles">[UECounter]</h2>
        <UECounter></UECounter>
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[UEClassCondition]</h2>
        <UEClassCondition></UEClassCondition>
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[UEFunctionCondition]</h2>
        <UEFunctionCondition></UEFunctionCondition>
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[UEMouseContainerCleanup]</h2>
        <UEMouseContainerCleanup />
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[IntervalHookCounter]</h2>
        <UEIntervalHookCounter />
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[IntervalHookCounter2]</h2>
        <UEIntervalHookCounter2 />
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[DataFetching]</h2>
        <UEDataFetchInstant />
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[DataFetching]</h2>
        <UEDataFetchOnButtonClick />
      </div>

      {
        ////////////////////////////////////////////////////////////
        //Class Components
      }
      <h2 className="mainTitles">[[[Class Components]]]</h2>

      <h2 className="sectionTitles">------HigherOrderComponents------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[HOCClickCounter]</h2>
        <HOCClickCounter />
      </div>
      <div className="appSpace">
        <h2 className="subTitles">[HOCHoverCounter]</h2>
        <HOCHoverCounter />
      </div>

      <h2 className="sectionTitles">------RenderProps------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[RPCounter]</h2>
        <RPCounter
          render={(count, incrementCount) => (
            <RPClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <RPCounter
          render={(count, incrementCount) => (
            <RPHoverCounter count={count} incrementCount={incrementCount} />
          )}
        />
      </div>

      <h2 className="sectionTitles">------IntervalCounter-------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[IntervalClassCounter]</h2>
        <IntervalClassCounter />
      </div>

      <h2 className="sectionTitles">------FORMS-------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[Form]</h2>
        <Form></Form>
      </div>

      <h2 className="sectionTitles">------Axios------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[AxiosGetForm]</h2>
        <AxiosGetForm />
      </div>

      <div className="appSpace">
        <h2 className="subTitles">[AxiosPostList]</h2>
        <AxiosPostList />
      </div>

      <h2 className="sectionTitles">------Name Lists-------</h2>

      <div className="appSpace">
        <h2 className="subTitles">[NameList]</h2>
        <Namelist></Namelist>
      </div>
      <div className="appSpace" title="RENDER PROPS">
        <h2 className="subTitles">[User]</h2>
        <User
          render={(isLoggedIn) =>
            isLoggedIn ? "Hello User. You are logged in." : "Guest"
          }
        />
      </div>

      <h2 className="sectionTitles">------Errors-------</h2>
      <div className="appSpace">
        <h2 className="subTitles">[Throw + ErrorBoundaryPage]</h2>
        <ErrorBoundaryPage>
          <Throw heroName="Robin" />
        </ErrorBoundaryPage>

        <ErrorBoundaryPage>
          <Throw heroName="Batman" />
        </ErrorBoundaryPage>

        <ErrorBoundaryPage>
          <Throw heroName="Superman" />
        </ErrorBoundaryPage>

        <ErrorBoundaryPage>
          {
            //you will get an error if you put Joker in.
            //<Throw heroName="Joker" />
          }
        </ErrorBoundaryPage>
      </div>

      <h2 className="sectionTitles">------RANDOM-------</h2>
      <h2 className="subTitles">[MouseMove]</h2>
      <div className="appSpace">
        <MouseMove />
      </div>
    </div>
  );
}

export default App;

