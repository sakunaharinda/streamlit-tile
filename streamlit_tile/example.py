import streamlit as st
from streamlit_tile import streamlit_tile


if __name__ == "__main__":
    
    
    st.set_page_config(page_title="Streamlit Tile Demo", layout="wide")
    
    st.title("🎯 Streamlit Tile Component Demo")
    st.markdown("---")
    
    # Configuration sidebar
    st.sidebar.header("Tile Configuration")
    
    title = st.sidebar.text_input("Title", "Sample Tile")
    description = st.sidebar.text_area("Description", "This is a sample tile description")
    icon = st.sidebar.text_input("Icon (Material Icons)", "home")
    color_theme = st.sidebar.selectbox(
        "Color Theme", 
        ["blue", "red", "yellow", "indigo", "green", "purple"]
    )
    height = st.sidebar.slider("Height (px)", 150, 400, 200)
    width = st.sidebar.selectbox("Width (px)", ["responsive", "full", 250, 300, 400, 500])
    
    
    # Demo section
    st.header("Single Tile Demo")
    
    col1, col2, col3 = st.columns([1, 2, 1])
    
    with col2:
        clicked = streamlit_tile(
            label="Let's Go!",
            title=title,
            description=description,
            icon="article",
            color_theme=color_theme,
            height=height,
            width=width,
            key="demo_tile"
        )
        
        if st.session_state.demo_tile:
            st.success(f"🎉 Tile '{title}' was clicked!")
            
    st.write(st.session_state)
    
    st.markdown("---")
    
    # Multiple tiles demo
    st.header("Dashboard Demo")
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        users_clicked = streamlit_tile(
            title="Users",
            description="Manage application users and permissions",
            icon="people",
            color_theme="blue",
            key="users_tile"
        )
        
    with col2:
        settings_clicked = streamlit_tile(
            title="Settings",
            description="Configure application preferences",
            icon="settings",
            color_theme="yellow",
            key="settings_tile"
        )
        
    with col3:
        messages_clicked = streamlit_tile(
            title="Messages",
            description="Check your inbox and notifications",
            icon="chat",
            color_theme="red",
            key="messages_tile"
        )
    
    # Handle clicks
    if users_clicked:
        st.info("📊 Users section clicked!")
    if settings_clicked:
        st.info("⚙️ Settings section clicked!")
    if messages_clicked:
        st.info("💬 Messages section clicked!")