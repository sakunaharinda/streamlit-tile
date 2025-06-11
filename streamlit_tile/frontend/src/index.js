// import React from "react"
// import ReactDOM from "react-dom"
// import {
//   Streamlit,
//   StreamlitComponentBase,
//   withStreamlitConnection,
// } from "streamlit-component-lib"

// class StreamlitTile extends StreamlitComponentBase {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isHovered: false,
//       isClicked: false
//     }
//   }

//   componentDidMount() {
//     // Set the component's frame height
//     Streamlit.setFrameHeight(this.props.args.height + 10)
//   }

//   componentDidUpdate(prevProps) {
//     // Update frame height if height prop changes
//     if (prevProps.args.height !== this.props.args.height) {
//       Streamlit.setFrameHeight(this.props.args.height + 10)
//     }
//   }

//   handleClick = () => {
//     // Set clicked state briefly for visual feedback
//     this.setState({ isClicked: true })
    
//     // Send true value to Streamlit
//     Streamlit.setComponentValue(true)
    
//     // Reset clicked state after animation

//     // setTimeout(() => {
//     //   this.setState({ isClicked: false })
//     //   // Reset to false after a brief moment
//     //   setTimeout(() => {
//     //     Streamlit.setComponentValue(false)
//     //   }, 100)
//     // }, 150)
//   }

//   render() {
//     const { args } = this.props
//     const { isHovered, isClicked } = this.state
    
//     const {
//       label = "View",
//       title = "Default Title",
//       description = "Default description", 
//       icon = "home",
//       color_classes = { icon: "text-blue-500", button: "bg-blue-100 text-blue-600" },
//       height = 200,
//       width = 300
//     } = args

//     const tileStyle = {
//       height: `${height}px`,
//       width: `${width}px`,
//       maxWidth: '100%'
//     }

//     const transformClass = isClicked ? 'transform scale-95' : isHovered ? 'transform scale-105' : 'transform scale-100'

//     return (
//       <div className="p-2">
//         <div 
//           className={`tile-container bg-white rounded-xl shadow-md p-6 hover:shadow-lg cursor-pointer ${transformClass}`}
//           style={tileStyle}
//           onClick={this.handleClick}
//           onMouseEnter={() => this.setState({ isHovered: true })}
//           onMouseLeave={() => this.setState({ isHovered: false })}
//         >
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold text-gray-800 truncate pr-2">
//               {title}
//             </h3>
//             <span className={`material-icons ${color_classes.icon} text-3xl flex-shrink-0`}>
//               {icon}
//             </span>
//           </div>
//           <p className="text-gray-500 text-sm mb-4 line-clamp-3">
//             {description}
//           </p>
//           <button 
//             className={`px-4 py-2 ${color_classes.button} rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-80`}
//             onClick={(e) => {
//               e.stopPropagation()
//               this.handleClick()
//             }}
//           >
//             {label}
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// // Wrap the component to connect it to Streamlit
// const StreamlitTileComponent = withStreamlitConnection(StreamlitTile)

// // HTML template that includes Tailwind CSS and Material Icons
// const htmlTemplate = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Streamlit Tile Component</title>
//     <script src="https://cdn.tailwindcss.com"></script>
//     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
//     <style>
//         body {
//             margin: 0;
//             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
//         }
//         .line-clamp-3 {
//             display: -webkit-box;
//             -webkit-line-clamp: 3;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//         }
//     </style>
// </head>
// <body>
//     <div id="root"></div>
// </body>
// </html>
// `

// // Render the component
// ReactDOM.render(<StreamlitTileComponent />, document.getElementById("root"))

import React from "react"
import ReactDOM from "react-dom"
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

class StreamlitTile extends StreamlitComponentBase {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
      isClicked: false,
      screenWidth: window.innerWidth
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    // Set the component's frame height
    Streamlit.setFrameHeight(this.props.args.height + 10)
    
    // Add resize listener for responsive behavior
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate(prevProps) {
    // Update frame height if height prop changes
    if (prevProps.args.height !== this.props.args.height) {
      Streamlit.setFrameHeight(this.props.args.height + 10)
    }
  }

  handleResize() {
    this.setState({ screenWidth: window.innerWidth })
  }

  getResponsiveWidth() {
    const { width } = this.props.args
    const { screenWidth } = this.state
    
    // If width is a number (fixed width), return it
    if (typeof width === 'number') {
      return `${width}px`
    }
    
    // Handle responsive and full width options
    switch (width) {
      case 'full':
        return '100%'
      case 'responsive':
      default:
        // Responsive breakpoints based on screen width
        if (screenWidth >= 1200) {
          return '320px' // Large desktop
        } else if (screenWidth >= 992) {
          return '280px' // Desktop
        } else if (screenWidth >= 768) {
          return '240px' // Tablet
        } else if (screenWidth >= 576) {
          return '200px' // Mobile landscape
        } else {
          return '100%'  // Mobile portrait - full width
        }
    }
  }

  handleClick = () => {
    // Set clicked state briefly for visual feedback
    this.setState({ isClicked: true })
    
    // Send true value to Streamlit
    Streamlit.setComponentValue(true)
    
    // Reset clicked state after animation
    // setTimeout(() => {
    //   this.setState({ isClicked: false })
    //   // Reset to false after a brief moment
    //   setTimeout(() => {
    //     Streamlit.setComponentValue(false)
    //   }, 100)
    // }, 150)
  }

  render() {
    const { args } = this.props
    const { isHovered, isClicked } = this.state
    
    const {
      label="View",
      title = "Default Title",
      description = "Default description", 
      icon = "home",
      color_classes = { icon: "text-blue-500", button: "bg-blue-100 text-blue-600" },
      height = 200
    } = args

    const tileStyle = {
      height: `${height}px`,
      width: this.getResponsiveWidth(),
      maxWidth: '100%',
      minWidth: '200px' // Ensure minimum usable width
    }

    const transformClass = isClicked ? 'transform scale-95' : isHovered ? 'transform scale-105' : 'transform scale-100'

    return (
      <div className="p-2 flex justify-center">
        <div 
          className={`tile-container bg-white rounded-xl shadow-md p-6 hover:shadow-lg cursor-pointer ${transformClass}`}
          style={tileStyle}
          onClick={this.handleClick}
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate pr-2">
              {title}
            </h3>
            <span className={`material-icons ${color_classes.icon} text-3xl flex-shrink-0`}>
              {icon}
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-4 line-clamp-3">
            {description}
          </p>
          <button 
            className={`px-4 py-2 ${color_classes.button} rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-80`}
            onClick={(e) => {
              e.stopPropagation()
              this.handleClick()
            }}
          >
            {label}
          </button>
        </div>
      </div>
    )
  }
}

// Wrap the component to connect it to Streamlit
const StreamlitTileComponent = withStreamlitConnection(StreamlitTile)

// HTML template that includes Tailwind CSS and Material Icons
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Streamlit Tile Component</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div id="root"></div>
</body>
</html>
`

// Render the component
ReactDOM.render(<StreamlitTileComponent />, document.getElementById("root"))