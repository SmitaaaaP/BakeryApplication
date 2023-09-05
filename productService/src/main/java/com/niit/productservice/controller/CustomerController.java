package com.niit.productservice.controller;

import com.niit.productservice.service.CustomerServiceImpl;
import com.niit.productservice.domain.Customer;
import com.niit.productservice.exception.CustomerAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

    private CustomerServiceImpl customerService;
    private ResponseEntity responseEntity;

    @Autowired
    public CustomerController(CustomerServiceImpl customerService){

        this.customerService = customerService;
    }

    @PostMapping("/customer")
    public ResponseEntity<?> saveCustomer(@RequestBody Customer customer) throws CustomerAlreadyExistsException {
        try {
            Customer customer1 = customerService.saveCustomer(customer);
            responseEntity = new ResponseEntity<>(customer1 , HttpStatus.CREATED);
        }
        catch (CustomerAlreadyExistsException exc){
            responseEntity = new ResponseEntity<>(exc.getMessage() , HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @GetMapping("/customers")
    public ResponseEntity<?> getAllCustomers(){
        try{
            List<Customer> customerList = customerService.getAllCustomers();
            responseEntity = new ResponseEntity<>(customerList,HttpStatus.OK);
        }
        catch (Exception exc){
            responseEntity = new ResponseEntity<>(exc.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

}
