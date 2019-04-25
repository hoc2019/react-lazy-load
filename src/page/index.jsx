import React from 'react';
import ReactLazyLoad from './ReactLazyLoad';
import styles from './index.less';

class LazyLoadCase extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			length : 5,
			imgSrc : 'https://oss.pdabc.com/20181019/d43d6e37-214c-48c6-8056-bd9a9e83bb8c.jpg',
			fatherId : 'lazy-load-content',
			link : 'data-original',
			imgArr : Array(15).fill(),
			interval : 2000
		}
	}

	renderImgPic(){
		let { imgArr , imgSrc , link } = this.state;
		let picArr = [];
		for(let i = 0 ; i < imgArr.length ; i++){
			let obj = { key : i , className : styles.img };
			obj[link] = imgSrc;
			picArr.push(React.createElement('img', obj));
		}
		return picArr
	}

	renderDivPic(){
		let { imgArr , imgSrc , link } = this.state;
		let picArr = [];
		for(let i = 0 ; i < imgArr.length ; i++){
			let obj = { key : i , className : styles.img };
			obj[link] = imgSrc;
			picArr.push(React.createElement('div', obj));
		}
		return picArr
	}

	addPic(){
		let { imgArr , link } = this.state;
		let picArr = [];
		for(let i = 0 ; i < imgArr.length ; i++){
			let obj = { key : i , className : styles.img };
			obj[link] = imgSrc;
			picArr.push(React.createElement('div', obj));
		}
		return picArr;
	}

	render(){
		let { fatherId , renderItem , imgSrc , imgArr , link , interval } = this.state;
		return(
			<div>
				<ReactLazyLoad
					fatherRef = { fatherId }
					style = {{ width : '100%' , height : '400px' , overflow : 'auto' , border : '1px solid #ddd' }}
					interval = { interval }
				>
					{ imgArr && imgArr.length > 0 && imgArr.map((item, index) => {
						let obj = { key : index , className : styles.img };
						obj[link] = imgSrc;
						return React.createElement('div', obj);
					}) }
					{ imgArr && imgArr.length > 0 && imgArr.map((item, index) => {
						let obj = { key : index , className : styles.img };
						obj[link] = imgSrc;
						return React.createElement('img', obj);
					}) }
					<div>
						这是混淆视听的部分
						<div>
							<div>这还是混淆视听的部分</div>
							{ imgArr && imgArr.length > 0 && imgArr.map((item, index) => {
								let obj = { key : index , className : styles.img };
								obj[link] = imgSrc;
								return React.createElement('img', obj);
							}) }
						</div>
					</div>
				</ReactLazyLoad>
				<button onClick = {() => { imgArr.push(undefined); this.setState({ imgArr , interval : interval/4 }) }}>添加</button>
			</div >
		)
	}
}

ReactDOM.render(
	<LazyLoadCase/>,
	document.getElementById('root')
)
