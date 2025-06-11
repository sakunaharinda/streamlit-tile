# Streamlit Tile Component

A customizable tile component for Streamlit apps that provides a button-like interface with a modern tile appearance.

## Features

- **Customizable appearance**: Choose from multiple color themes, icons, and dimensions
- **Material Icons integration**: Use any Material Icons icon
- **Responsive design**: Built with Tailwind CSS for modern styling
- **Interactive feedback**: Hover and click animations
- **Easy integration**: Works seamlessly with Streamlit's component system

## Usage

### Basic Usage

```python
import streamlit as st
from streamlit_tile import streamlit_tile

# Create a simple tile
clicked = streamlit_tile(
    title="My Tile",
    description="This is a sample tile",
    icon="home",
    color_theme="blue"
)

if clicked:
    st.write("Tile was clicked!")
```

### Advanced Usage

```python
import streamlit as st
from streamlit_tile import streamlit_tile

# Create a dashboard with multiple tiles
col1, col2, col3 = st.columns(3)

with col1:
    users_clicked = streamlit_tile(
        title="Users",
        description="Manage application users and permissions",
        icon="people",
        color_theme="blue",
        height=250,
        width=300,
        key="users_tile"
    )

with col2:
    settings_clicked = streamlit_tile(
        title="Settings", 
        description="Configure application preferences",
        icon="settings",
        color_theme="yellow",
        height=250,
        width=300,
        key="settings_tile"
    )

with col3:
    reports_clicked = streamlit_tile(
        title="Reports",
        description="Generate and view various reports", 
        icon="description",
        color_theme="indigo",
        height=250,
        width=300,
        key="reports_tile"
    )

# Handle tile clicks
if users_clicked:
    st.info("Users section accessed!")
if settings_clicked:
    st.info("Settings section accessed!")
if reports_clicked:
    st.info("Reports section accessed!")
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | str | "Default Title" | The title text displayed on the tile |
| `description` | str | "Default description" | The description text displayed on the tile |
| `icon` | str | "home" | Material Icons icon name (e.g., 'people', 'settings', 'chat') |
| `color_theme` | str | "blue" | Color theme: 'blue', 'red', 'yellow', 'indigo', 'green', 'purple' |
| `height` | int | 200 | Height of the tile in pixels |
| `width` | int | 300 | Width of the tile in pixels |
| `key` | str | None | Unique key for the component (required for multiple tiles) |


## License

This project is licensed under the MIT License.

## Acknowledgments

- Built using the [Streamlit Component Template](https://github.com/streamlit/component-template)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Material Icons](https://fonts.google.com/icons)