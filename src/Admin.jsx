import React, { Component } from 'react';
import  "./style.css"
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SettingsIcon from '@mui/icons-material/Settings';

export default class Admin extends Component {
  render() {
    return (
      <div>  
     <div class="d-flex" id="wrapper">

<div class="bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-
    bottom">LRO TEAM</div>
    <div class="list-group list-group-flush my-3">
        <a href="12" class="list-group-item list-group-item-action bg-transparent second-text active">
          <i
                class="fas fa-tachometer-alt me-2"></i>Bảng điều khển
        </a>
      
        <a href="10" class="list-group-item list-group-item-action bg-transparent fw-bold" alt="10">
       < FolderCopyIcon/>Quản lý tài liệu
        </a>


        <a href="9" class="list-group-item list-group-item-action bg-transparent fw-bold" >
       <ImportContactsIcon/>Quản lý bài viết 
        </a>
        <a href="8" class="list-group-item list-group-item-action bg-transparent  fw-bold">
        <i class="fa-regular fa-user"></i>
        Quản lý tài khoản</a>

        <a href="13" class="list-group-item list-group-item-action bg-transparent fw-bold">
        <SettingsIcon/>  Cài đặt
                
        </a>
       
       
        <a href="5" class="list-group-item list-group-item-action bg-transparent fw-bold">
        <i class="fa-solid fa-right-from-bracket"></i>Đăng xuất</a>
    </div>
</div>

<div id="page-content-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div class="d-flex align-items-center">
             
        <div class="container">
    
            <div class="row">

            <div class="col-md-8">
                <div class="dashboard" ><a href="">Dashboard</a></div>

                <div class="input-group mb-3">
                <input type="text" class="form-control input-text" placeholder="Search...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <i class="fa fa-search"></i>         
                    </div>
                
            </div>        
                
            </div>
    
    
        </div>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle second-text fw-bold" href="4" 
                    id="navbarDropdown"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user me-2"></i>Admin
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="3">Profile</a></li>
                        <li><a class="dropdown-item" href="2">Settings</a></li>
                        <li><a class="dropdown-item" href="1">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid px-4">
        <div class="row g-3 my-2">
            <div class="col-md-3">
                <div class="p-3  green-bg shadow-sm d-flex justify-content-around align-items-center 
                rounded">
                    <div >
                     
                        <h3 class="fs-5">Tài liệu</h3>
                        <h3 class="fs-2">150</h3>
                    </div>
                    {/* <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                     */}
                     <img src="https://cdn-icons-png.flaticon.com/512/3979/3979423.png" alt="" />
                </div>
            </div>

            <div class="col-md-3">
                <div class="p-3 yellow-bg shadow-sm d-flex justify-content-around align-items-center 
                rounded">
                    <div>
                      <h3 class="fs-5">Bài viết</h3>
                        <h3 class="fs-2">120</h3>
                       
                    </div>
                  <img src="https://cdn-icons-png.flaticon.com/512/2015/2015653.png" alt="" />
                </div>
            </div>

            <div class="col-md-3">
                <div class="p-3 pink-bg shadow-sm d-flex justify-content-around align-items-center 
                rounded">
                    <div>
                      
                        <h3 class="fs-5">Người dùng</h3>
                        <h3 class="fs-2">100</h3>
                       
                    </div>
                   <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="" />

                
                </div>
            </div>

         
        </div>

        <div class="row my-5">
         
            <div class="col-1">
              <div >
              <table class="table  table1 shadow-sm  table-hover">
                    <thead>
                        <tr >
                          
                            <th scope="col"  colSpan={2} >Online</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                         
                            <td style={{paddingLeft: "20px"}}> <b>Thành viên</b> </td>
                            <td style={{marginRight:"00px"}}> <b>Trạng thái</b> </td>
                        
                        </tr>
                        <tr>
                         
                            <td>VAN THINH TRAN</td>
                            <td style={{color:"red"}}><i class="fa-solid fa-circle"></i></td>
                         
                        </tr>
                        <tr>
                          
                            <td>VAN THINH TRAN</td>
                            <td style={{color:"red"}}><i class="fa-solid fa-circle"></i></td>
                          
                        </tr>
                        <tr>
                         
                            <td>NGOC VI LE</td>
                            <td style={{color:"green"}}><i class="fa-solid fa-circle"></i></td>
                          
                        </tr>
                        <tr>
                        
                            <td>NGOC VI LE</td>
                            <td style={{color:"green"}}><i class="fa-solid fa-circle"></i></td>
                          
                        </tr>
                        <tr>   
                        
                            <td>HUU THUAN NGUYEN</td>
                            <td style={{color:"red"}}><i class="fa-solid fa-circle"></i></td>
                           
                        </tr>
                        <tr>
                        
                            <td>HUU THUAN NGUYEN</td>
                            <td style={{color:"red"}}><i class="fa-solid fa-circle"></i></td>
                         
                        </tr>
                        
                    </tbody>
                </table>
              </div>


                <table class="table table2 shadow-sm  table-hover">
                    <thead>
                        <tr >
                          
                            <th scope="col"  colSpan={2} >Tài liệu</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                         
                            <td>Nhập môn AI</td>
                          
                        
                        </tr>
                       
                        <tr>
                          
                            <td>Niên luận ngành KTPM</td>
                       
                          
                        </tr>
                        <tr>
                         
                            <td>Nhập môn lập trình web</td>
                        
                          
                        </tr>

                        <tr>
                         
                         <td>Nhập môn lập trình web</td>
                    
                       
                     </tr>
                        <tr>
                        
                        <td>Niên luận ngành KTPM</td>
                     
                          
                        </tr>
                        <tr>   
                        
                            <td>Nhập môn AI</td>
                          
                           
                        </tr>
                     
                        
                    </tbody>
                </table>
            </div>
        </div>

    </div>





    
</div>
</div>
     </div>
    )
  }
}
