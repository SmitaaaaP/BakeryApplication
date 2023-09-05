package com.niit.productservice.service;

import com.niit.productservice.domain.Customer;
import com.niit.productservice.exception.CustomerAlreadyExistsException;
import com.niit.productservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ICustomerService{

    private CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository){

        this.customerRepository = customerRepository;
    }

    @Override
    public Customer saveCustomer(Customer customer) throws CustomerAlreadyExistsException {
        if (customerRepository.findById(customer.getId()).isPresent()){
            throw new CustomerAlreadyExistsException();
        }
        return customerRepository.save(customer);
    }
    @Override
    public List<Customer> getAllCustomers() throws Exception{
        return customerRepository.findAll();
    }

}
