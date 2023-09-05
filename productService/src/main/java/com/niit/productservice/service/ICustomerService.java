package com.niit.productservice.service;

import com.niit.productservice.domain.Customer;
import com.niit.productservice.exception.CustomerAlreadyExistsException;

import java.util.List;

public interface ICustomerService {

    Customer saveCustomer(Customer customer) throws CustomerAlreadyExistsException;
    List<Customer> getAllCustomers() throws Exception;

}
