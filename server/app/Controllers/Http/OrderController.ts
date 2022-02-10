import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from '../../Models/Order'

export default class OrderController {
  public async index({ response }: HttpContextContract) {
    try {
      const orders = await Order.query().select('*').from('orders')
      return response.json({
        success: true,
        message: 'Orders retrieved successfully',
        data: orders,
      })
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const order = await Order.find(params.id)
      if (order) {
        return response.json({
          success: true,
          message: 'Order found',
          data: order,
        })
      } else {
        return response.json({
          success: true,
          message: 'Order not found',
          data: null,
        })
      }
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['productId', 'productName', 'userId', 'cost', 'quantity', 'adminApproval', 'dispatchStatus', 'deliveryStatus'])
      const order = await Order.create(data)
      return response.json({
        success: true,
        message: 'Order created successfully',
        data: order,
      })
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const order = await Order.findOrFail(params.id)
      if (!order) {
        return response.json({
          success: true,
          message: 'Order not found',
          data: null,
        })
      } else {
        order.merge(request.only(['productId', 'productName', 'userId', 'cost', 'quantity', 'adminApproval', 'dispatchStatus', 'deliveryStatus']))

        await order.save()
        return response.json({
          success: true,
          message: 'Order updated successfully',
          data: order,
        })
      }
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async delete({ params, response }: HttpContextContract) {
    try {
      const order = await Order.find(params.id)
      if (order) {
        order.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the order',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'Order does not exist',
          data: order,
        })
      }
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }
}
