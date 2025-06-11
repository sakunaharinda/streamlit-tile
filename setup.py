import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="streamlit-tile",
    version="4.0.0",
    author="Sakuna Jayasundara",
    author_email="sakunaj1996@gmail.com",
    description="A customizable tile component for Streamlit apps",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/sakunaharinda/streamlit-tile",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.10",
    install_requires=[
        "streamlit >= 1.44.0",
    ],
)