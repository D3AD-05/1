// import logo from './logo.svg';
// import './App.css';

// function App(){
//     const [name, setName] = React.useState("Sukanyeah"); //test
//     return <div> 
//         <AppChild name={name} onChangeName={(newName)=>{setName(newName)}}/>
//       </div>
//   }
   
//   function AppChild(props){
//     return <span>
//        {props.name}
//         <button onClick={()=>props.onChangeName("Sukanyeah Krishna")}>Change Name</button>
//       </span>
//   }
  

// export default App;
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { PersonAdd, Edit, GridView, List, Email, LocationOn } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField, Snackbar, Checkbox, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material";
import { createRoot } from "react-dom/client";
// import Select from 'react-select';
// import Button from '@mui/material/Button';
import { Tooltip, IconButton } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import "index.css";

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true,
});

const style = {
    position: "fixed",
    right: 0,
    top: 0,
    height: "100%",
    width: "440px",
    bgcolor: "background.paper",
    border: "1px solid #eee",
    // borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

function App() {
    const data = [
        {
            name: "Gabby George",
            job: "Business Analyst",
            place: "Trivandrum",
            id: 1,
            email: "gabby@example.com",
            gender: "female",
            phone: "919123456789"
        },
        {
            name: "Jaden Collins",
            job: "Attorney",
            place: "Bengaluru",
            id: 2,
            email: "jaden@example.com",
            gender: "male",
            phone: "919876543210"
        }
    ];

    const [employees, setEmployee] = useState(data);
    const [snacks, setSnacks] = useState(false);
    const [mobile, setMobile] = useState('');
    const [checkbVal, setCheckb] = useState(false);
    const [genderVal, setGender] = useState('');
    const [view, setView] = useState('list');
    const [tableCount, setTableCount] = useState(0);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);


    // useEffect(
    // 	() => {
    // 		toggleDataTabled()
    // 	}, [view]
    // );
    const generateList = () => {
        console.log("rendered list")
        return (<div className="row m-2" id="listtable">
            <MUIDataTable
                title={"ACME Employee List"}
                data={employees}
                columns={columns}
                options={options}
            />
        </div>)
    };
    const hideGridItems = () => {

        const elemTable = document
            .getElementById("gridTable")
            .querySelector(".MuiPaper-root")
            .querySelectorAll("table");
        // console.log("Map", typeof elemTable);

        // for(var table of elemTable){
        //     console.log("Map", table);
        // }
        // elemTable[0].style.display = "none";
        // elemTable.map((tabthis, index)=>(
        //     console.log("Map", tabthis)
        //     // tabthis.style.display = "none"
        // ));
        {
            Object.keys(elemTable).map(
                (keyName, i) => (
                    console.log(keyName, i)
                )
            )
        }

    };
    const generateGrid = () => {
        console.log("rendered tile")
        var opGrid = <div className="row m-2" id="gridTable">
            <MUIDataTable
                title={"ACME Employee Grid"}
                data={employees}
                columns={columns}
                options={options}
            />
        </div>;
        return (opGrid);
    };
    const processGrid = () => {
        setTimeout(() => {
            hideGridItems();
        }, 1000);
        return generateGrid();
        // hideGridItems();
    };

    const toggleDataTabled = () => {
        const elemTable = document
            .getElementById("kbtable")
            .querySelector(".MuiPaper-root")
            .querySelectorAll("table");
        const elemPeople = document.getElementById("people");

        if (view === "list") {
            elemTable[0].style.display = "table";
            if (tableCount === 1) {
                // elemPeople.style.display = "none";
            }
        } else {
            elemTable[0].style.display = "none";
            if (tableCount === 0) {
                // alert(tableCount);
                var peopleCards = '';
                peopleCards += '<div id="people" className="row">';
                {
                    for (var user of employees) {
                        const userCard = '<div className="col-md-4" key={user.id}> \
						<div className="card"> \
						<div className="card-body"> \
						<h5 className="card-title">{user.name}</h5> \
						<Email></Email> {user.email} \
						<LocationOn></LocationOn> {user.place} \
						</div> \
						</div> \
						</div>';
                        peopleCards += userCard;
                    }
                    // employees.map((user) => (

                    // 	// peopleCards += '<div className="col-md-4" key={user.id}>' +
                    // 	// '<div className="card">' +
                    // 	// '<div className="card-body">' +
                    // 	// '<h5 className="card-title">' + user.name + '</h5>' +
                    // 	// '<Email></Email> ' + user.email +
                    // 	// '<LocationOn></LocationOn> ' + user.place +
                    // 	// '</div>' +
                    // 	// '</div>' +
                    // 	// '</div>';

                    // 	{
                    // 		}
                    // ))
                }
                peopleCards += '</div>';
                alert(peopleCards);
                // const finalPplData = pplContStart + peopleCards + pplContEnd;
                // elemTable[0].parentElement.innerHTML += '<div id="people" className="row">' + peopleCards + '</div>';
                elemTable[0].parentElement.innerHTML += <div dangerouslySetInnerHTML={{ __html: peopleCards }} />;
                setTableCount(1);
            } else {
                elemPeople.style.display = "block";
            }
        }
    };

    /** USED IN FORM */
    const handleOnError = (error) => {
        console.log('Error', error);
    }
    const { register, handleSubmit, setValue, getValues } = useForm();
    const onSubmit = (data) => {
        const subName = data.empName;
        const subJob = data.empJob;
        const subPlace = data.empPlace;
        const subId = data.empId;
        const subEmail = data.empEmail;
        const subGender = genderVal;
        const subMobile = mobile;
        const newEmployee = {
            name: subName,
            job: subJob,
            place: subPlace,
            email: subEmail,
            id: subId,
            gender: subGender,
            phone: subMobile
        };
        const detEditOrAdd = getValues("isEdit");
        if (detEditOrAdd === 0) {
            employees.push(newEmployee)
            // setEmployee(employees);
            setOpen(false);
            setSnacks(true);
        } else if (detEditOrAdd === 1) {
            var Index = employees.findIndex((p) => p.id === getValues("empId"));
            employees[Index] = newEmployee;
            setOpen(false);
            setSnacks(true);
        }
    };

    /** AGE */
    const [age, setAge] = useState(0);

    /**MOVIE */
    const [movie, setMovie] = useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleCheckb = (e) => {
        console.log("CheckB", e.target.checked);
        setCheckb(e.target.checked);
    }

    const addNewUser = () => {
        const editRandId = Math.round(Math.random() * 1000000000);
        setValue('empName', 'Sukanyeah Krishna');
        setValue('empJob', 'Developer');
        setValue('empEmail', 'sukanyeah@gmail.com');
        setValue('empPlace', 'Cochin');
        setValue('empId', editRandId);
        setValue('isEdit', 0);
        setGender('female');
        setMobile('919538087000');
        setCheckb(false);
        // console.log('Random Id', editRandId);
        setOpen(true);
    }

    const onEdit = (metaData) => {
        // console.log(empId, metaData);
        const editIndex = metaData.rowIndex;
        const editData = employees[editIndex];
        setValue('empName', editData['name']);
        setValue('empJob', editData['job']);
        setValue('empEmail', editData['email']);
        setValue('empPlace', editData['place']);
        setValue('empId', editData['id']);
        setGender(editData['gender']);
        setMobile(editData['phone']);
        setValue('isEdit', 1);
        setOpen(true);
        // console.log('New Employee Data', employees);
    }

    const columns = [
        { name: "name", label: "Name", options: { filterOptions: { fullWidth: true } } },
        { name: "job", label: "Job", options: { filterOptions: { fullWidth: true } } },
        { name: "place", label: "Location", options: { filterOptions: { fullWidth: true } } },
        {
            name: "id", label: "Edit", options: {
                filterOptions: {
                    fullWidth: false
                },
                print: false,
                filter: false,
                customBodyRender: (value, tableMeta) => (
                    <Tooltip title="Edit">
                        <Edit
                            label="Edit"
                            onClick={() => {
                                onEdit(tableMeta)
                            }}
                        />
                    </Tooltip>
                )
            }
        },
    ];

    const changeView = () => {
        if (view === 'list') {
            setView('grid')
        } else {
            setView('list')
        }
    };



    const top100Films = [
        { label: "The Shawshank Redemption", year: 1994 },
        { label: "The Godfather", year: 1972 },
        { label: "The Godfather: Part II", year: 1974 },
        { label: "The Dark Knight", year: 2008 },
        { label: "12 Angry Men", year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: "Pulp Fiction", year: 1994 },
        {
            label: "The Lord of the Rings: The Return of the King",
            year: 2003,
        },
        { label: "The Good, the Bad and the Ugly", year: 1966 },
        { label: "Fight Club", year: 1999 },
        {
            label: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
        },
        {
            label: "Star Wars: Episode V - The Empire Strikes Back",
            year: 1980,
        },
        { label: "Forrest Gump", year: 1994 },
        { label: "Inception", year: 2010 },
        {
            label: "The Lord of the Rings: The Two Towers",
            year: 2002,
        },
        { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { label: "Goodfellas", year: 1990 },
        { label: "The Matrix", year: 1999 },
        { label: "Seven Samurai", year: 1954 },
        {
            label: "Star Wars: Episode IV - A New Hope",
            year: 1977,
        },
        { label: "City of God", year: 2002 },
        { label: "Se7en", year: 1995 },
        { label: "The Silence of the Lambs", year: 1991 },
        { label: "It's a Wonderful Life", year: 1946 },
        { label: "Life Is Beautiful", year: 1997 },
        { label: "The Usual Suspects", year: 1995 },
        { label: "Léon: The Professional", year: 1994 },
        { label: "Spirited Away", year: 2001 },
        { label: "Saving Private Ryan", year: 1998 },
        { label: "Once Upon a Time in the West", year: 1968 },
        { label: "American History X", year: 1998 },
        { label: "Interstellar", year: 2014 },
        { label: "Casablanca", year: 1942 },
        { label: "City Lights", year: 1931 },
        { label: "Psycho", year: 1960 },
        { label: "The Green Mile", year: 1999 },
        { label: "The Intouchables", year: 2011 },
        { label: "Modern Times", year: 1936 },
        { label: "Raiders of the Lost Ark", year: 1981 },
        { label: "Rear Window", year: 1954 },
        { label: "The Pianist", year: 2002 },
        { label: "The Departed", year: 2006 },
        { label: "Terminator 2: Judgment Day", year: 1991 },
        { label: "Back to the Future", year: 1985 },
        { label: "Whiplash", year: 2014 },
        { label: "Gladiator", year: 2000 },
        { label: "Memento", year: 2000 },
        { label: "The Prestige", year: 2006 },
        { label: "The Lion King", year: 1994 },
        { label: "Apocalypse Now", year: 1979 },
        { label: "Alien", year: 1979 },
        { label: "Sunset Boulevard", year: 1950 },
        {
            label:
                "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
            year: 1964,
        },
        { label: "The Great Dictator", year: 1940 },
        { label: "Cinema Paradiso", year: 1988 },
        { label: "The Lives of Others", year: 2006 },
        { label: "Grave of the Fireflies", year: 1988 },
        { label: "Paths of Glory", year: 1957 },
        { label: "Django Unchained", year: 2012 },
        { label: "The Shining", year: 1980 },
        { label: "WALL·E", year: 2008 },
        { label: "American Beauty", year: 1999 },
        { label: "The Dark Knight Rises", year: 2012 },
        { label: "Princess Mononoke", year: 1997 },
        { label: "Aliens", year: 1986 },
        { label: "Oldboy", year: 2003 },
        { label: "Once Upon a Time in America", year: 1984 },
        { label: "Witness for the Prosecution", year: 1957 },
        { label: "Das Boot", year: 1981 },
        { label: "Citizen Kane", year: 1941 },
        { label: "North by Northwest", year: 1959 },
        { label: "Vertigo", year: 1958 },
        {
            label: "Star Wars: Episode VI - Return of the Jedi",
            year: 1983,
        },
        { label: "Reservoir Dogs", year: 1992 },
        { label: "Braveheart", year: 1995 },
        { label: "M", year: 1931 },
        { label: "Requiem for a Dream", year: 2000 },
        { label: "Amélie", year: 2001 },
        { label: "A Clockwork Orange", year: 1971 },
        { label: "Like Stars on Earth", year: 2007 },
        { label: "Taxi Driver", year: 1976 },
        { label: "Lawrence of Arabia", year: 1962 },
        { label: "Double Indemnity", year: 1944 },
        {
            label: "Eternal Sunshine of the Spotless Mind",
            year: 2004,
        },
        { label: "Amadeus", year: 1984 },
        { label: "To Kill a Mockingbird", year: 1962 },
        { label: "Toy Story 3", year: 2010 },
        { label: "Logan", year: 2017 },
        { label: "Full Metal Jacket", year: 1987 },
        { label: "Dangal", year: 2016 },
        { label: "The Sting", year: 1973 },
        { label: "2001: A Space Odyssey", year: 1968 },
        { label: "Singin' in the Rain", year: 1952 },
        { label: "Toy Story", year: 1995 },
        { label: "Bicycle Thieves", year: 1948 },
        { label: "The Kid", year: 1921 },
        { label: "Inglourious Basterds", year: 2009 },
        { label: "Snatch", year: 2000 },
        { label: "3 Idiots", year: 2009 },
        { label: "Monty Python and the Holy Grail", year: 1975 },
    ];

    const extraTools = () => (
        <span>
            <Tooltip disableFocusListener title="Change View">
                <IconButton onClick={
                    () => {
                        changeView()
                    }
                }>
                    {view === 'list' ? (
                        <GridView />
                    ) : (
                        <List />
                    )}
                </IconButton>
            </Tooltip>

            <Tooltip disableFocusListener title="Add User">
                <IconButton onClick={() => {
                    addNewUser();
                }}>
                    <PersonAdd />
                </IconButton>
            </Tooltip>
        </span>
    );

    const handleMobile = (e) => {
        // console.log("Mobile", e);
        setMobile(e);
    }

    const options = {
        customToolbar: extraTools,
        filterType: "dropdown",
        onTableChange: (action, state) => {
            // console.log(action);
            // console.dir(state);
        },
    };
    const optionskv = {
        customToolbar: extraTools,
        filterType: "dropdown",
        tableId: "kbtable",
        viewColumns: false,
        onTableChange: (action, state) => {
            // console.log(action);
            // console.dir(state);
        },
    };

    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
                <InputLabel id="demo-simple-select-label" className="mt-3 mb-3 text-center">
                    React
                </InputLabel>
                {console.log(view)}
                {view === 'list' ? (
                    <div id="containList">
                        {generateList()}
                    </div>
                ) : (
                    <div id="containGrid">
                        {processGrid()}
                        {/* {document.getElementById("gridTable").style.display = "none"} */}
                    </div>
                )}


                {/* {hideGridItems} */}

                <Snackbar
                    open={snacks}
                    autoHideDuration={2000}
                    message="Success"
                    onClose={() => { setSnacks(false) }}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add a new User
                        </Typography>
                        <div id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={handleSubmit((data) => onSubmit(data), handleOnError)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                {...register("empName", {
                                                    required: true,
                                                    maxLength: 64,
                                                })}
                                                defaultValue="Sukanyeah Krishna"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                            <label>Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                {...register("empEmail", {
                                                    required: true,
                                                    maxLength: 128,
                                                })}
                                                className="form-control"
                                                placeholder="Email Address"
                                            />
                                            <label>Email Address</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                {...register("empJob", {
                                                    required: true,
                                                    maxLength: 128,
                                                })}
                                                className="form-control"
                                                defaultValue={"Developer"}
                                                placeholder="Job"
                                            />
                                            <label>Job</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-3 d-flex">
                                        <PhoneInput
                                            country={'in'}
                                            placeholder="Mobile Number"
                                            value={mobile}
                                            onChange={handleMobile}
                                        // {...register("empPhone", {
                                        //     required: true
                                        // })}
                                        // onChange={mobile => this.setState({ mobile })}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                                value={genderVal}
                                                defaultValue={genderVal}
                                                onChange={(e) => setGender(e.target.value)}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                {...register("empPlace", {
                                                    required: true,
                                                    maxLength: 128,
                                                })}
                                                className="form-control"
                                                defaultValue={"Cochin"}
                                                placeholder="Location"
                                            />
                                            <label>Location</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="date"
                                                {...register("dateOfBirth", { required: false })}
                                                className="form-control"
                                                defaultValue="14-11-1995"
                                                placeholder="Date of Birth"
                                            />
                                            <label >Date of Birth</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                Age
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                defaultValue="20"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={0}>Not Available</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <Autocomplete
                                            multiple
                                            disablePortal
                                            id="combo-box-demo"
                                            options={top100Films}
                                            sx={{ width: "100%" }}
                                            onChange={(e, options) => {
                                                //   setValue("movie",options);
                                                setValue("movie_options", options);
                                                setMovie(options);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    {...register("movie", {
                                                        required: movie.length > 0 ? false : false,
                                                    })}
                                                    label="Movie"
                                                />
                                            )}
                                            value={movie}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={checkbVal}
                                                    onChange={handleCheckb}
                                                    name="checkbinp"
                                                />
                                            }
                                            label="I agree to give my kidney"
                                        />
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                />
                            </form>
                        </div>
                    </Box>
                </Modal>



            </ThemeProvider>
        </CacheProvider>
    );
}
export default App;
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

// // ReactDOM.render(<App />, document.getElementById("root"));