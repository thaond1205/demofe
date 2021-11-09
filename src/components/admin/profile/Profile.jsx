
import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api'
import TokenService from '../../../services/token.service';
function Profile(props) {

    const userAuthen = TokenService.getUser()
    const [user, setUser] = useState({})
    const [file, setFile] = useState();

    useEffect(() => {
        const getUserById = () => {
            api.get(`/owner/user/${userAuthen.id}`).then(res => {
                console.log(res);
                const { id, username, email, address, date_of_birth, image } = res.data.data;
                setUser({
                    id, username, email, address, date_of_birth, image
                })
            })
        }
        getUserById();

    }, [userAuthen.id])

    useEffect(() => {
        imagePreview();
    }, [])

    const onChangeImage = (event) => {
        setFile(event.target.files[0])
    }

    const onChange = (event) => {
        const target = event.target;
        const name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;

        setUser({ ...user, [name]: value })
    };

    function update() {
        var data = new FormData();
        data.append("user", JSON.stringify(user))
        data.append('file', file);
        var config = {
            method: 'put',
            url: '/owner/user',
            headers: {
                "content-type": "multipart/form-data",
            },
            data: data
        };
        api(config).then(res => {
            notification["success"]({
                message: res.data.message,
            });
        }).catch(err => {
            console.log(err.response);
            notification["error"]({
                message: err.response.data.message,
            });
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        update();
        console.log(user);
    }

    const getImage = (image) => {
        if (image) {
            return `http://localhost:8080/api/rest/files/image_user/${image}`
        }
    }

    const imagePreview = () => {
        const image = document.getElementById('image');
        const imageReview = document.getElementById('imagePreview');

        image.addEventListener('change', function () {

            const newFile = image.files[0];

            if (newFile) {
                const reader = new FileReader();

                reader.readAsDataURL(newFile);

                reader.addEventListener('load', function () {
                    imageReview.setAttribute('src', reader.result)
                })
            } else {
                imageReview.setAttribute('src', '')
            }

        });
    }


    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="!#">Admin</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Quản lý thông tin
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Sửa thông tin
                    </li>
                </ol>
            </nav>
            <hr />
            <div className="col mt-4">
                <form onSubmit={onSubmit} >
                    <div className="card">
                        <div className="row">
                            <div className="card-body offset-3">
                                <div className="col-8">
                                    <div className="form-group">
                                        <label> Tên tài khoản: </label>
                                        <input readOnly type="text" className="form-control" name="username" value={user.username} onChange={onChange} placeholder="Nhập tên tài khoản..." />
                                    </div>
                                    <div className="form-group">
                                        <label>Email :</label>
                                        <input type="email" readOnly className="form-control" name="email" value={user.email} onChange={onChange} placeholder="Nhập email..." />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Địa chỉ :</label>
                                        <input type="text" className="form-control" name="address" value={user.address} onChange={onChange} placeholder="Nhập địa chỉ..." />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date-of-birth">Ngày sinh :</label>
                                        <input type="date" className="form-control" name="date_of_birth" value={user.date_of_birth} onChange={onChange} />
                                    </div>

                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label>Hình ảnh</label>
                                        <input type="file" onChange={onChangeImage} name="imagePreview" id="image" className="form-control" accept="image/*" />
                                        <img className="my-3 img-fluid mx-auto" id="imagePreview" style={{ width: '150px' }} src={getImage(user.image)} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted offset-3">
                            <button type="submit" className="btn btn-primary mr-2">Cập nhật</button>
                            <Link style={{ marginLeft: "10px" }} to="/admin/user" className="btn btn-dark ml-2">Quay lại</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;