> Hooks 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

# 使用React Hooks转化class的一些思考

&emsp;&emsp; Hooks 其实已经是大势所趋的一个技术了，作为一个可能是 React ，甚至是 JS 史上都是一个比较重大的发明， Hooks 已经被大部分公司所接受并尝试使用，但是对于一些公司来讲，从 class 组件移植 Hooks 的成本太高，需要仔细评估 Hooks 能带来的的价值，所以我们对于 Hooks 的讨论，应该考虑的比较全面，才能更好的了解这个技术，以及是否应该在项目中尝试这一新技术。

&emsp;&emsp;在上一次的分享中，@朝歌同学已经让我们对 Hooks 有一个使用方面的全面认知了，所以我这边就不赘述这方面，专注于 Hooks 本身的可行性吧。

&emsp;&emsp;之前在论坛上我也有和一个小伙伴对此有一个讨论，关于前代 react 项目 class 转 Hooks 的必要性。其实大家对 Hooks 都是认可的，但是对于重写 class 的成本方面还是望而却步的， react 官方也不希望因为这种断崖式使得新版本使用者剧减，所以暂时还是会兼容 class 组件的写法。

&emsp;&emsp;其实对于是重写部分还是只有新组件使用 Hooks ，大家都还是比较犹豫的，对这种选择来看，我们必须实际考虑成本-产出比，所以我们这篇就具体列举使用 Hooks 时的成本与产出，以及可行的方案。

## 首先咱们来看看成本吧

### 修改成本

&emsp;&emsp;作为 React 16.8 新增特性，一些第三方的库可能还暂时无法兼容 Hooks，比如 React Redux 从 v7.1.0 才开始支持 Hooks API 并暴露了 useDispatch 和 useSelector 等，而 React Router 从 v5.1 开始支持 Hooks。所以如果我们的项目中 Redux 和 Router 版本不够的话，可能需要评价是否有必要升级和升级后可能带来的问题（当然如果重新开发的话可以避免这一块，直接使用最新 api ，另外在我们现在的项目中暂时还不太需要 useDispatch、useSelector 等 api ）。

&emsp;&emsp;再一点，业务逻辑内的代码拆分。在 Hooks 中，是不太建议将 state 放置于同一个 state 中的，考虑到性能及区域更新机制，既 state 切分成多个 state 变量，每个变量包含的不同值会在同时发生变化。建议是将 state 根据业务逻辑，拆分成多个 useState。

&emsp;&emsp;这样虽然会增加组件的性能，毕竟每次更新都只是更新一部分组件，但是对于重写 class ，我们还需要深入每一个的 class ，探究里面state的联系、机制等等，是一个较大的阻碍与挑战。

&emsp;&emsp;最后点，暂时的话，Hooks 必须传递 Props 的方式获取根组件 App 中的 state，意思就是如果想使用主 reducer 库中的 state 的话，必须使用 props 传递进来（或通过把 state 也装进 Context 来解决，但是空间成本太大了），如果是一个比较深的组件的话，必须一路通过传参的方式将数据引进来。这里对于 Hooks 来说还有优化的空间

&emsp;&emsp;修改成本可以算成本中最大的一环了，事实上每个 class 组件都可能有非常多的逻辑、状态，各种状态可能都有内在的一些联系。重新去理解这部分代码并重新构建 Hooks ，其实是一件非常大的挑战，所以本身我暂时对重写 class 到 Hooks 是持反对态度，当 React 官方没有一定的苗头出来说不支持 class 写法前，重写的动力确实是不够充足。

### 学习成本

&emsp;&emsp; Hooks 本身其实和 class 一样，都是关于本身这个组件的实现细节，重不重写其实对书写正常业务是完全没有影响的(不考虑性能方面的话)。所以 Hooks 对于 class 的重写还是会有一定的学习成本在内，毕竟这边要考虑本身与日后入职的小伙伴对这块的熟练度。

&emsp;&emsp;在我看来，从书写 class 组件，到书写 Hooks 的手感变化，其实不亚于从 JavaScript 到 TypeScript 的变化。后者是从弱类型到强类型的转变，变化的是具体数据格式定义方法，而前者是面向对象编程到函数式编程的变化，变化的是自身的代码思想，适应它的成本会比较高。

### 时间成本

&emsp;&emsp;按米卡的预估，对一个完整项目中， class 组件转 Hooks ，以及部分文件结构整理的时间可能要一个多月（以我的微薄水平），其过程中，用户是看不见明显的功能、 UI 修改的，而且可能会导致项目交付延后，不得不说这部分的时间支出成本会比较大。

&emsp;&emsp;而如果是原 class 保留不动，新组件使用 Hooks 的话，时间成本其实就减少很多了，毕竟新的组件也是从无到有搭建起来，多花的时间可能基本集中在前期对新增 Hooks 的结构整理，以及写法熟悉上，当整体结构完善，有咱们自己的一套书写模式之后，就可以达到现在书写 class 组件的速度与体验了。(嗯，毕竟和redux是可以无缝连接的)

## 我们能够得到什么？

> OK我们说完了成本，来看看 Hooks 可以带给我们什么？

### 假设是原class组件保留，新建Hooks

&emsp;&emsp; Hooks 是一个 React 官方的新特性， Hooks 的使用是完全能代替 class 组件的使用，也肯定对其有一个比较大的意义在其中，事实上他们内部原理都是 diff and patch ，性能方面差距几乎是可以忽略不计的，但是我的理解是， Hooks 更倾向于函数式编程， class 则更倾向于面向对象编程。这是一个大趋势。

&emsp;&emsp;在新的组件中使用 Hooks ，其实写过之后就能体会到为什么有人说 `Hooks更骚，class更稳` 了。它将所有类似生命周期函数都可以用一个 useEffect 来进行模拟，不会使得自己的逻辑大量分布在 class 的各个角落，大幅度集成业务逻辑代码，使得副作用的关注点比较集中，比如绑定/解绑事件、添加订阅、ajax请求等等。

&emsp;&emsp;**这是新技术**。对没错，我认为新技术本身就是一个我们能够看到的"获得"。在以前我们也会觉得 Jquery 非常好用，以后都会使用这种方式开发，但是后来出现了 webpack ，出现了 React 、 Vue ，我们的代码书写形式又变了。新技术的出现本身就是一种信号，只要它接受住了大量业务情况的考验，他的存在就是有某种值得值得去获取的优点，比如后来的组件化、工程化、解耦合等概念。

### 假设是重写class组件

&emsp;&emsp;除了上述优点外，重写 class 组件会使得整个项目的文件结构会更紧凑，毕竟不用兼顾 class 写法与 Hooks 写法。(但是对于性能来说，是没有那种显著提升的)

### 额外

&emsp;&emsp;性能方面的差距其实是几乎可以忽略不计的，但是函数式编程是越来越火起来的思想，同时 Hooks 从诞生开始就一直在致力于增强其性能，讨论活跃度也足够高，所以可预想的**未来**内， Hooks 性能方面应该会有一个比较大的飞跃。所以这方面也应该是一个可参考的隐性获得。

## 方案

说了这么多，其实我们关于 Hooks 的选择就只有这三个：

1. 重写所有 class 组件，转化为 Hooks
2. 原 class 组件不懂，新组件使用 Hooks
3. 原封不动，新组件依旧使用 class 开发

&emsp;&emsp;每个选择都是有各自的考虑的，比如第一个选择考虑的是成本较高，第三个选择是想保持稳定以及开发时间。

&emsp;&emsp;建议假如是新项目或刚刚起步，就全篇使用 Hooks 开发（第二种方案），如果已经是稳定上线的项目的迭代，就可以在迭代的组件中使用 Hooks ，但是如果你的团队需要考虑学习时间成本，本身开发时间较紧张，那么还是建议依旧使用 class 组件进行接下来的开发，因为 class 已经很久了，你的团队一定已经有了一套比较完备的方案与流程来进行接下来的开发，它会让你节省不少的时间。

## 米卡在干啥？

&emsp;&emsp;事实上， redux 只是一种思想，而不是 react 独特的东西，我研究了几个 github 上的 Hooks 写的项目发现， Hooks 是可以无缝衔接我们的 redux 仓库的，不同的地方只在于一个是作为 state ，一个是作为 props 传入

&emsp;&emsp;于此，我们来走一遍关于某 Class 转化为 Hooks 的路子。我这个操作并不是想提出将所有 class 组件转化为 Hooks 的建议，而是想通过这一套的修改下来，表达出:"当我们在新建 Hooks 的时候，开发的流程与以往的不同之处，以及转换自身写法的成本"。

&emsp;&emsp;我本次的修改在 mika_guowang_shijian_v1.0 分支下进行的操作，没有推上去，只保存了一个js文件，里面是我的修改，将路由为 settingmanage/baseset/list 的 class 组件进行了 Hooks 转化，挑选这个组件的原因是因为它足够全面，足够复杂，它基础方面有 api 请求、路由，特殊的有外部 state 仓库、 reducer 、生命周期函数、与其他组件的联系(包括 antd )，所以我认为它足够有说明度，我们来看一下我对其的各种修改

### 相关改动

&emsp;&emsp; OK 突然发现没有办法把代码放上来，太多了这个组件足足一千行，所以我们分多个层面来剖析我们的改动

+ 数据层面

&emsp;&emsp;在 class 组件中能够使用redux，那么 Hooks 组件中也一样能够使用。在这个组件的修改上， mapStateToProps 、 mapDispatchToProps 以及相应的组件合并 Form 表单并导出都是可以不用修改的

```js

const mapStateToProps = state => ({
    baseInfoList: state.accountManage.baseInfoList,
    typeList: state.accountManage.typeList,
});

const mapDispatchToProps = dispatch => ({
    getBaseinfoList(params) {
        dispatch(accountManageAction.getBaseinfoList(params));
    },
    getBaseinfoDetail(params) {
        dispatch(accountManageAction.getBaseinfoDetail(params));
    },
    getBaseInfoFilterList(params) {
        dispatch(accountManageAction.getBaseInfoFilterList(params));
    },
    saveBasesetInfo(params, callback) {
        dispatch(accountManageAction.saveBasesetInfo(params, callback))
    },
    deleteBasesetInfo(params) {
        dispatch(accountManageAction.deleteBasesetInfo(params));
    },
    getFileterTypeList(params) {
        dispatch(accountManageAction.getFileterTypeList(params));
    },
});

/**
 * 只需要变动这一部分
 **/
function BasesetManage(props) {
    // some code...
}

class BasesetManage extends Component {
    // some code...
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(BasesetManage));

```

<!-- &emsp;&emsp; class 组件中外来数据的方式有两个， state 与 props ， state 为 redux 仓库中取的(当然咱们的项目是作为props储存的，如果使用`this.state = store.getState()`这样的思路，是作为state来储存的)， props 为调用的组件传递的，在我们的项目中， router 文件都是不使用 props 来进行数据传递的，所以说我们的 class 组件中， state 为 redux 仓库与当前组件中绑定的 state ， props 为一些被connect到组件上的函数(mapStateToProps、mapDispatchToProps中)。

&emsp;&emsp; Hooks 中持久数据储存的方式其实也有两个， state 与 props ， state 为 Hooks 自建的一些 state ， props 是作为单个参数由父组件传递的，所以这对应了前一部分 class 的 props 来源，既然没有来源，我们的写法是没有改动的，因为我们不需要取 props 的传递参数，所以说我们的 Hooks 组件中， state为当前 Hooks 中 reducer 里的 state ，以及一些自定义的 useState (其实这些不是 state ，但是我认为他们满足数据持久化，修改后可以重渲染当前组件，所以我当它们是一种 state )， props 为一些被connect到组件上的数据与函数(mapStateToProps、mapDispatchToProps中)。 -->

+ 事件与函数

&emsp;&emsp;首先绑定事件的差别并不算大，绑定部分几乎没有改动，事件函数写法与 class 组件只有一点点不一样，具体看代码：

```js
class BasesetManage extends Component {

    handleUploadModal = () => {
        this.setState({
            isShowUpload: false,
            visible: false
        })
    }

    handleUpload = () => {
        this.setState({
            isShowUpload: true,
            visible: false
        })
    }

    render() {
        // some code...
        return (
            <div className="manageWraper">
                 {/* some code... */}
            </div >
        )
    }
}

```

```js
// 转换
function BasesetManage(props) {

    const handleUploadModal = () => {
        setHookState({
            ...hookState,
            isShowUpload: false,
            visible: false
        });
    }

    const handleUpload = () => {
        setHookState({
            ...hookState,
            isShowUpload: true,
            visible: false
        });
    }

    return (
        <div className="manageWraper">
                {/* some code... */}
        </div >
    )
    
}

```

+ 重渲染

&emsp;&emsp; OK 上个代码大家可能还发现了 state 赋值并重渲染的地方，所以这方面我是这么设计的，使用 useState 来作为 Hooks 状态代替原先的 this.state ，修改后和 this.state 的机制很像，同时 setHookState 调用也很方便，唯一就是模拟 this.setState 的回调是不支持，这个我们只能使用useEffect来进行模拟回调。

```js

const [hookState, setHookState] = useState({
    filterList: [],
    currentRecord: {},
    visible: false,
    confirmVisible: false,
    searchParams: {
        pageSize: 10,
        pageNum: 1,
        namelike: '',
        type: ''
    },
    selectedRowKeys: [],
    filteredInfo: {},
    operateType: 'add',
    uploading: false,
    isShowUpload: false,
    isView: false
})

// 当希望执行类似this.setState({isView: true})时
setHookState({ ...hookState, isView: true });

```

+ 生命周期函数

&emsp;&emsp;暂时的话 Hooks 对生命周期的支持是很全面的，除了 getSnapshotBeforeUpdate ， getDerivedStateFromError 和 componentDidCatch 这三个生命周期的 Hooks 等价写法，其他的生命周期函数都是能够完整模拟的

```js
// 模拟componentDidMount
useEffect(() => {
    console.log('mounted')
}, []);

// 模拟componentDidMount with componentDidUpdate
useEffect(() => {
    console.log('mounted or updated')
});

// 只模拟componentDidUpdate
// useRef 在组件中创建"实例变量"。它作为一个标志来指示组件是否处于挂载或更新阶段
const mounted = useRef();
useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
  } else {
   console.log('I am didUpdate')
  }
});

// 模拟componentWillUnmount
useEffect(() => {
  return () => {
    console.log('will unmount');
  }
}, []);

// 模拟shouldComponentUpdate
const MyComponent = React.memo(
    _MyComponent, 
    (prevProps, nextProps) => nextProps.count !== prevProps.count
)

```

### 总结

&emsp;&emsp;说实在话，现在直接使用 Hooks 来替代 class 组件的话，暂时是有一些冒险了，可能由于对 Hooks 的理解不同，会导致以往写 class 的共识点没有办法完全对应到 Hooks 上，这是面向对象编程与函数式编程方面的一个冲突。

&emsp;&emsp;比如 Hooks 的 useEffect 模拟生命周期事实上原理与流程是完全不同的，例如 componentWillUnmount ，在 class 组件中，它在状态更新中始终获取的是这个组件"即时"的状态，因为它始终在那里。

&emsp;&emsp;而我们通过 useEffect 来模拟 componentWillUnmount 的话，实际上是通过不断的执行 useEffect 回调函数，下一次渲染的时候，先渲染完毕，再执行上一次的 useEffect 清除函数来模拟的，如果在模拟的时候依旧遵循 class 的思路，很容易出现错误。

```js
useEffect(() => {
    // 事件绑定一旦绑定后，函数不会变化，这和我们需要的表现不一样
    document.addEventListener("click", onclick);
    return () => {
        document.removeEventListener("click", onclick);
    };
}, []);
```

&emsp;&emsp;来举个栗子

```js
componentDidMount() {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
}

componentWillUnmount() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}
```


```js
useEffect(() => {
    // 这里其实是一个快照
    // 这个地方我经常出错
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    };
}, []);
```
&emsp;&emsp;这确实是一个在日常中很容易难以转换思路的一种情况。

&emsp;&emsp;所以我的建议是紧急的项目中，依旧使用 class 组件的写法，不紧急的、还在迭代中的项目可以试着使用 Hooks 组件，这样不会耽误工期。

&emsp;&emsp;而新建项目中，可以都使用 Hooks 的方式来写，实在不行的时候也不会有什么时间成本损失，也可以让自己的项目业务逻辑更加紧凑简洁，毕竟没有 this ，没有大量的生命周期分布在自己的 class 中，也不再需要使用`bind(this)`了。但其中如果是非常复杂的业务，在当前来看最好是使用 class Component，个人觉得 Hooks 是未来主流的组件编写方式，但是目前还不是那么的可控。

&emsp;&emsp;总结: 优点为高可复用、逻辑集中、更容易拆分组件、副作用关注点分离，缺点为不够成熟，存在变更成本。

&emsp;&emsp;(毕竟咱们在项目中不限制这方面，所以大家多去试试了解这方面是没问题的)

`o(*^▽^*)┛`