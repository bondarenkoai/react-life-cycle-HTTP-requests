// searchImages = async (searchValues, resetImages = true) => {
//     console.log({ searchValues });

//     if (resetImages) {
//         this.setState({ images: [], page: 1 });
//     }

//     const newImages = await API.getImages(searchValues, this.state.page);

//     console.log('total:', newImages.total);
//     console.log(this.state.search);
//     console.log(this.state.page);

//     this.setState(prevState => ({
//         search: searchValues,
//         images: [...prevState.images, ...newImages.hits],
//     }));
// };
