import os
import streamlit.components.v1 as components

# Create a _RELEASE constant to determine if we're in development or production
_RELEASE = True

# Declare a Streamlit component
if not _RELEASE:
    # In development, use local files
    _component_func = components.declare_component(
        "streamlit_tile",
        url="http://localhost:3000"
    )
else:
    # In production, use the build directory
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component(
        "streamlit_tile", 
        path=build_dir
    )

def streamlit_tile(
    label="View",
    title="Default Title",
    description="Default description",
    icon="home",
    color_theme="blue",
    height=200,
    width=300,
    key=None
):
    """
    Create a customizable tile component that acts like a Streamlit button.
    
    Parameters:
    -----------
    title : str
        The title text for the tile
    description : str
        The description text for the tile
    icon : str
        Material Icons icon name (e.g., 'home', 'people', 'settings')
    color_theme : str
        Color theme: 'blue', 'red', 'yellow', 'indigo', 'green', 'purple'
    height : int
        Height of the tile in pixels
    width : int
        Width of the tile in pixels
    key : str
        Unique key for the component
    
    Returns:
    --------
    bool
        True if the tile was clicked, False otherwise
    """
    
    # Available color themes
    color_themes = {
        'blue': {'icon': 'text-blue-500', 'button': 'bg-blue-100 text-blue-600'},
        'red': {'icon': 'text-red-500', 'button': 'bg-red-100 text-red-600'},
        'yellow': {'icon': 'text-yellow-500', 'button': 'bg-yellow-100 text-yellow-600'},
        'indigo': {'icon': 'text-indigo-500', 'button': 'bg-indigo-100 text-indigo-600'},
        'green': {'icon': 'text-green-500', 'button': 'bg-green-100 text-green-600'},
        'purple': {'icon': 'text-purple-500', 'button': 'bg-purple-100 text-purple-600'}
    }
    
    # Default to blue if invalid theme
    if color_theme not in color_themes:
        color_theme = 'blue'
    
    component_value = _component_func(
        label=label,
        title=title,
        description=description,
        icon=icon,
        color_theme=color_theme,
        color_classes=color_themes[color_theme],
        height=height,
        width=width,
        key=key
    )
    
    return component_value

